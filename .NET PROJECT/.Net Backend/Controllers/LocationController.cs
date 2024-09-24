using Computer_Seekho;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly ILocationRepository repository;

        public LocationController(ILocationRepository LocationRepository)
        {
            repository = LocationRepository;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Location>?>> GetLocation()
        {
            if (await repository.GetAllLocation() == null)
            {
                return NotFound();
            }
            return await repository.GetAllLocation();

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Location>> GetById_ActionResultOfT(int id)
        {
            var Location = await repository.GetLocation(id);
            return Location == null ? NotFound() : Location;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLocation(int id)
        {
            if (repository.GetAllLocation() == null)
            {
                return NotFound();
            }
            var Location = repository.Delete(id);
            if (Location == null)
            {
                return NotFound();
            }
            await repository.Delete(Location.Id);
            return NoContent();
        }
        [HttpPost]
        public async Task<ActionResult<Location>> PostLocation(Location Location)
        {
            await repository.Add(Location);
            return CreatedAtAction("PostLocation", new { id = Location.LocationId }, Location);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutLocation(int id, Location Location)
        {
            if (id != Location.LocationId)
            {
                return BadRequest();
            }
            try
            {
                await repository.Update(id, Location);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (repository.GetLocation(id) == null)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

    }
}
