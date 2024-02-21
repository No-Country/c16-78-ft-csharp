using AutoMapper;
using Backend_SDH.Dtos;
using Backend_SDH.Models;

namespace Backend_SDH
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<CookMethodDto, CookMethod>().ReverseMap();
        }
    }
}
