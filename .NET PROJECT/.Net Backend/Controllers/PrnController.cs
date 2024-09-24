using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace Computer_Seekho
{

    [Route("api/[controller]")]
    [ApiController]
    public class PrnController : ControllerBase
    {
        private readonly IPrnGenerator _repository;

        public PrnController(IPrnGenerator repository)
        {
            _repository = repository;

        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<PrnGenerator>?>> GetPrn()
        {
            if (await _repository.GetAllPrn() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllPrn();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PrnGenerator>> GetById_ActionResultOfT(int id)
        {
            var prn = await _repository.GetPrn(id);
            return prn == null ? NotFound() : prn;
        }

        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPrn(int id, PrnGenerator prn)
        {
            if (id != prn.pid)
            {
                return BadRequest();
            }


            try
            {
                await _repository.Update(id, prn);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetPrn(id) == null)
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
        public async Task<ActionResult<PrnGenerator>> PostPrn(PrnGenerator prn)
        {

            await _repository.Add(prn);


            return CreatedAtAction("PostPrn", new { id = prn.pid }, prn);
        }



      
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePrn(int id)
        {
            if (_repository.GetAllPrn() == null)
            {
                return NotFound();
            }
            var prn = _repository.Delete(id);
            if (prn == null)
            {
                return NotFound();
            }

            await _repository.Delete(prn.Id);


            return NoContent();
        }
       
        [HttpPost("generate/{courseId}/{studentId}")]
        public IActionResult GeneratePRN(int courseId, int studentId)
        {
            try
            {
                string prnValue = _repository.GeneratePRN(courseId, studentId);
                return Ok(prnValue);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { ErrorMessage = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { ErrorMessage = ex.Message });
            }
        }

        [HttpPost("generate-prn/{studentId}/{courseId}")]
        public IActionResult GeneratePrnForStudent(int studentId, int courseId)
        {
            var student = _repository.GeneratePrnForExistingStudent(studentId, courseId);

            if (student != null)
            {
                var jsonSerializerOptions = new JsonSerializerOptions
                {
                    ReferenceHandler = ReferenceHandler.Preserve,
                    
                };

                var json = JsonSerializer.Serialize(student, jsonSerializerOptions);

                return Ok(json);
            }
            else
            {
                return NotFound($"Student with ID {studentId} not found");
            }
        }

        [HttpGet("get-all-students-with-prn")]
        public IActionResult GetAllStudentsWithPrn()
        {
            var students = _repository.GetAllStudentsWithPrn();

            if (students != null && students.Any())
            {
                var jsonSerializerOptions = new JsonSerializerOptions
                {
                    ReferenceHandler = ReferenceHandler.Preserve,
                    // Other options if needed
                };

                var json = JsonSerializer.Serialize(students, jsonSerializerOptions);

                return Ok(json);
            }
            else
            {
                return NotFound("No students found");
            }
        }

        [HttpGet("get-students-by-prn/{prn}")]
        public IActionResult GetStudentsByPrn(string prn)
        {
            var students = _repository.GetStudentsByPrn(prn);

            if (students != null && students.Any())
            {
                var jsonSerializerOptions = new JsonSerializerOptions
                {
                    ReferenceHandler = ReferenceHandler.Preserve,
                    // Other options if needed
                };

                var json = JsonSerializer.Serialize(students, jsonSerializerOptions);

                return Ok(json);
            }
            else
            {
                return NotFound($"No students found with PRN: {prn}");
            }
        }

    }
}

