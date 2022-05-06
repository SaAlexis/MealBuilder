namespace MealBuidler.Persistence
{
    public interface IGenericRepository<T> where T : class, new()
    {
        public Task<IEnumerable<T>> GetAll();

        public Task<T?> GetById(int id);

        public Task<T> Insert (T entity);

        bool Delete (int id);

        bool Update (T entity);
    }
}
