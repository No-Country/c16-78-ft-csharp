using Backend_SDH.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend_SDH.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<CookMethod> CookMethods { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<RecipeIngredient> RecipeIngredients { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //TODO: move configs to individual config files
            //TODO: apply configurations to decimals and strings (max length)
            modelBuilder.Entity<RecipeIngredient>().HasKey(x => new {x.RecipeId, x.IngredientId});
            base.OnModelCreating(modelBuilder);
        }
    }
}
