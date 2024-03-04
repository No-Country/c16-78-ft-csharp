namespace Backend_SDH.Models
{
    public class Ingredient : BaseEntity
    {
        public string Name { get; set; }
        public List<RecipeIngredient>? RecipeIngredients { get; set; }
        public bool IsMain { get; set; }
    }
}
