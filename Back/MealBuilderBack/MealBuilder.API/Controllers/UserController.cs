using MealBuilder.DTOS;
using MealBuilder.Entities;
using MealBuilder.Services;
using Microsoft.AspNetCore.Mvc;

namespace MealBuilder.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : GenericController<IngredientDto, IngredientEntity>
    {
        public UserController(IGenericService<IngredientDto, IngredientEntity> genericService) : base(genericService)
        {
        }
    }
}