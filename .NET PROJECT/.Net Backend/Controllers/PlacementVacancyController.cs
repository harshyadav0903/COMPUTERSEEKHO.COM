using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class PlacementVacancyController : Controller
    {

        private readonly IPlacementVacancyRepository _repository;

        public PlacementVacancyController(IPlacementVacancyRepository repository)
        {
            _repository = repository;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PlacementVacancy>?>> GetPlacementData()
        {
            if (await _repository.GetAllPlacementVacancy() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllPlacementVacancy();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PlacementVacancy>> GetById_ActionResultOfT(int id)
        {
            var placementVacancy = await _repository.GetPlacementVacancy(id);
            return placementVacancy == null ? NotFound() : placementVacancy;
        }


        // PUT: api/Employees/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlacementVacancy(int id, PlacementVacancy placementVacancy)
        {
            if (id != placementVacancy.PlacementVacancyId)
            {
                return BadRequest();
            }


            try
            {
                await _repository.Update(id, placementVacancy);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetPlacementVacancy(id) == null)
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
        public async Task<ActionResult<PlacementVacancy>> PostPlacementVacancy(PlacementVacancy placementVacancy)
        {

            await _repository.Add(placementVacancy);


            return CreatedAtAction("PostPlacementVacancy", new { id = placementVacancy.PlacementVacancyId }, placementVacancy);
        }


        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlacementVacancy(int id)
        {
            if (_repository.GetAllPlacementVacancy() == null)
            {
                return NotFound();
            }
            var placementVacancy = _repository.Delete(id);
            if (placementVacancy == null)
            {
                return NotFound();
            }

            await _repository.Delete(placementVacancy.Id);


            return NoContent();
        }
    }
}
