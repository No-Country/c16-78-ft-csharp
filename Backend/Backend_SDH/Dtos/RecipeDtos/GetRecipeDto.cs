
using Backend_SDH.Dtos.RecipeIngredientDtos;

namespace Backend_SDH.Dtos.RecipeDtos
{
    public class GetRecipeDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string CookMethodName { get; set; }
        public int Portion { get; set; }
        public List<RecipeIngredientDto> RecipeIngredients { get; set; }
        public string ImgUrl { get; set; }
        public int CookingMinutes { get; set; }
    }
}
