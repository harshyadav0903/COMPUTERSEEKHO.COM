using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{

    [Route("api/[controller]")]
        [ApiController]

        public class CourseController : ControllerBase
        {

            private readonly ICourseRepository _repository;

            public CourseController(ICourseRepository repository)
            {
                _repository = repository;

            }


            [HttpGet]
            public async Task<ActionResult<IEnumerable<Course>?>> GetCourse()
            {
                if (await _repository.GetAllCourse() == null)
                {
                    return NotFound();
                }

                return await _repository.GetAllCourse();
            }

            [HttpGet("{id}")]
            public async Task<ActionResult<Course>> GetById_ActionResultOfT(int id)
            {
                var course = await _repository.GetCourse(id);
                return course == null ? NotFound() : course;
            }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourse(int id, Course course)
        {
            // Basic validation
            if (id != course.Course_Id)
            {
                return BadRequest("Mismatch between provided ID and Course_ID");
            }
            try
            {
                // Attempt to update the course
                await _repository.Update(id, course);

                // Successful update, return NoContent
                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                
                if (_repository.GetCourse(id) == null)
                {
                    
                    return NotFound();
                }
                else
                {
                   
                    throw;
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal Server Error");
            }
        }

      
        [HttpPost]
            public async Task<ActionResult<Course>> PostCourse(Course course)
            {

                await _repository.Add(course);


                return CreatedAtAction("PostCourse", new { id = course.Course_Id }, course);
            }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            if (_repository.GetAllCourse == null)
            {
                return NotFound();
            }
            var course = _repository.DeleteCourse(id);
            if (course == null)
            {
                return NotFound();
            }
            await _repository.DeleteCourse(course.Id);
            return NoContent();
        }
        






    }
    }






