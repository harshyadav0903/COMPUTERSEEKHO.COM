using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Computer_Seekho
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseDurationController : ControllerBase
    {
        private readonly ICourseDurationRepository _repository;

        public CourseDurationController(ICourseDurationRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseDuration>>> GetAllCourseDuration()
        {
            var courseDurations = await _repository.GetAllCourseDuration();
            if (courseDurations == null)
            {
                return NotFound();
            }
            return Ok(courseDurations);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CourseDuration>> GetById(int id)
        {
            var courseDuration = await _repository.GetCourseDuration(id);
            if (courseDuration == null)
            {
                return NotFound();
            }
            return courseDuration.Value;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutDuration(int id, CourseDuration duration)
        {
            if (id != duration.Duration_id)
            {
                return BadRequest();
            }

            var updatedDuration = await _repository.Update(id, duration);
            if (updatedDuration == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<CourseDuration>> PostDuration(CourseDuration duration)
        {
            var addedDuration = await _repository.Add(duration);
            return CreatedAtAction(nameof(GetById), new { id = addedDuration.Value.Duration_id }, addedDuration.Value);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deletedDuration = await _repository.Delete(id);
            if (deletedDuration == null)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}
