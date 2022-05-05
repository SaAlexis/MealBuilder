namespace MealBuilder.Services
{
    public interface IGenericService<T>
    {
        IEnumerable<T> GetAll();

        T? GetById (int id);

        IEnumerable<T> Insert (T entity);

        bool Delete (T entity);

        bool Update (T entity);
    }
}