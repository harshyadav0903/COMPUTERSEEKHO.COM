using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class CourseRepository : ICourseRepository
    {
        private readonly Appdbcontext context;

        public CourseRepository(Appdbcontext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<Course>> Add(Course course)
        {
            context.Course.Add(course);
            await context.SaveChangesAsync();
            return course;
        }

        public async Task<Course> DeleteCourse(int Course_Id)
        {
            Course course = context.Course.Find(Course_Id);
            if (course != null)
            {
                context.Course.Remove(course);
                await context.SaveChangesAsync();
            }
            return course;
        }
        public async Task<ActionResult<IEnumerable<Course>?>> GetAllCourse()
        {
            if (context.Course == null)
            {
                return null;
            }
            return await context.Course.ToListAsync();

        }

        public async Task<ActionResult<Course>?> GetCourse(int Id)
        {
            if (context.Course == null)
            {
                return null;
            }
            var course = await context.Course.FindAsync(Id);

            if (course == null)
            {
                return null;
            }

            return course;

        }

        public async Task<Course?> Update(int Course_Id, Course course)
        {
            if (Course_Id != course.Course_Id)
            {
                return null;
            }

            context.Entry(course).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseExists(course.Course_Id))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }

            return null;

        }
        private bool CourseExists(int id)
        {
            return (context.Course?.Any(e => e.Course_Id == id)).GetValueOrDefault();
        }

        
    }
}
