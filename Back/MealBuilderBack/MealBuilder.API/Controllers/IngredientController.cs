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
    public class IngredientController : ControllerBase
    {
        private IGenericService<IngredientDto, IngredientEntity> _ingredientService;

        public IngredientController(GenericService<IngredientDto, IngredientEntity> ingredientService)
        {
            _ingredientService = ingredientService;
        }

        // GET: api/<ValuesController>
        [HttpGet]
        public virtual async Task<IActionResult> Get()
        {
            try
            {
                var result = await _ingredientService.GetAll();
                return Ok(result);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public virtual async Task<IActionResult> Get(int id)
        {
            try
            {
                var result = await _ingredientService.GetById(id);
                if(result != null)
                {
                    return Ok(result);
                }
                return NotFound();
            }   
            catch
            {
                return StatusCode(500);
            }
        }

        // POST api/<ValuesController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] IngredientDto dto)
        {
            try
            {
                var result = await _ingredientService.Insert(dto);
                return Ok(result);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
