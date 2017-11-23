using AnaSProject.Data;
using AnaSProject.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnaSProject.Controllers
{
    [Route("api/[Controller]")]
    public class ProductsController : Controller
    {
        private readonly IAnaSRepository _repository;

        public ProductsController(IAnaSRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repository.GetAllProducts());
            }
            catch(Exception ex) 
            {
                //I must implement logger here. Maybe later...
                return BadRequest("Error getting products:"+ex.Message);
            }            
        }
    }
}
