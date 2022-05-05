//using Microsoft.AspNetCore.Mvc;

//namespace MealBuilder.API.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class GenericController<TDto, TEntity> : ControllerBase
//       where TDto : class, new()
//       where TEntity : class, new()
//    {
//        internal DbGenericRepository<TDto, TEntity> _data;

//        public GenericController(IDataManager<TDto, TEntity> dataManager)
//        {
//            _data = dataManager;
//        }

//        // GET: api/<GenericController>
//        [HttpGet]
//        [ProducesResponseType(StatusCodes.Status200OK)]
//        [ProducesResponseType(StatusCodes.Status204NoContent)]
//        public async Task<IActionResult> Get()
//        {
//            var data = await _data.GetAllAsync();
//            return (data.Any()) ? Ok(data) : NoContent();
//        }

//        // GET api/<GenericController>/5
//        [HttpGet("{id}")]
//        [ProducesResponseType(StatusCodes.Status200OK)]
//        [ProducesResponseType(StatusCodes.Status404NotFound)]
//        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
//        public async Task<IActionResult> Get(int id)
//        {
//            try
//            {
//                var retrievedData = await _data.GetAsync(id);
//                if (retrievedData == null)
//                    return NotFound(id);
//                return Ok(retrievedData);
//            }
//            catch (Exception e)
//            {
//                return NotFound(e.Message);
//            }
//        }

//        // POST api/<GenericController>
//        [HttpPost]
//        [ProducesResponseType(StatusCodes.Status201Created)]
//        [ProducesResponseType(StatusCodes.Status400BadRequest)]
//        public async Task<IActionResult> Post([FromBody] TDto newValue)
//        {
//            try
//            {
//                await _data.AddAsync(newValue);
//                return Created(Request.Query.ToString(), newValue);
//            }
//            catch (Exception e)
//            {
//                return NotFound(e.Message);
//            }
//        }


//        [HttpPut("{id}")]
//        [ProducesResponseType(StatusCodes.Status201Created)]
//        [ProducesResponseType(StatusCodes.Status400BadRequest)]
//        public async Task<IActionResult> Put(int id, [FromBody] TDto updatedValue)
//        {
//            try
//            {
//                await _data.UpdateAsync(id, updatedValue);
//                return base.Created(Request.Query.ToString(), updatedValue);
//            }
//            catch (Exception e)
//            {
//                return NotFound(e.Message);
//            }
//        }


//        [HttpDelete("{id}")]
//        [ProducesResponseType(StatusCodes.Status204NoContent)]
//        [ProducesResponseType(StatusCodes.Status404NotFound)]
//        public async Task<IActionResult> Delete(int id)
//        {
//            try
//            {
//                await _data.DeleteAsync(id);
//                return NoContent();
//            }
//            catch (Exception e)
//            {
//                return NotFound(e.Message);
//            }
//        }
//    }
//}