using Backend_SDH.Dtos.IngredientDtos;
using Backend_SDH.Models;

namespace Backend_SDH.Services.Interfaces
{
    public interface IIngredientService
    {
        Task<ServiceResponse<List<IngredientDto>>> GetIngredients();
        Task<ServiceResponse<bool>> IngredientsExist(IEnumerable<int> ids);
    }
}
