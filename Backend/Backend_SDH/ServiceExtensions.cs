using Backend_SDH.Services;
using Backend_SDH.Services.Interfaces;

namespace Backend_SDH
{
    public static class ServiceExtensions
    {
        public static void AddCustomServices(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(Program).Assembly);
            services.AddScoped<ICookMethodService, CookMethodService>();
            services.AddScoped<IRecipeService, RecipeService>();
            services.AddScoped<IIngredientService, IngredientService>();
        }
    }
}
