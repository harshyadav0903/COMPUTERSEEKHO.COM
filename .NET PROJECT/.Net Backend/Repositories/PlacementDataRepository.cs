using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class PlacementDataRepository:IPlacementDataRepository
    {

        private readonly Appdbcontext context;

        public PlacementDataRepository(Appdbcontext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<PlacementData>> Add(PlacementData placementData)
        {
            context.PlacementData.Add(placementData);
            await context.SaveChangesAsync();
            return placementData;
        }

        public async Task<PlacementData> Delete(int Id)
        {
            PlacementData placementData = context.PlacementData.Find(Id);
            if (placementData != null)
            {
                context.PlacementData.Remove(placementData);
                await context.SaveChangesAsync();
            }
            return placementData;
        }
        public async Task<ActionResult<IEnumerable<PlacementData>?>> GetAllPlacementData()
        {
            if (context.PlacementData == null)
            {
                return null;
            }
            return await context.PlacementData.ToListAsync();

        }

        public List<PlacementData> GetPlacementByBatchId(int batchId)
        {
            return context.PlacementData
                           .FromSqlRaw("SELECT * FROM PlacementData WHERE Batchid = {0}", batchId)
                           .ToList();
        }

        public async Task<ActionResult<PlacementData>?> GetPlacementData(int Id)
        {
            if (context.PlacementData == null)
            {
                return null;
            }
            var PlacementDatas = await context.PlacementData.FindAsync(Id);

            if (PlacementDatas == null)
            {
                return null;
            }
            return PlacementDatas;
        }

        public async Task<PlacementData?> Update(int id, PlacementData placementData)
        {
            if (id != placementData.Placementid)
            {
                return null;
            }

            context.Entry(placementData).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlacementDataExists(id))
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
        private bool PlacementDataExists(int id)
        {
            return (context.PlacementData?.Any(e => e.Placementid == id)).GetValueOrDefault();
        }
    }
}
