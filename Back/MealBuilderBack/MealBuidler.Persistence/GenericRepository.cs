using Microsoft.EntityFrameworkCore;

namespace MealBuidler.Persistence
{

    public class GenericRepository<T> : IGenericRepository<T> where T : class, new()
    {
        private DbContext DbContext { get; }


        public GenericRepository(DbContext dbContext)
        {
            DbContext = dbContext;
        }

        public virtual async Task<IEnumerable<T>> GetAll()
        {
            return await DbContext.Set<T>().ToListAsync();
        }

        public virtual async Task<T?> GetById(int id)
        {
            return await DbContext.Set<T>().FindAsync(id);
        }

        public virtual async Task<T> Insert(T entity)
        {
            var newEntity = DbContext.Attach(entity);
            newEntity.State = EntityState.Added;
            await DbContext.SaveChangesAsync();
            return newEntity.Entity;
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
