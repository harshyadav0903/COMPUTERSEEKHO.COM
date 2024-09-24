using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CampusLifeController : Controller
    {

        private readonly ICampusLifeRepository _repository;

        public CampusLifeController(ICampusLifeRepository repository)
        {
            _repository = repository;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CampusLife>?>> GetCampusLife()
        {
            if (await _repository.GetAllCampusLife() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllCampusLife();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CampusLife>> GetById_ActionResultOfT(int id)
        {
            var campusLife = await _repository.GetCampusLife(id);
            return campusLife == null ? NotFound() : campusLife;
        }


        // PUT: api/Employees/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCampusLife(int id, CampusLife campusLife)
        {
            if (id != campusLife.CampusLifeId)
            {
                return BadRequest();
            }


            try
            {
                await _repository.Update(id, campusLife);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetCampusLife(id) == null)
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
        public async Task<ActionResult<CampusLife>> PostCampusLife(CampusLife campusLife)
        {

            await _repository.Add(campusLife);


            return CreatedAtAction("PostCampusLife", new { id = campusLife.CampusLifeId }, campusLife);
        }


        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCampusLife(int id)
        {
            if (_repository.GetAllCampusLife() == null)
            {
                return NotFound();
            }
            var campusLife = _repository.Delete(id);
            if (campusLife == null)
            {
                return NotFound();
            }

            await _repository.Delete(campusLife.Id);


            return NoContent();
        }
    }
}