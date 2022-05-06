namespace MealBuilder.Services
{
    public interface IGenericService<T>
    {
        public Task<IEnumerable<T>> GetAll();

        Task<T?> GetById (int id);

        Task<IEnumerable<T>> Insert (T entity);

        Task<bool> Delete (T entity);

        Task<bool> Update (T entity);
    }
}