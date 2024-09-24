using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class BatchRepository : IBatchRepository
    {
        private readonly Appdbcontext context;

        public BatchRepository(Appdbcontext context)
        {
            this.context = context;
        }

        public async Task<ActionResult<Batch>> Add(Batch batch)
        {
            context.Batches.Add(batch);
            await context.SaveChangesAsync();
            return batch;
        }

        public async Task<Batch> Delete(int BatchId)
        {
            Batch batch = context.Batches.Find(BatchId);
            if (batch != null)
            {
                context.Batches.Remove(batch);
                await context.SaveChangesAsync();
            }
            return batch;
        }

        public async Task<ActionResult<IEnumerable<Batch>?>> GetAllBatch()
        {
            if (context.Batches == null)
            {
                return null;
            }
            return await context.Batches.ToListAsync();
        }

        public async Task<List<int>> GetAllId()
        {
            
            var idList = await context.Batches
                                         .Select(x => x.BatchId) 
                                         .ToListAsync();

            return idList;
        }

        public async Task<ActionResult<Batch>?> GetBatch(int BatchId)
        {
            if (context.Batches == null)
            {
                return null;
            }

            var batch = await context.Batches.FindAsync(BatchId);

            if (batch == null)
            {
                return null;
            }

            return batch;
        }

        public async Task<Batch?> Update(int BatchId, Batch batch)
        {
            if (BatchId != batch.BatchId)
            {
                return null;
            }

            context.Entry(batch).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BatchExists(BatchId))
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

        private bool BatchExists(int BatchId)
        {
            return (context.Batches?.Any(e => e.BatchId == BatchId)).GetValueOrDefault();
        }
    }
}
