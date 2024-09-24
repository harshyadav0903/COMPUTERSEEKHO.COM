using Computer_Seekho;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class ClosureRepository : IClosureRepository
    {
        private readonly Appdbcontext context;

        public ClosureRepository(Appdbcontext context)
        {
            this.context = context;
        }

        public async Task<ActionResult<IEnumerable<Closure>>> GetAllClosureDetails()
        {
            if (context.Closure == null)
            {
                return null;
            }
            return await context.Closure.ToListAsync();
        }


        public async Task<ActionResult<Closure>?> GetClosure(int closure_Id)
        {
            if (context.Closure == null)
            {
                return null;
            }
            var closure = await context.Closure.FindAsync(closure_Id);

            if (closure == null)
            {
                return null;
            }

            return closure;

        }

        public async Task<ActionResult<Closure>> AddClosure(Closure closure)
        {
            context.Closure.Add(closure);
            await context.SaveChangesAsync();
            return closure;
        }


        public async Task<Closure?> Update(int id, Closure closure)
        {
            if (id != closure.Closure_Id)
            {
                return null;
            }

            context.Entry(closure).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClosureExists(id))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }
            return null;

        }
        private bool ClosureExists(int id)
        {
            return (context.Closure?.Any(e => e.Closure_Id == id)).GetValueOrDefault();
        }


        public async Task<Closure> DeleteClosure(int Id)
        {
            Closure closure = context.Closure.Find(Id);
            if (closure != null)
            {
                context.Closure.Remove(closure);
                await context.SaveChangesAsync();
            }
            return closure;
        }
    }
}
