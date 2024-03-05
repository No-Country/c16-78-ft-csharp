using Backend_SDH.Dtos.CookMethodDtos;
using Backend_SDH.Models;

namespace Backend_SDH.Services.Interfaces
{
    public interface ICookMethodService
    {
        Task<ServiceResponse<List<CookMethodDto>>> GetCookMethods();
        Task<ServiceResponse<CookMethodDto>> AddCookMethod(CookMethodDto newCookMethod);
        Task<ServiceResponse<CookMethodDto>> EditCookMethod(int id, CookMethodDto updatedCookMethod);
        Task<ServiceResponse<List<CookMethodDto>>> DeleteCookMethod(int id);
        ServiceResponse<bool> NameExists(string name, int id = 0);
        ServiceResponse<bool> CookMethodExists(int id);
    }
}
