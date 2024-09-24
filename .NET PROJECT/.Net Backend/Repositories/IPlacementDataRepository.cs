using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface IPlacementDataRepository
    {
        Task<ActionResult<PlacementData>?> GetPlacementData(int Id);
        Task<ActionResult<IEnumerable<PlacementData>>> GetAllPlacementData();
        Task<ActionResult<PlacementData>> Add(PlacementData placementData);
        Task<PlacementData> Update(int id, PlacementData placementDataChanges);
        Task<PlacementData> Delete(int Id);
        List<PlacementData> GetPlacementByBatchId(int batchId);
    }
}
