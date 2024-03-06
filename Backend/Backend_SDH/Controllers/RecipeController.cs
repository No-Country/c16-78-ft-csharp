using Backend_SDH.Dtos.CookMethodDtos;
using Backend_SDH.Dtos.RecipeDtos;
using Backend_SDH.Helpers;
using Backend_SDH.Models;
using Backend_SDH.Services.Interfaces;
using Backend_SDH.Validators;
using Microsoft.AspNetCore.Mvc;

namespace Backend_SDH.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private readonly IRecipeService _recipeService;
        private readonly RecipeValidator _recipeValidator;

        public RecipeController(IRecipeService recipeService, ICookMethodService cookMethodService, IIngredientService ingredientService)
        {
            _recipeService = recipeService;
            _recipeValidator = new RecipeValidator(_recipeService, cookMethodService, ingredientService);
        }

        [HttpGet]
        public async Task<ActionResult<ServiceResponse<List<RecipePreviewDto>>>> GetRecipesPreview()
        {
            return Ok(await _recipeService.GetRecipesPreview());
        }

        [HttpGet("GetRecipeById/{id}")]

        public async Task<ActionResult<ServiceResponse<GetRecipeDto>>> GetRecipeById(int id)
        {
            return Ok(await _recipeService.GetRecipeById(id));
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<GetRecipeDto>>> AddRecipe(AddRecipeDto newRecipe)
        {
            var validation = await _recipeValidator.ValidateAsync(newRecipe);
            if(!validation.IsValid)
            {
                var response = new ServiceResponse<AddRecipeDto>
                {
                    Success = false,
                    Errors = ValidationHelper.GetErrorsList(validation.Errors)
                };

                return BadRequest(response);
            }
            return Ok(await _recipeService.AddRecipe(newRecipe));
        }

        [HttpPut]
        public async Task<ActionResult<ServiceResponse<GetRecipeDto>>> UpdateRecipe(int id, AddRecipeDto updatedRecipe)
        {
            ServiceResponse<GetRecipeDto> response;

            if(id != updatedRecipe.Id)
            {
                return BadRequest();
            }

            var validation = await _recipeValidator.ValidateAsync(updatedRecipe);

            if (!validation.IsValid)
            {
                response = new ServiceResponse<GetRecipeDto>
                {
                    Success = false,
                    Errors = ValidationHelper.GetErrorsList(validation.Errors)
                };
                return BadRequest(response);
            }

            response = await _recipeService.UpdateRecipe(id, updatedRecipe);

            if(response.Data is null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }

        [HttpDelete]
        public async Task<ActionResult<ServiceResponse<List<RecipePreviewDto>>>> DeleteRecipe(int id)
        {
            var response = await _recipeService.DeleteRecipe(id);
            if(response.Data is null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }
    }
}
