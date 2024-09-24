
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace Computer_Seekho
{
    [Route("api/[controller]")]
    [ApiController]
    public class Follow_upController:ControllerBase
    {

            private readonly IFollowupRepository _repository;

            public Follow_upController(IFollowupRepository repository)
            {
                _repository = repository;

            }
            [HttpGet]
            public async Task<ActionResult<IEnumerable<FollowUp>?>> Getfollow_up()
            {
                if (await _repository.GetAllfollow_up() == null)
                {
                    return NotFound();
                }

                return await _repository.GetAllfollow_up();
            }

            [HttpGet("{id}")]
            public async Task<ActionResult<FollowUp>> GetById_ActionResultOfT(int id)
            {
                var follow_up = await _repository.Getfollow_up(id);
                return follow_up == null ? NotFound() : follow_up;
            }

            // PUT: api/Follow_up/5
            // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
            [HttpPut("{id}")]
            public async Task<IActionResult> PutFollow_up(int id, FollowUp follow_up)
            {
                if (id != follow_up.FollowUpId)
                {
                    return BadRequest();
                }


                try
                {
                    await _repository.Update(id, follow_up);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (_repository.Getfollow_up(id) == null)
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

            // POST: api/Follow_up
            // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
            [HttpPost]
            public async Task<ActionResult<FollowUp>> PostFollow_up(FollowUp follow_up)
            {

                await _repository.Add(follow_up);


                return CreatedAtAction("PostFollow_up", new { FollowUpId = follow_up.FollowUpId }, follow_up);
            }


        [HttpPut("update-closure-id/{followUpId}")]
        public IActionResult UpdateClosureId(int followUpId)
        {
            try
            {
                _repository.UpdateClosureId(followUpId);
                return Ok("ClosureId updated successfully.");
            }
            catch (Exception ex)
            {
                // Log the exception or handle it appropriately
                return StatusCode(500, "An error occurred while updating ClosureId.");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLocation(int id)
        {
            if (_repository.GetAllfollow_up() == null)
            {
                return NotFound();
            }
            var payments = _repository.Delete(id);
            if (payments == null)
            {
                return NotFound();
            }
            await _repository.Delete(payments.Id);
            return NoContent();
        }
    }
    }
