using Backend_SDH.Dtos.IngredientDtos;
using Backend_SDH.Models;
using Backend_SDH.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Backend_SDH.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientController : ControllerBase
    {
        private readonly IIngredientService _ingredientService;

        public IngredientController(IIngredientService ingredientService)
        {
            _ingredientService = ingredientService;
        }

        [HttpGet]

        public async Task<ActionResult<ServiceResponse<List<IngredientDto>>>> GetIngredients()
        {
            return Ok(await _ingredientService.GetIngredients());
        }
    }
}
