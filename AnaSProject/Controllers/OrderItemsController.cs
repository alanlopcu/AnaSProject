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
    [Route("/api/orders/{orderid}/items")]
    public class OrderItemsController : Controller
    {
        private readonly IAnaSRepository _repository;
        private readonly IMapper _mapper;

        public OrderItemsController(IAnaSRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get(int orderId)
        {
            try
            {
                var order = _repository.GetOrderById(orderId);
                if (order != null) return Ok(_mapper.Map<IEnumerable<OrderItem>, IEnumerable<OrderItemViewModel>>(order.Items));
                else return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest("Sana Error: " + ex.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(int orderId, int id)
        {
            try
            {
                var order = _repository.GetOrderById(orderId);
                if (order != null)
                {
                    var item = order.Items.Where(i => i.OrderItemId == id).FirstOrDefault();
                    if (item != null)
                    {
                        return Ok(_mapper.Map<OrderItem, OrderItemViewModel>(item));
                    }
                    else return NotFound();
                }
                else return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest("Sana Error: " + ex.Message);
            }
        }
    }
}
