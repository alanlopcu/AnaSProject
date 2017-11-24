using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using AnaSProject.Data;
using AnaSProject.Data.Entities;
using AnaSProject.Filters;
using AnaSProject.ViewModels;

namespace AnaSProject.Controllers
{
    [Route("api/[controller]")]
    [ValidateModel]
    public class CategoryController : Controller
    {
        private IAnaSRepository _repository;
        private IMapper _mapper;

        public CategoryController(IAnaSRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                //return Ok(_mapper.Map<IEnumerable<Category>, IEnumerable<CategoryViewModel>>(_repository.GetAllCategories()));
                return Ok(_repository.GetAllCategories()); 
            }
            catch (Exception ex)
            {
                return BadRequest("Error getting data: " + ex.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                Category category = _repository.GetCategoryById(id);

                if (category == null) return NotFound($"Category {id} was not found!");

                return Ok(_mapper.Map<CategoryViewModel>(category));
            }
            catch(Exception ex)
            {
                return BadRequest("Error getting data: " + ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]CategoryViewModel model)
        {
            try
            {
                var newCategory = _mapper.Map<CategoryViewModel, Category>(model);

                _repository.Add(newCategory);
                if (await _repository.SaveAllAsync())
                {
                    return Created($"/api/categories/{newCategory.CategoryId}", _mapper.Map<Category, CategoryViewModel>(newCategory));
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                return BadRequest("Error: "+ ex.Message + " - ModelState: "+ ModelState);
            }
        }

        [HttpPut("{CategoryId}")]
        public async Task<IActionResult> Put(int CategoryId, [FromBody] CategoryViewModel model)
        {
            try
            {
                var oldCategory = _repository.GetCategoryById(CategoryId);
                if (oldCategory == null) return NotFound($"Could not find a category with this id: {CategoryId}");

                _mapper.Map(model, oldCategory);

                if (await _repository.SaveAllAsync())
                {
                    return Ok(_mapper.Map<CategoryViewModel>(oldCategory));
                }
            }
            catch (Exception ex)
            {
                return BadRequest("Error: " + ex.Message + " - ModelState: " + ModelState);
            }

            return BadRequest("Couldn't update Category");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var oldCategory = _repository.GetCategoryById(id);
                if (oldCategory == null) return NotFound($"Could not find Category with this id: {id}");

                _repository.Delete(oldCategory);

                if (await _repository.SaveAllAsync())
                {
                    return Ok();
                }
            }
            catch (Exception)
            {
            }

            return BadRequest("Could not delete Category");
        }

    }
}