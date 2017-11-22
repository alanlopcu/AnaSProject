using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AnaSProject.ViewModels;
using AnaSProject.Services;

namespace AnaSProject.Controllers
{
    public class AppController : Controller
    {
        private readonly IMailService _mailService;

        public AppController(IMailService mailService)
        {
            _mailService = mailService;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                //Send the email
                _mailService.SendMessage("alanlopcu@gmail.com", model.Subject, $"From: {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail Sent!*";
                ModelState.Clear();
            }
            else
            {
                //Show the errors
            }
            return View();
        }

        public IActionResult About()
        {
            //ViewBag.Title = "About Me";
            return View();
        }
    }
}
