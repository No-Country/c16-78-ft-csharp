namespace Backend_SDH.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int CookMethodId { get; set; }
        public CookMethod CookMethod { get; set; }
        public List<RecipeIngredient> RecipeIngredients { get; set; }
        public decimal KcalTotal { get; set; }
    }
}
