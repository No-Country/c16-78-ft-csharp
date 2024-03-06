using AutoMapper;
using AutoMapper.QueryableExtensions;
using Backend_SDH.Data;
using Backend_SDH.Dtos.IngredientDtos;
using Backend_SDH.Models;
using Backend_SDH.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Backend_SDH.Services
{
    public class IngredientService : IIngredientService
    {
        private readonly IMapper _mapper;
        private readonly DataContext _dataContext;

        public IngredientService(IMapper mapper, DataContext dataContext)
        {
            _mapper = mapper;
            _dataContext = dataContext;
        }

        public async Task<ServiceResponse<List<IngredientDto>>> GetIngredients()
        {
            var serviceResponse = new ServiceResponse<List<IngredientDto>>();

            try
            {
                serviceResponse.Data = await _dataContext.Ingredients.ProjectTo<IngredientDto>(_mapper.ConfigurationProvider).ToListAsync();
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<bool>> IngredientsExist(IEnumerable<int> ids)
        {
            var serviceResponse = new ServiceResponse<bool>();

            try
            {
                var ingredientsIds = await _dataContext.Ingredients.ToListAsync();
                serviceResponse.Data = ids.All(x => ingredientsIds.Select(t => t.Id).Contains(x));
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
