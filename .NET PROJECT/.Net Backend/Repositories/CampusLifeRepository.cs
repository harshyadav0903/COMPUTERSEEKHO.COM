using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class CampusLifeRepository: ICampusLifeRepository
    {
        private readonly Appdbcontext context;

        public CampusLifeRepository(Appdbcontext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<CampusLife>> Add(CampusLife campusLife)
        {
            context.CampusLife.Add(campusLife);
            await context.SaveChangesAsync();
            return campusLife;
        }

        public async Task<CampusLife> Delete(int Id)
        {
            CampusLife campusLife = context.CampusLife.Find(Id);
            if (campusLife != null)
            {
                context.CampusLife.Remove(campusLife);
                await context.SaveChangesAsync();
            }
            return campusLife;
        }
        public async Task<ActionResult<IEnumerable<CampusLife>?>> GetAllCampusLife()
        {
            if (context.CampusLife == null)
            {
                return null;
            }
            return await context.CampusLife.ToListAsync();

        }

       
        public async Task<ActionResult<CampusLife>?> GetCampusLife(int Id)
        {
            if (context.CampusLife == null)
            {
                return null;
            }
            var CampusLife = await context.CampusLife.FindAsync(Id);

            if (CampusLife == null)
            {
                return null;
            }
            return CampusLife;
        }

        public async Task<CampusLife?> Update(int id, CampusLife campusLife)
        {
            if (id != campusLife.CampusLifeId)
            {
                return null;
            }

            context.Entry(campusLife).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CampusLifeExists(id))
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
        private bool CampusLifeExists(int id)
        {
            return (context.CampusLife?.Any(e => e.CampusLifeId == id)).GetValueOrDefault();
        }
    }
}
