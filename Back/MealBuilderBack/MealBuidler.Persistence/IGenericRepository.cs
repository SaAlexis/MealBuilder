namespace MealBuidler.Persistence
{
    public interface IGenericRepository<T> where T : class, new()
    {
        public Task<IEnumerable<T>> GetAll();

        T? Get(int id);

        void Insert (T entity);

        bool Delete (int id);

        bool Update (T entity);
    }
}
