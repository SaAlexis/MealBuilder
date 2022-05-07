using AutoMapper;
using MealBuidler.Persistence;
using MealBuilder.DTOS;
using MealBuilder.Entities;

namespace MealBuilder.Services
{
    public class GenericService<TDto, TEntity> : IGenericService<TDto, TEntity> 
        where TDto : class, new()
        where TEntity : class, new()
    {

        private IMapper _mapper;
        private IGenericRepository<TEntity> _genericRepository;

        public GenericService(IMapper mapper, IGenericRepository<TEntity> genericRepository)
        {
            _mapper = mapper;
            _genericRepository = genericRepository;
        }

        public virtual async Task<IEnumerable<TDto>> GetAll()
        {
            var ingredientEntity = await _genericRepository.GetAll();
            var dto = _mapper.Map<IEnumerable<TDto>>(ingredientEntity);
            return dto;
        }

        public virtual async Task<TDto?> GetById(int id)
        {
            var ingredientEntity = await _genericRepository.GetById(id);
            if( ingredientEntity != null )
            {
                var dto = _mapper.Map<TDto>(ingredientEntity);
                return dto;
            }
            return null;
        }

        public virtual async Task<TDto> Insert(TDto dto)
        {
            var entity = _mapper.Map<TEntity>(dto);
            var entityInsert = await _genericRepository.Insert(entity);
            var dtoInsert = _mapper.Map<TDto>(entityInsert);
            return dtoInsert;
        }

        public Task<bool> Update(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public virtual async Task<bool> Delete(int id)
        {
            var ingredientEntity = await _genericRepository.Delete(id);
            if (ingredientEntity)
            {
                return ingredientEntity;
            }
            return false;
        }
    }
}
