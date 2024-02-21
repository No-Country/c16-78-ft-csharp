using Backend_SDH.Dtos;
using Backend_SDH.Models;
using Backend_SDH.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Backend_SDH.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CookMethodController : ControllerBase
    {
        private readonly ICookMethodService _cookMethodService;

        public CookMethodController(ICookMethodService cookMethodService)
        {
            _cookMethodService = cookMethodService;
        }

        [HttpGet]

        public async Task<ActionResult<ServiceResponse<List<CookMethodDto>>>> GetCookMethods()
        {
            return Ok(await _cookMethodService.GetCookMethods());
        }

        [HttpPost]

        public async Task<ActionResult<ServiceResponse<CookMethodDto>>> AddCookMethod(CookMethodDto newCookMethod)
        {
            return Ok(await _cookMethodService.AddCookMethod(newCookMethod));
        }
    }
}
