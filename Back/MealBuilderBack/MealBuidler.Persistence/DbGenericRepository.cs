using Microsoft.EntityFrameworkCore;

namespace MealBuidler.Persistence
{

    public class DbGenericRepository<T> : IGenericRepository<T> where T : class, new()
    {
        private DbContext DbContext { get; }


        public DbGenericRepository(DbContext dbContext)
        {
            DbContext = dbContext;
        }

        public IEnumerable<T> GetAll()
        {
            return DbContext.Set<T>().ToList();
        }

        public T? Get(int id)
        {
            return DbContext.Set<T>().Find(id);
        }

        public void Insert(T entity)
        {
            DbContext.Add(entity);
            DbContext.SaveChanges();
        }

        public bool Delete(int id)
        {
            T? item = DbContext.Set<T>().Find(id);
            if (item != null)
            {
                DbContext.Remove(item);
                DbContext.SaveChanges();
                return true;
            }
            return false;
        }

        public bool Update(T entity)
        {
            if (entity != null)
            {
                DbContext.Update(entity);
                DbContext.SaveChanges();
                return true;
            }
            return false;
        }
    }
}
