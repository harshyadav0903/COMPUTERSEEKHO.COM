using Computer_Seekho;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QualificationController : ControllerBase
    {
        private readonly IQualificationRepository repository;

        public QualificationController(IQualificationRepository QualificationRepository)
        {
            repository = QualificationRepository;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Qualification>?>> GetQualification()
        {
            if (await repository.GetAllQualification() == null)
            {
                return NotFound();
            }
            return await repository.GetAllQualification();

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Qualification>> GetById_ActionResultOfT(int id)
        {
            var Qualification = await repository.GetQualification(id);
            return Qualification == null ? NotFound() : Qualification;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQualification(int id)
        {
            if (repository.GetAllQualification() == null)
            {
                return NotFound();
            }
            var Qualification = repository.Delete(id);
            if (Qualification == null)
            {
                return NotFound();
            }
            await repository.Delete(Qualification.Id);
            return NoContent();
        }
        [HttpPost]
        public async Task<ActionResult<Qualification>> PostQualification(Qualification Qualification)
        {
            await repository.Add(Qualification);
            return CreatedAtAction("PostQualification", new { id = Qualification.Qualification_id }, Qualification);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutQualification(int id, Qualification Qualification)
        {
            if (id != Qualification.Qualification_id)
            {
                return BadRequest();
            }
            try
            {
                await repository.Update(id, Qualification);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (repository.GetQualification(id) == null)
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
