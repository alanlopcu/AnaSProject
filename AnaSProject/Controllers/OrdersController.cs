using AnaSProject.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnaSProject.Controllers
{
    [Route("api/[Controller]")]
    public class OrdersController : Controller
    {
        private readonly IAnaSRepository _repository;

        public OrdersController(IAnaSRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repository.GetAllOrders());
            }
            catch (Exception ex)
            {
                return BadRequest("Error getting Orders: "+ex.Message);
            }
        }

        [HttpGet("{id:int}")]//Expecting integers only
        public IActionResult Get(int id)
        {
            try
            {
                var Order = _repository.GetOrderById(id);
                if (Order != null) return Ok(Order);
                else return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest("Error getting Orders: " + ex.Message);
            }
        }
    }
}
