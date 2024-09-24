using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnquirySourceController : ControllerBase
    {
        private readonly IEnquirySourceRepository _repository;

        public EnquirySourceController(IEnquirySourceRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EnquirySource>?>> GetEnquirySources()
        {
            if (await _repository.GetAllEnquirySource() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllEnquirySource();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EnquirySource>> GetEnquirySource(int id)
        {
            var enquirySource = await _repository.GetEnquirySource(id);
            return enquirySource == null ? NotFound() : enquirySource;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutEnquirySource(int id, EnquirySource enquirySource)
        {
            if (id != enquirySource.EnquirySourceId)
            {
                return BadRequest();
            }

            try
            {
                await _repository.Update(id, enquirySource);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetEnquirySource(id) == null)
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

        [HttpPost]
        public async Task<ActionResult<EnquirySource>> PostEnquirySource(EnquirySource enquirySource)
        {
            await _repository.Add(enquirySource);
            return CreatedAtAction("PostEnquirySource", new { id = enquirySource.EnquirySourceId }, enquirySource);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEnquirySource(int id)
        {
            if (_repository.GetAllEnquirySource() == null)
            {
                return NotFound();
            }

            var deletedEnquirySource = await _repository.Delete(id);

            if (deletedEnquirySource == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
