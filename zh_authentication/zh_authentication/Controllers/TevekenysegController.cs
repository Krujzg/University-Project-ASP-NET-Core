using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Configuration;
using zh_authentication.Data;
using zh_authentication.Hubs;
using zh_authentication.Models;

namespace zh_authentication.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TevekenysegController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _context;
        private readonly IHubContext<TevekenysegHub> _hub;

        public TevekenysegController(UserManager<IdentityUser> userManager, IConfiguration configuration,
            ApplicationDbContext context, IHubContext<TevekenysegHub> hub)
        {
            _userManager = userManager;
            _configuration = configuration;
            _context = context;
            _hub = hub;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Tevekenyseg>> Get()
        {
            return _context.Tevekenyseg;
        }

        [HttpGet("{nev}")]
        public ActionResult<Tevekenyseg[]> Get(string nev)
        {
            return _context.Tevekenyseg.Where(t => t.Kategoria == nev).ToArray();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            var tevekenysegToRemove = _context.Tevekenyseg.FirstOrDefault(t => t.Uid == id);
            _context.Tevekenyseg.Remove(tevekenysegToRemove);
            _context.SaveChanges();
            await _hub.Clients.All.SendAsync("TevekenysegDeleted", tevekenysegToRemove);

            return Ok();
        }


        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Tevekenyseg value)
        {
            _context.Tevekenyseg.Add(value);
            _context.SaveChanges();
            await _hub.Clients.All.SendAsync("Tevekenyseg", value);
            return Ok();
        }

    }
}
