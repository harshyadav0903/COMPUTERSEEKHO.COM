using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    [Route("api/[controller]")]
    [ApiController]

    public class StaffController:ControllerBase
    {
            private readonly IStaffRepository _repository;

            public StaffController(IStaffRepository repository)
            {
                _repository = repository;

            }


            [HttpGet]
            public async Task<ActionResult<IEnumerable<Staff>?>> GetStaff()
            {
                if (await _repository.GetAllStaff() == null)
                {
                    return NotFound();
                }

                return await _repository.GetAllStaff();
            }

            [HttpGet("{StaffId}")]
            public async Task<ActionResult<Staff>> GetById_ActionResultOfT(int StaffId)
            {
                var staff = await _repository.GetStaff(StaffId);
                return staff == null ? NotFound() : staff;
            }

            // PUT: api/Staff/5
            // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
            [HttpPut("{StaffId}")]
            public async Task<IActionResult> PutStaff(int StaffId, Staff staff)
            {
                if (StaffId != staff.StaffId)
                {
                    return BadRequest();
                }


                try
                {
                    await _repository.Update(StaffId, staff);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (_repository.GetStaff(StaffId) == null)
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

            // POST: api/Staff
            // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
            [HttpPost]
            public async Task<ActionResult<Staff>> PostStaff(Staff staff)
            {

                await _repository.Add(staff);


                return CreatedAtAction("PostStaff", new { id = staff.StaffId }, staff);
            }

        [HttpDelete("{StaffId}")]
        public async Task<IActionResult> DeleteStaff(int StaffId)
        {
            if (_repository.GetAllStaff == null)
            {
                return NotFound();
            }
            var staff = _repository.DeleteStaff(StaffId);
            if (staff == null)
            {
                return NotFound();
            }
            await _repository.DeleteStaff(staff.Id);
            return NoContent();
        }
        [HttpPost("login")]
        public IActionResult LogIn([FromBody] Staff model)
        {
            try
            {
                var authenticatedStaff = _repository.GetStaffDetails(model.Email, model.Password);

                if (authenticatedStaff != null)
                {
                    // Authentication successful
                    return Ok(new { StaffId = authenticatedStaff.StaffId, RoleId = authenticatedStaff.RoleId, Name = authenticatedStaff.Name });
                }
                else
                {
                    // Authentication failed
                    return NotFound("Invalid credentials");
                }
            }
            catch (Exception ex)
            {
                // Log the exception or handle it appropriately
                return StatusCode(500, "An error occurred while processing the login request.");
            }
        }
    }



    }
    







