
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    [Route("api/[controller]")]
    [ApiController]
    public class BatchInfoController : ControllerBase
    {
        private readonly IBatchInfoRepository _repository;

        public BatchInfoController(IBatchInfoRepository repository)
        {
            _repository = repository;
        }

    

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BatchInfo>?>> GetBatchInfo()
        {
            if (await _repository.GetAllBatchInfo() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllBatchInfo();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<BatchInfo>> GetBatchInfoById(int id)
        {
            var batchInfo = await _repository.GetBatchInfo(id);
            return batchInfo == null ? NotFound() : batchInfo;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutBatchInfo(int id, BatchInfo batchInfo)
        {
            if (id != batchInfo.Batchinfo_Id)
            {
                return BadRequest();
            }

            try
            {
                await _repository.Update(id, batchInfo);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetBatchInfo(id) == null)
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
        public async Task<ActionResult<BatchInfo>> PostBatchInfo(BatchInfo batchInfo)
        {
            await _repository.Add(batchInfo);
            return CreatedAtAction("PostBatchInfo", new { id = batchInfo.Batchinfo_Id }, batchInfo);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBatchInfo(int id)
        {
            var batchInfo = await _repository.GetBatchInfo(id);
            if (batchInfo == null)
            {
                return NotFound();
            }

            await _repository.Delete(id);
            return NoContent();
        }
    }
}
