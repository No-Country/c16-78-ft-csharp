namespace Backend_SDH.Models
{
    public class RecipeIngredient
    {
        public int RecipeId { get; set; }
        public int IngredientId { get; set; }
        public Recipe Recipe { get; set; }
        public Ingredient Ingredient { get; set; }
        public decimal IngredientQuantity { get; set; }
    }
}
