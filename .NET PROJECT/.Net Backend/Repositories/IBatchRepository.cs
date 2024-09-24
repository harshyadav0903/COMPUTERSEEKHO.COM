using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface IBatchRepository
    {
        Task<ActionResult<Batch>?> GetBatch(int BatchId);
        Task<ActionResult<IEnumerable<Batch>>> GetAllBatch();
        Task<ActionResult<Batch>> Add(Batch batch);
        Task<Batch> Update(int BatchId, Batch batchChanges);
        Task<Batch> Delete(int BatchId);
        Task<List<Int32>> GetAllId();
    }
}
