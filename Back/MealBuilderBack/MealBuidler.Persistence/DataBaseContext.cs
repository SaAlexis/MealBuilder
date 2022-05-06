using MealBuilder.Entities;
using Microsoft.EntityFrameworkCore;

namespace MealBuidler.Persistence
{
    public class DataBaseContext : DbContext
    {
        public DbSet<IngredientEntity> Ingredients { get; set; }
        public DbSet<ReceipeEntity> Receipes { get; set; }


        public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options)
        {

        }

        public DataBaseContext()
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS;Database=MealBuilder;Trusted_Connection=True;");
        }
    }
}