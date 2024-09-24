using Computer_Seekho;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgeGroupController : ControllerBase
    {
        private readonly IAgeGroupRepository repository;

        public AgeGroupController(IAgeGroupRepository AgeGroupRepository)
        {
            repository = AgeGroupRepository;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AgeGroup>?>> GetAgeGroup()
        {
            if (await repository.GetAllAgeGroup() == null)
            {
                return NotFound();
            }
            return await repository.GetAllAgeGroup();

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AgeGroup>> GetById_ActionResultOfT(int id)
        {
            var AgeGroup = await repository.GetAgeGroup(id);
            return AgeGroup == null ? NotFound() : AgeGroup;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAgeGroup(int id)
        {
            if (repository.GetAllAgeGroup() == null)
            {
                return NotFound();
            }
            var AgeGroup = repository.Delete(id);
            if (AgeGroup == null)
            {
                return NotFound();
            }
            await repository.Delete(AgeGroup.Id);
            return NoContent();
        }
        [HttpPost]
        public async Task<ActionResult<AgeGroup>> PostAgeGroup(AgeGroup AgeGroup)
        {
            await repository.Add(AgeGroup);
            return CreatedAtAction("PostAgeGroup", new { id = AgeGroup.Age_Group_id }, AgeGroup);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAgeGroup(int id, AgeGroup AgeGroup)
        {
            if (id != AgeGroup.Age_Group_id)
            {
                return BadRequest();
            }
            try
            {
                await repository.Update(id, AgeGroup);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (repository.GetAgeGroup(id) == null)
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
