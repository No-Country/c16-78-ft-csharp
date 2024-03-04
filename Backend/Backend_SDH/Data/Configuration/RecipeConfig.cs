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
            builder.HasOne(x => x.User).WithMany(x => x.Recipes).OnDelete(DeleteBehavior.Restrict);
            builder.Property(x => x.CookingMinutes).IsRequired().HasMaxLength(4);
            builder.Property(x => x.Portion).IsRequired();
            builder.Property(x => x.ImgUrl).IsRequired();
        }
    }
}
