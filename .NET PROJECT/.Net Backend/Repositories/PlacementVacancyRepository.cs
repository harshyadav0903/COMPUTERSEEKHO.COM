using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class PlacementVacancyRepository : IPlacementVacancyRepository
    {

        private readonly Appdbcontext context;

        public PlacementVacancyRepository(Appdbcontext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<PlacementVacancy>> Add(PlacementVacancy placementVacancy)
        {
            context.PlacementVacancy.Add(placementVacancy);
            await context.SaveChangesAsync();
            return placementVacancy;
        }

        public async Task<PlacementVacancy> Delete(int Id)
        {
            PlacementVacancy placementVacancy = context.PlacementVacancy.Find(Id);
            if (placementVacancy != null)
            {
                context.PlacementVacancy.Remove(placementVacancy);
                await context.SaveChangesAsync();
            }
            return placementVacancy;
        }
        public async Task<ActionResult<IEnumerable<PlacementVacancy>?>> GetAllPlacementVacancy()
        {
            if (context.PlacementVacancy == null)
            {
                return null;
            }
            return await context.PlacementVacancy.ToListAsync();

        }

        public async Task<ActionResult<PlacementVacancy>?> GetPlacementVacancy(int Id)
        {
            if (context.PlacementVacancy == null)
            {
                return null;
            }
            var placementVacancy = await context.PlacementVacancy.FindAsync(Id);

            if (placementVacancy == null)
            {
                return null;
            }

            return placementVacancy;

        }


        public async Task<PlacementVacancy?> Update(int id, PlacementVacancy placementVacancy)
        {
            if (id != placementVacancy.PlacementVacancyId)
            {
                return null;
            }

            context.Entry(placementVacancy).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlacementVacancyExists(id))
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
        private bool PlacementVacancyExists(int id)
        {
            return (context.PlacementVacancy?.Any(e => e.PlacementVacancyId == id)).GetValueOrDefault();
        }
    }
}
