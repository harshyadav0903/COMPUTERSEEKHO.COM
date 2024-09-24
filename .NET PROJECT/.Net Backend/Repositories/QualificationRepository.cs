using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class QualificationRepository : IQualificationRepository
    {
        private readonly Appdbcontext context;
        public QualificationRepository(Appdbcontext context)
        {
            this.context = context;
        }

        public async Task<ActionResult<Qualification>> Add(Qualification Qualification)
        {

            context.Qualification.Add(Qualification);
            await context.SaveChangesAsync();
            return Qualification;

        }

        public async Task<Qualification> Delete(int Id)
        {
            Qualification Qualification = context.Qualification.Find(Id);
            if (Qualification != null)
            {
                context.Qualification.Remove(Qualification);
                await context.SaveChangesAsync();
            }
            return Qualification;

        }

        public async Task<ActionResult<IEnumerable<Qualification>?>> GetAllQualification()
        {
            if (context.Qualification == null)
            {
                return null;
            }
            return await context.Qualification.ToListAsync();

        }

        public async Task<ActionResult<Qualification>?> GetQualification(int Id)
        {
            if (context.Qualification == null)
            {
                return null;
            }
            var Qualification = await context.Qualification.FindAsync(Id);

            if (Qualification == null)
            {
                return null;
            }
            return Qualification;

        }

        public async Task<Qualification> Update(int id, Qualification Qualification)
        {
            if (id != Qualification.Qualification_id)
            {
                return null;
            }

            context.Entry(Qualification).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QualificationExists(id))
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
        private bool QualificationExists(int id)
        {
            return (context.Qualification?.Any(e => e.Qualification_id == id)).GetValueOrDefault();
        }

    }
}
