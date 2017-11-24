using AnaSProject.Data;
using AnaSProject.Data.Entities;
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
    public class OrdersController : Controller
    {
        private readonly IAnaSRepository _repository;
        private readonly IMapper _mapper;

        public OrdersController(IAnaSRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_mapper.Map<IEnumerable<Order>, IEnumerable<OrderViewModel>>(_repository.GetAllOrders()));
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
                var order = _repository.GetOrderById(id);
                if (order != null) return Ok(_mapper.Map<Order, OrderViewModel>(order));
                else return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest("Error getting Order: " + ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]OrderViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newOrder = _mapper.Map<OrderViewModel, Order>(model);

                    if (newOrder.OrderDate == DateTime.MinValue)
                        newOrder.OrderDate = DateTime.Now;

                    _repository.AddEntity(newOrder);

                    if (_repository.SaveChanges())
                    {
                        return Created($"/api/orders/{newOrder.OrderId}", _mapper.Map<Order, OrderViewModel>(newOrder));
                    }                        
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                //TODO
                return BadRequest("Error saving: " + ex.Message);
            }
            return BadRequest("Error saving...");
        }
    }
}
