using AutoMapper;
using AutoMapper.QueryableExtensions;
using Backend_SDH.Data;
using Backend_SDH.Dtos.RecipeDtos;
using Backend_SDH.Models;
using Backend_SDH.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Backend_SDH.Services
{
    public class RecipeService : IRecipeService
    {
        private readonly IMapper _mapper;

        private readonly DataContext _dataContext;

        public RecipeService(IMapper mapper, DataContext dataContext)
        {
            _mapper = mapper;
            _dataContext = dataContext;
        }

        public async Task<ServiceResponse<GetRecipeDto>> AddRecipe(AddRecipeDto newRecipe)
        {
            var serviceResponse = new ServiceResponse<GetRecipeDto>();

            try
            {
                var recipe = _mapper.Map<Recipe>(newRecipe);
                _dataContext.Recipes.Add(recipe);



                await _dataContext.SaveChangesAsync();

                serviceResponse.Data = await _dataContext.Recipes
                    .ProjectTo<GetRecipeDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(r => r.Id == recipe.Id);
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<RecipePreviewDto>>> DeleteRecipe(int id)
        {
            var serviceResponse = new ServiceResponse<List<RecipePreviewDto>>();

            try
            {
                var dbRecipe = await _dataContext.Recipes.FirstOrDefaultAsync(r => r.Id == id);
                if (dbRecipe == null)
                {
                    throw new Exception($"Recipe Id '{id}' not found.");
                }

                _dataContext.Recipes.Remove(dbRecipe);

                await _dataContext.SaveChangesAsync();

                serviceResponse.Data = await _dataContext.Recipes.ProjectTo<RecipePreviewDto>(_mapper.ConfigurationProvider).ToListAsync();
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetRecipeDto>> GetRecipeById(int id)
        {
            var serviceResponse = new ServiceResponse<GetRecipeDto>();

            try
            {
                serviceResponse.Data = await _dataContext.Recipes
                    .ProjectTo<GetRecipeDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(r => r.Id == id);
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }

            return serviceResponse;
        }

        public async Task<ServiceResponse<List<RecipePreviewDto>>> GetRecipesPreview()
        {
            var serviceResponse = new ServiceResponse<List<RecipePreviewDto>>();

            try
            {
                serviceResponse.Data = await _dataContext.Recipes
                    .ProjectTo<RecipePreviewDto>(_mapper.ConfigurationProvider)
                    .ToListAsync();
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }

            return serviceResponse;
        }

        public async Task<ServiceResponse<GetRecipeDto>> UpdateRecipe(int id, AddRecipeDto updatedRecipe)
        {
            var serviceResponse = new ServiceResponse<GetRecipeDto>();

            try
            {
                var dbRecipe = await _dataContext.Recipes
                    .Include(r => r.RecipeIngredients)
                    .AsTracking()
                    .FirstOrDefaultAsync(r => r.Id == id);

                if (dbRecipe == null)
                {
                    throw new Exception($"Recipe Id '{id}' was not found.");
                }

                _mapper.Map(updatedRecipe, dbRecipe);
                await _dataContext.SaveChangesAsync();

                serviceResponse.Data = await _dataContext.Recipes
                    .ProjectTo<GetRecipeDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(r => r.Id == id);
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            return serviceResponse;
        }
    }
}
