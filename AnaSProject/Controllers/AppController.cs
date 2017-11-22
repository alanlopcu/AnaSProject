using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AnaSProject.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index() {
            return View();
        }

        public IActionResult Contact() {
            ViewBag.Title = "Contact Me";
            return View();
        }

        public IActionResult About() {
            ViewBag.Title = "About Me";
            return View();
        }
    }
}
