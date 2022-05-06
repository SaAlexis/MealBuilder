using AutoMapper;
using MealBuidler.Persistence;
using MealBuilder.DTOS;
using MealBuilder.Entities;

namespace MealBuilder.Services
{
    public class IngredientService
    {
        private IMapper _mapper;
        private IGenericRepository<IngredientEntity> _genericRepository;



        public IngredientService(IMapper mapper , IGenericRepository<IngredientEntity> genericRepository)
        {
            _mapper = mapper;
            _genericRepository = genericRepository;
        }


        public async Task<IEnumerable<IngredientDto>> GetAll()
        {
            var ingredientEntity = await _genericRepository.GetAll();
            var dto = _mapper.Map<IEnumerable<IngredientDto>>(ingredientEntity);
            return dto;
        }

    }
}
