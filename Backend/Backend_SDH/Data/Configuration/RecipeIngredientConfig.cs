using Backend_SDH.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend_SDH.Data.Configuration
{
    public class RecipeIngredientConfig : IEntityTypeConfiguration<RecipeIngredient>
    {
        public void Configure(EntityTypeBuilder<RecipeIngredient> builder)
        {
            builder.HasKey(x => new { x.RecipeId, x.IngredientId });
            builder.Property(x => x.RecipeId).IsRequired();
            builder.Property(x => x.IngredientId).IsRequired();
            builder.Property(x => x.IngredientQuantity).IsRequired().HasPrecision(18, 2);
        }
    }
}
