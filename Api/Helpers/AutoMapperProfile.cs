


using Api.DTO;
using Api.Entities;
using Api.Extensions;
using API.DTOs;
using AutoMapper;

namespace Api.Helpers;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<AppUser, MemberDto>().ForMember(dest => dest.PhotoUrl,
         opt => opt.MapFrom(src => src.Photos.FirstOrDefault(x => x.IsMain).Url))
            // .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.GetAge()));
            .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
        CreateMap<Photo, PhotoDto>();

    }

}
