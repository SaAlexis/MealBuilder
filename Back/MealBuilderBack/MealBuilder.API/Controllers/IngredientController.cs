using Microsoft.AspNetCore.Mvc;
using MealBuidler.Persistence;
using MealBuilder.Entities;
using AutoMapper;
using MealBuilder.DTOS;
using MealBuilder.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MealBuilder.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientController : GenericController<IngredientDto, IngredientEntity>
    {
        public IngredientController(IGenericService<IngredientDto, IngredientEntity> genericService) : base(genericService)
        {
        }
    }
}
