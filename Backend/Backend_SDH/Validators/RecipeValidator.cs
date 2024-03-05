using Backend_SDH.Dtos.RecipeDtos;
using Backend_SDH.Dtos.RecipeIngredientDtos;
using Backend_SDH.Services.Interfaces;
using FluentValidation;

namespace Backend_SDH.Validators
{
    public class RecipeValidator : AbstractValidator<AddRecipeDto>
    {
        public RecipeValidator(IRecipeService recipeService, ICookMethodService cookMethodService, IIngredientService ingredientService)
        {
            RuleFor(r => r.Name).NotEmpty();
            RuleFor(r => r.Description).NotEmpty();
            RuleFor(r => r.CookingMinutes).NotEmpty();
            RuleFor(r => r.Portion).NotEmpty();
            RuleFor(r => r.ImgUrl).NotEmpty();
            RuleFor(r => r.RecipeIngredients).NotEmpty()
                .MustAsync((ri, _) => IngredientsExist(ri, ingredientService))
                .WithMessage($"Ingredients have errors. Please use valid ingredients.");
            RuleFor(r => r.CookMethodId).NotEmpty()
                .Must(cookMethodId => CookMethodExists(cookMethodId, cookMethodService))
                .WithMessage("CookMethod : {PropertyValue} not found.");
        }

        private static async Task<bool> IngredientsExist(IEnumerable<AddRecipeIngredientDto> recipeIngredients, IIngredientService ingredientService)
        {
            if (!recipeIngredients.Any())
            {
                return false;
            }

            var ingredientsIds = recipeIngredients.Select(ri => ri.IngredientId);
            var serviceResponse = await ingredientService.IngredientsExist(ingredientsIds);
            return serviceResponse.Success && serviceResponse.Data;
        }

        private static bool CookMethodExists(int id, ICookMethodService cookMethodService)
        {
            var serviceResponse = cookMethodService.CookMethodExists(id);
            return serviceResponse.Data;
        }
    }
}
