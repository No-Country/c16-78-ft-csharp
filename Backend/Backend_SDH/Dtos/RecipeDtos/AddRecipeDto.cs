using Backend_SDH.Dtos.RecipeIngredientDtos;

namespace Backend_SDH.Dtos.RecipeDtos
{
    public class AddRecipeDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int CookMethodId { get; set; }
        public int Portion { get; set; }
        public int CookingMinutes { get; set; }
        public string ImgUrl { get; set; }
        public List<AddRecipeIngredientDto> RecipeIngredients { get; set; }
    }
}
