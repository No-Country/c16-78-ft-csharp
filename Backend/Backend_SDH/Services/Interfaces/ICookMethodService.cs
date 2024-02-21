using Backend_SDH.Dtos;
using Backend_SDH.Models;

namespace Backend_SDH.Services.Interfaces
{
    public interface ICookMethodService
    {
        Task<ServiceResponse<List<CookMethodDto>>> GetCookMethods();
    }
}
