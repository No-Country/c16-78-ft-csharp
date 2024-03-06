using AutoMapper;
using Backend_SDH.Dtos.CookMethodDtos;
using Backend_SDH.Dtos.IngredientDtos;
using Backend_SDH.Dtos.RecipeDtos;
using Backend_SDH.Dtos.RecipeIngredientDtos;
using Backend_SDH.Models;

namespace Backend_SDH
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<CookMethodDto, CookMethod>().ReverseMap();
            CreateMap<AddRecipeDto, Recipe>()
                .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => 1));
            CreateMap<RecipeIngredient, RecipeIngredientDto>()
                .ForMember(dest => dest.IsMain, opt => opt.MapFrom(src => src.Ingredient.IsMain));
            CreateMap<AddRecipeIngredientDto, RecipeIngredient>();
            CreateMap<Recipe, GetRecipeDto>();
            CreateMap<Recipe, RecipePreviewDto>();
            CreateMap<Ingredient, IngredientDto>();
        }
    }
}
