using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace Computer_Seekho   
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClosureController : ControllerBase
    {

        private readonly IClosureRepository _repository;

        public ClosureController(IClosureRepository repository)
        {
            _repository = repository;

        }




        [HttpGet("ListAll")]
        public async Task<ActionResult<IEnumerable<Closure>?>> GetAllClosure()
        {
            var c = await _repository.GetAllClosureDetails();
            if (c == null)
            {
                return NotFound();
            }

            return await _repository.GetAllClosureDetails();
        }




        [HttpGet("getby/{id}")]
        public async Task<ActionResult<Closure>> GetClosure(int id)
        {
            var closure = await _repository.GetClosure(id);
            return closure == null ? NotFound() : closure;
        }




        [HttpPost("create")]
        public async Task<ActionResult<Closure>> PostClosure(Closure closure)
        {
            await _repository.AddClosure(closure);
            return CreatedAtAction("PostClosure", new { id = closure.Closure_Id }, closure);
        }





        [HttpPut("update/{id}")]
        public async Task<IActionResult> PutClosure(int id, Closure closure)
        {
            if (id != closure.Closure_Id)
            {
                return BadRequest();
            }
            try
            {
                await _repository.Update(id, closure);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetClosure(id) == null)
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




        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteClosure(int id)
        {
            var cls = await _repository.GetClosure(id);
            if (cls == null)
            {
                return NotFound();
            }
            var closure = await _repository.DeleteClosure(id);
            if (closure == null)
            {
                return NotFound();
            }
            await _repository.DeleteClosure(closure.Closure_Id);
            return NoContent();
        }

    }
}
