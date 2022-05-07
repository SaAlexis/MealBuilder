namespace MealBuilder.Services
{
    public interface IGenericService<TDto, TEntity>
    {
        public Task<IEnumerable<TDto>> GetAll();

        public Task<TDto?> GetById (int id);

        public Task<TDto> Insert (TDto dto);

        public Task<bool> Delete (int id);

        public Task<bool> Update (TEntity entity);
    }
}