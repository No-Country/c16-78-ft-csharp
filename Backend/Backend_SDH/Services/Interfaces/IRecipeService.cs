using Backend_SDH.Dtos.RecipeDtos;
using Backend_SDH.Models;

namespace Backend_SDH.Services.Interfaces
{
    public interface IRecipeService
    {
        Task<ServiceResponse<List<RecipePreviewDto>>> GetRecipesPreview();
        Task<ServiceResponse<GetRecipeDto>> GetRecipeById(int id);
        Task<ServiceResponse<GetRecipeDto>> AddRecipe(AddRecipeDto newRecipe);
        Task<ServiceResponse<GetRecipeDto>> UpdateRecipe(int id, AddRecipeDto updatedRecipe);
    }
}
