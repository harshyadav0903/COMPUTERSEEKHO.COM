using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class BatchInfoRepository : IBatchInfoRepository
    {
        private readonly Appdbcontext context;

        public BatchInfoRepository(Appdbcontext context)
        {
            this.context = context;
        }

        public async Task<ActionResult<BatchInfo>> Add(BatchInfo batchInfo)
        {
            context.BatchInfo.Add(batchInfo);
            await context.SaveChangesAsync();
            return batchInfo;
        }

        public async Task<BatchInfo> Delete(int batchInfoId)
        {
            BatchInfo batchInfo = context.BatchInfo.Find(batchInfoId);
            if (batchInfo != null)
            {
                context.BatchInfo.Remove(batchInfo);
                await context.SaveChangesAsync();
            }
            return batchInfo;
        }

        public async Task<ActionResult<IEnumerable<BatchInfo>?>> GetAllBatchInfo()
        {
            if (context.BatchInfo == null)
            {
                return null;
            }
            return await context.BatchInfo.ToListAsync();
        }

        public async Task<ActionResult<BatchInfo>?> GetBatchInfo(int batchInfoId)
        {
            if (context.BatchInfo == null)
            {
                return null;
            }
            var batchInfo = await context.BatchInfo.FindAsync(batchInfoId);

            if (batchInfo == null)
            {
                return null;
            }

            return batchInfo;
        }

        public async Task<BatchInfo?> Update(int batchInfoId, BatchInfo batchInfo)
        {
            if (batchInfoId != batchInfo.Batchinfo_Id)
            {
                return null;
            }

            context.Entry(batchInfo).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BatchInfoExists(batchInfoId))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }
            return batchInfo;
        }

        private bool BatchInfoExists(int batchInfoId)
        {
            return (context.BatchInfo?.Any(b => b.Batchinfo_Id == batchInfoId)).GetValueOrDefault();
        }
    }
}
