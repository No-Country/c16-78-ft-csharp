using Backend_SDH.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend_SDH.Data.Configuration
{
    public class RecipeConfig : IEntityTypeConfiguration<Recipe>
    {
        public void Configure(EntityTypeBuilder<Recipe> builder)
        {
            builder.Property(x => x.Name).IsRequired().HasMaxLength(255);
            builder.Property(x => x.Description).IsRequired();
            builder.Property(x => x.CookMethodId).IsRequired();
            builder.Property(x => x.KcalTotal).IsRequired().HasPrecision(18, 2);
            builder.HasOne(x => x.User).WithMany(x => x.Recipes).OnDelete(DeleteBehavior.Restrict);
            builder.HasMany(x => x.Users).WithMany(x => x.FavouriteRecipes).UsingEntity("UsersFavouriteRecipes");
        }
    }
}
