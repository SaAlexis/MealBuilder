//using AutoMapper;
//using MealBuidler.Persistence;
//using MealBuilder.DTOS;
//using MealBuilder.Entities;

//namespace MealBuilder.Services
//{
//    public class GenericService<T> : IGenericService<TO> where T : class where TO : class,new()
//    {

//        private IMapper _mapper;
//        private IGenericRepository<IngredientEntity> _genericRepository;

//        public GenericService(IGenericRepository<T> genericRepository, IMapper mapper)
//        {
//            _mapper = mapper;

//        }
        


//        public Task<bool> Delete(T entity)
//        {
//            throw new NotImplementedException();
//        }

//        public Task<IEnumerable<T>> GetAll()
//        {
//            throw new NotImplementedException();
//        }

//        public Task<T?> GetById(int id)
//        {
//            throw new NotImplementedException();
//        }

//        public Task<IEnumerable<T>> Insert(T entity)
//        {
//            throw new NotImplementedException();
//        }

//        public Task<bool> Update(T entity)
//        {
//            throw new NotImplementedException();
//        }
//    }
//}
