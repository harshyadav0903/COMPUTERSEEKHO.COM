
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlacementDataController : Controller
    {
        private readonly IPlacementDataRepository _repository;

        public PlacementDataController(IPlacementDataRepository repository)
        {
            _repository = repository;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PlacementData>?>> GetPlacementData()
        {
            if (await _repository.GetAllPlacementData() == null)
            {
                return NotFound();
            }
            
            return await _repository.GetAllPlacementData();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PlacementData>> GetById_ActionResultOfT(int id)
        {
            var placementData = await _repository.GetPlacementData(id);
            return placementData == null ? NotFound() : placementData;
        }


        // PUT: api/Employees/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlacementData(int id, PlacementData placementData)
        {
            if (id != placementData.Placementid)
            {
                return BadRequest();
            }


            try
            {
                await _repository.Update(id, placementData);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetPlacementData(id) == null)
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


        // POST: api/Employees
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PlacementData>> PostPlacementData(PlacementData placementData)
        {

            await _repository.Add(placementData);


            return CreatedAtAction("PostPlacementData", new { id = placementData.Placementid }, placementData);
        }


        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlacementData(int id)
        {
            if (_repository.GetAllPlacementData() == null)
            {
                return NotFound();
            }
            var placementData = _repository.Delete(id);
            if (placementData == null)
            {
                return NotFound();
            }

            await _repository.Delete(placementData.Id);


            return NoContent();
        }

        [HttpGet("by-batch/{batchId}")]
        public IActionResult GetPlacementByBatchId(int batchId)
        {
            try
            {
                var placementList = _repository.GetPlacementByBatchId(batchId);
                return Ok(placementList);
            }
            catch (Exception ex)
            {
                // Log the exception or handle it appropriately
                return StatusCode(500, "An error occurred while fetching placement data.");
            }
        }

    }
}
