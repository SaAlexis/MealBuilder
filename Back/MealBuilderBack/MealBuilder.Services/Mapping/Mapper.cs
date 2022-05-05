using AutoMapper;
using MealBuilder.DTOS;
using MealBuilder.Entities;

namespace MealBuilder.Services.Mapping
{
    public class Mapper : Profile
    {
        public Mapper()
        {
            CreateMap<IngredientDto, IngredientEntity>().ReverseMap();
            CreateMap<ReceipeDto, ReceipeEntity>().ReverseMap();
        }
    }
}