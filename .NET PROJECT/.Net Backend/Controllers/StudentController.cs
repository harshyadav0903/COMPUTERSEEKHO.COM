using System.Collections.Generic;
using System.Threading.Tasks;
using Computer_Seekho;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentRepository _repository;

        public StudentController(IStudentRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("allstudents")]
        public async Task<ActionResult<IEnumerable<Student>?>> GetStudents()
        {
            if (await _repository.GetAllStudents() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllStudents();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudentById(int id)
        {
            var student = await _repository.GetStudentAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            return Ok(student);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudent(int id, Student student)
        {
            if (id != student.student_id)
            {
                return BadRequest("ID mismatch");
            }

            try
            {
                await _repository.Update(id, student);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
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
        public async Task<ActionResult<Student>> PostStudent(Student student)
        {
            await _repository.Add(student);

            return CreatedAtAction(nameof(GetStudentById), new { id = student.student_id }, student);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            var student = await _repository.GetStudentAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            await _repository.Delete(id);

            return NoContent();
        }

        private bool StudentExists(int id)
        {
            return _repository.GetStudentAsync(id) != null;
        }
        [HttpGet("findbyname/{name}")]
        public ActionResult<Student> GetStudentByName(string name)
        {
            var student = _repository.findByName(name);
            if (student == null)
            {
                return NotFound($"Student with name '{name}' not found.");
            }
            return Ok(student);
        }
        [HttpGet("findbyphoneno/{phoneno}")]
        public ActionResult<Student> GetStudentByPhoneno(String phoneno)
        {
            var student = _repository.findStudentByPhoneNo(phoneno);
            if (student == null)
            {
                return NotFound($"Student with phoneno '{phoneno}' not found.");
            }
            return Ok(student);
        }
        [HttpGet("feespendingStudent")]
        public async Task<ActionResult<IEnumerable<Student>>> FeespedingStudent()
        {
            var student = await _repository.FeesPendingStudent();
            if (student == null)
            {
                return NotFound("Not found any student who is unpaid");
            }

            return Ok(student);
        }
    }
}
