using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AnaSProject.ViewModels;
using AnaSProject.Data;

namespace AnaSProject.Controllers
{
    public class AppController : Controller
    {
        private readonly IAnaSRepository _repository;

        public AppController(IAnaSRepository repository)
        {
            _repository = repository;
        }

        public IActionResult Shop()
        {
            return View();
        }

        [HttpGet("about")]
        public IActionResult About()
        {
            return View();
        }
    }
}
