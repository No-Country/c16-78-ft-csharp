using Backend_SDH.Dtos;
using Backend_SDH.Models;
using Backend_SDH.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Backend_SDH.Controllers
{
    public class CookMethodController : ControllerBase
    {
        private readonly ICookMethodService _cookMethodService;

        public CookMethodController(ICookMethodService cookMethodService)
        {
            _cookMethodService = cookMethodService;
        }

        [HttpGet("GetCookMethods")]

        public async Task<ActionResult<ServiceResponse<List<CookMethodDto>>>> Get()
        {
            return Ok(await _cookMethodService.GetCookMethods());
        }
    }
}
