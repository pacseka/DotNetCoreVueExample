using Bogus;
using Microsoft.AspNetCore.Mvc;
using System;
using VueExample.Model;

namespace VueExample.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get([FromQuery]bool all)
        {

            var usersFake = new Faker<User>()
                .RuleFor(u => u.Id, (f) => f.Random.Guid())
                .RuleFor(u => u.Name, (f, u) => f.Name.FullName())
                .RuleFor(u => u.Email, (f, u) => f.Internet.Email(u.Name))
                .RuleFor(u => u.City, (f) => f.Address.City());

            var count = all ? 25 : 5;

            var user = usersFake.Generate(count);

            return Ok(user);
        }
    }
}