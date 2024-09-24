using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class LocationRepository : ILocationRepository
    {
        private readonly Appdbcontext context;
        public LocationRepository(Appdbcontext context)
        { 
            this.context = context;
        }

        public async Task<ActionResult<Location>> Add(Location Location)
        {

            context.Location.Add(Location);
            await context.SaveChangesAsync();
            return Location;

        }

        public async Task<Location> Delete(int Id)
        {
            Location Location = context.Location.Find(Id);
            if (Location != null)
            {
                context.Location.Remove(Location);
                await context.SaveChangesAsync();
            }
            return Location;

        }

        public async Task<ActionResult<IEnumerable<Location>?>> GetAllLocation()
        {
            if (context.Location == null)
            {
                return null;
            }
            return await context.Location.ToListAsync();

        }

        public async Task<ActionResult<Location>?> GetLocation(int Id)
        {
            if (context.Location == null)
            {
                return null;
            }
            var Location = await context.Location.FindAsync(Id);

            if (Location == null)
            {
                return null;
            }
            return Location;

        }

        public async Task<Location> Update(int id, Location Location)
        {
            if (id != Location.LocationId)
            {
                return null;
            }

            context.Entry(Location).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LocationExists(id))
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
        private bool LocationExists(int id)
        {
            return (context.Location?.Any(e => e.LocationId == id)).GetValueOrDefault();
        }

    }
}
