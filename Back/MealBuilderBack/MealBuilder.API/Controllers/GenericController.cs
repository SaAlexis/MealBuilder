using MealBuilder.Services;
using Microsoft.AspNetCore.Mvc;

namespace MealBuilder.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenericController<TDto, TEntity> : ControllerBase
       where TDto : class, new()
       where TEntity : class, new()
    {
        private IGenericService<TDto, TEntity> _genericService;

        public GenericController(IGenericService<TDto, TEntity> genericService)
        {
            _genericService = genericService;
        }
        // GET: api/<ValuesController>
        [HttpGet]
        public virtual async Task<IActionResult> Get()
        {
            try
            {
                var result = await _genericService.GetAll();
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
                var result = await _genericService.GetById(id);
                if (result != null)
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
        public virtual async Task<IActionResult> Post([FromBody] TDto dto)
        {
            try
            {
                var result = await _genericService.Insert(dto);
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
        public virtual async Task<IActionResult> Delete(int id)
        {
            try
            {
                var result = await _genericService.Delete(id);
                if (result)
                {
                    return Ok(result);

                }
                return NotFound(result);
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}