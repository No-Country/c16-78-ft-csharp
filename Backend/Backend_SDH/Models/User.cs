namespace Backend_SDH.Models
{
    public class User : BaseEntity
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public UserRole UserRole { get; set; }
        public int UserRoleId { get; set; }
        public List<Recipe> Recipes { get; set; }
        public List<Recipe> FavouriteRecipes { get; set; }
    }
}
