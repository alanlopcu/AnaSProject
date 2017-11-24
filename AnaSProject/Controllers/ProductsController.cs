using AnaSProject.Data;
using AnaSProject.Data.Entities;
using AnaSProject.Filters;
using AnaSProject.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnaSProject.Controllers
{
    [Route("api/[Controller]")]
    [ValidateModel]
    public class ProductsController : Controller
    {
        private readonly IAnaSRepository _repository;
        private readonly IMapper _mapper;

        public ProductsController(IAnaSRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                //return Ok(_repository.GetAllProducts());
                return Ok(_mapper.Map<IEnumerable<Product>, IEnumerable<ProductViewModel>>(_repository.GetAllProducts()));
            }
            catch(Exception ex) 
            {
                //I must implement logger here. Maybe later...
                return BadRequest("Error getting products:"+ex.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                Product product = _repository.GetProductById(id);

                if (product == null) return NotFound($"Product {id} was not found!");

                return Ok(_mapper.Map<ProductViewModel>(product));
            }
            catch (Exception ex)
            {
                return BadRequest("Error getting data: " + ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]ProductViewModel model)
        {
            try
            {
                var newProduct = _mapper.Map<ProductViewModel, Product>(model);

                _repository.Add(newProduct);
                if (await _repository.SaveAllAsync())
                {
                    return Created($"/api/products/{newProduct.ProductId}", _mapper.Map<Product, ProductViewModel>(newProduct));
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                return BadRequest("Error: " + ex.Message + " - ModelState: " + ModelState);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] ProductViewModel model)
        {
            try
            {
                var oldProduct = _repository.GetProductById(id);
                if (oldProduct == null) return NotFound($"Could not find a product with this id: {id}");

                _mapper.Map(model, oldProduct);


                if (await _repository.SaveAllAsync())
                {
                    return Ok(_mapper.Map<ProductViewModel>(oldProduct));
                }
            }
            catch (Exception ex)
            {
                return BadRequest("Error: " + ex.Message + " - ModelState: " + ModelState);
            }

            return BadRequest("Couldn't update Product");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var oldProduct = _repository.GetProductById(id);
                if (oldProduct == null) return NotFound($"Could not find Product with this id: {id}");

                _repository.Delete(oldProduct);

                if (await _repository.SaveAllAsync())
                {
                    return Ok();
                }
            }
            catch (Exception)
            {
            }

            return BadRequest("Could not delete Product");
        }
    }
}
