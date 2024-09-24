using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface ILocationRepository
    {
       Task<ActionResult<Location>?> GetLocation(int Id);

        Task<ActionResult<IEnumerable<Location>>> GetAllLocation();
        Task<ActionResult<Location>> Add(Location Location);
        Task<Location> Update(int id, Location LocationChanges);
        Task<Location> Delete(int Id);
    }
}
