using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class DesignationRepository:IDesignationRepository
    {
        private readonly Appdbcontext context;

        public DesignationRepository(Appdbcontext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<Designation>> Add(Designation designation)
        {
            context.Designation.Add(designation);
            await context.SaveChangesAsync();
            return designation;
        }

        public async Task<Designation> DeleteDesignation(int DesignationId)
        {
            Designation designation = context.Designation.Find(DesignationId);
            if (designation != null)
            {
                context.Designation.Remove(designation);
                await context.SaveChangesAsync();
            }
            return designation;
        }
        public async Task<ActionResult<IEnumerable<Designation>?>> GetAllDesignation()
        {
            if (context.Designation == null)
            {
                return null;
            }
            return await context.Designation.ToListAsync();

        }

        public async Task<ActionResult<Designation>?> GetDesignation(int DesignationId)
        {
            if (context.Designation == null)
            {
                return null;
            }
            var designation = await context.Designation.FindAsync(DesignationId);

            if (designation == null)
            {
                return null;
            }

            return designation;

        }

        public async Task<Designation?> Update(int DesignationId, Designation designation)
        {
            if (DesignationId != designation.DesignationId)
            {
                return null;
            }

            context.Entry(designation).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DesignationExists(designation.DesignationId))
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
        private bool DesignationExists(int id)
        {
            return (context.Designation?.Any(e => e.DesignationId == id)).GetValueOrDefault();
        }

    }
}
