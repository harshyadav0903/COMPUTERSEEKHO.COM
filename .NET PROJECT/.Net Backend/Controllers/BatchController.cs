using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    [Route("api/[controller]")]
    [ApiController]
    public class BatchController : ControllerBase
    {
        private readonly IBatchRepository _repository;

        public BatchController(IBatchRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Batch>?>> GetBatches()
        {
            if (await _repository.GetAllBatch() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllBatch();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Batch>> GetById_ActionResultOfT(int id)
        {
            var batch = await _repository.GetBatch(id);
            return batch == null ? NotFound() : batch;
        }

        // PUT: api/Batches/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBatch(int id, Batch batch)
        {
            if (id != batch.BatchId)
            {
                return BadRequest();
            }

            try
            {
                var updatedBatch = await _repository.Update(id, batch);
                if (updatedBatch == null)
                {
                    return NotFound();
                }
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetBatch(id) == null)
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

        // POST: api/Batches
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Batch>> PostBatch(Batch batch)
        {
            await _repository.Add(batch);
            return CreatedAtAction("PostBatch", new { id = batch.BatchId }, batch);
        }

        // DELETE: api/Batches/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBatch(int id)
        {
            if (_repository.GetAllBatch() == null)
            {
                return NotFound();
            }
            var deletedBatch = await _repository.Delete(id);
            if (deletedBatch == null)
            {
                return NotFound();
            }
            await _repository.Delete(deletedBatch.BatchId);
            return NoContent();
        }

        [HttpGet("GetAllIds")]
        public async Task<ActionResult<List<int>>> GetAllIds()
        {
            try
            {
                var idList = await _repository.GetAllId();
                return Ok(idList);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
