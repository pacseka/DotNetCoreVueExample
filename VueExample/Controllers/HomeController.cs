﻿using Microsoft.AspNetCore.Mvc;


namespace VueExample.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
