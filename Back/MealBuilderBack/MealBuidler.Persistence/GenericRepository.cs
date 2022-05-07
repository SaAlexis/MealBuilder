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

        public virtual async Task<bool> Delete(int id)
        {
            T? entity = await DbContext.Set<T>().FindAsync(id);
            if (entity != null)
            {
                DbContext.Remove(entity);
                await DbContext.SaveChangesAsync();
                return true;
            }
            return false;
        }
    }
}
