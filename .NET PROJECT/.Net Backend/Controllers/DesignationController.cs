using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    [Route("api/[controller]")]
    [ApiController]

    public class DesignationController:ControllerBase
    {
        private readonly IDesignationRepository _repository;

        public DesignationController(IDesignationRepository repository)
        {
            _repository = repository;

        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Designation>?>> GetDesignation()
        {
            if (await _repository.GetAllDesignation() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllDesignation();
        }

        [HttpGet("{DesignationId}")]
        public async Task<ActionResult<Designation>> GetById_ActionResultOfT(int DesignationId)
        {
            var designation = await _repository.GetDesignation(DesignationId);
            return designation == null ? NotFound() : designation;
        }

        // PUT: api/Designation/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{DesignationId}")]
        public async Task<IActionResult> PutDesignation(int DesignationId, Designation designation)
        {
            if (DesignationId != designation.DesignationId)
            {
                return BadRequest();
            }


            try
            {
                await _repository.Update(DesignationId, designation);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetDesignation(DesignationId) == null)
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

        // POST: api/Designation
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Designation>> PostDesignation(Designation designation)
        {

            await _repository.Add(designation);


            return CreatedAtAction("PostDesignation", new { id = designation.DesignationId }, designation);
        }

        [HttpDelete("{DesignationId}")]
        public async Task<IActionResult> DeleteDesignation(int DesignationId)
        {
            if (_repository.GetAllDesignation == null)
            {
                return NotFound();
            }
            var designation = _repository.DeleteDesignation(DesignationId);
            if (designation == null)
            {
                return NotFound();
            }
            await _repository.DeleteDesignation(designation.Id);
            return NoContent();
        }





    }
}
