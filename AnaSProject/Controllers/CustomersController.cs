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
    public class CustomersController : Controller
    {
        private IAnaSRepository _repository;
        private IMapper _mapper;

        public CustomersController(IAnaSRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet("")]
        public IActionResult Get()
        {
            try
            {
                return Ok(_mapper.Map<IEnumerable<Customer>, IEnumerable<CustomerViewModel>>(_repository.GetAllCustomers()));
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
                Customer customer = _repository.GetCustomerById(id);

                if (customer == null) return NotFound($"Customer {id} was not found!");

                return Ok(_mapper.Map<CustomerViewModel>(customer));
            }
            catch(Exception ex)
            {
                return BadRequest("Error getting data: " + ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]CustomerViewModel model)
        {
            try
            {
                var newCustomer = _mapper.Map<CustomerViewModel, Customer>(model);

                _repository.Add(newCustomer);
                if (await _repository.SaveAllAsync())
                {
                    return Created($"/api/customers/{newCustomer.CustomerId}", _mapper.Map<Customer, CustomerViewModel>(newCustomer));
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

        [HttpPut("{CustomerId}")]
        public async Task<IActionResult> Put(int CustomerId, [FromBody] CustomerViewModel model)
        {
            try
            {
                var oldCustomer = _repository.GetCustomerById(CustomerId);
                if (oldCustomer == null) return NotFound($"Could not find a customer with this id: {CustomerId}");

                _mapper.Map(model, oldCustomer);

                if (await _repository.SaveAllAsync())
                {
                    return Ok(_mapper.Map<CustomerViewModel>(oldCustomer));
                }
            }
            catch (Exception ex)
            {
                return BadRequest("Error: " + ex.Message + " - ModelState: " + ModelState);
            }

            return BadRequest("Couldn't update Customer");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var oldCustomer = _repository.GetCustomerById(id);
                if (oldCustomer == null) return NotFound($"Could not find Customer with this id: {id}");

                _repository.Delete(oldCustomer);

                if (await _repository.SaveAllAsync())
                {
                    return Ok();
                }
            }
            catch (Exception)
            {
            }

            return BadRequest("Could not delete Customer");
        }

    }
}