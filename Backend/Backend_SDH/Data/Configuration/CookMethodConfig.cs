using Backend_SDH.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend_SDH.Data.Configuration
{
    public class CookMethodConfig : IEntityTypeConfiguration<CookMethod>
    {
        public void Configure(EntityTypeBuilder<CookMethod> builder)
        {
            builder.Property(x => x.Name).IsRequired().HasMaxLength(255);
        }
    }
}
