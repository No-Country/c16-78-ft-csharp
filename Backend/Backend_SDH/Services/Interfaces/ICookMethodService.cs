using Backend_SDH.Dtos;
using Backend_SDH.Models;

namespace Backend_SDH.Services.Interfaces
{
    public interface ICookMethodService
    {
        Task<ServiceResponse<List<CookMethodDto>>> GetCookMethods();
        Task<ServiceResponse<CookMethodDto>> AddCookMethod(CookMethodDto newCookMethod);
        ServiceResponse<bool> NameExists(string name, int id = 0);
    }
}
