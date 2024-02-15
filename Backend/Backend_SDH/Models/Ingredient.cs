namespace Backend_SDH.Models
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Kcal {  get; set; }
        public List<RecipeIngredient> RecipeIngredients { get; set; }
    }
}
