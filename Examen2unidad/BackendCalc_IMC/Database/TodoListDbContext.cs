using BackendCalc_IMC.Entities;
using Microsoft.EntityFrameworkCore;

namespace BackendCalc_IMC.Database
{
    public class TodoListDbContext : DbContext
    {
        public TodoListDbContext(DbContextOptions options) : base(options) 
        { 
        }

        public DbSet<ImcEntity> Tasks { get; set; }
    }
}
