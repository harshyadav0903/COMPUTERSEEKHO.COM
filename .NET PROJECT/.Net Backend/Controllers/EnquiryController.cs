
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    [Route("api/[controller]")]
    [ApiController]

    public class EnquiryController : ControllerBase
    {

        private readonly IEnquiryRepository _repository;

        public EnquiryController(IEnquiryRepository repository)
        {
            _repository = repository;

        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Enquiry>?>> GetEnquirys()
        {
            if (await _repository.GetAllEnquiry() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllEnquiry();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Enquiry>> GetById_ActionResultOfT(int id)
        {
            var Enquiry = await _repository.GetEnquiry(id);
            return Enquiry == null ? NotFound() : Enquiry;
        }

        // PUT: api/Enquirys/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEnquiry(int id, Enquiry enquiry)
        {
            if (id != enquiry.Enquiry_Id)
            {
                return BadRequest();
            }


            try
            {
                await _repository.Update(id, enquiry);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetEnquiry(id) == null)
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

        // POST: api/Enquiry
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Enquiry>> PostEnquiry(Enquiry enquiry)
        {

            await _repository.Add(enquiry);


            return CreatedAtAction("PostEnquiry", new { Enquiry_Id = enquiry.Enquiry_Id }, enquiry);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEnquiry(int id)
        {
            var enquiry = await _repository.GetEnquiry(id); 
            if (enquiry == null)
            {
                return NotFound(); 
            }
            var deletedEnquiry = await _repository.Delete(id); 

            if (deletedEnquiry == null)
            {
                return NotFound(); 
            }
            return NoContent(); 
        }
    }
}
