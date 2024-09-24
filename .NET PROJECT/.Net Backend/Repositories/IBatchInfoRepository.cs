using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface IBatchInfoRepository
    {
        Task<ActionResult<BatchInfo>?> GetBatchInfo(int batchInfoId);
        Task<ActionResult<IEnumerable<BatchInfo>>> GetAllBatchInfo();
        Task<ActionResult<BatchInfo>> Add(BatchInfo batchInfo);
        Task<BatchInfo> Update(int batchInfoId, BatchInfo batchInfoChanges);
        Task<BatchInfo> Delete(int batchInfoId);
    }
}
