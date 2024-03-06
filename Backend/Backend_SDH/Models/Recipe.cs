namespace Backend_SDH.Models
{
    public class Recipe : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int CookMethodId { get; set; }
        public CookMethod CookMethod { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public List<RecipeIngredient> RecipeIngredients { get; set; }
        public string ImgUrl { get; set; }
        public int Portion { get; set; }
        public int CookingMinutes { get; set; }
    }
}
