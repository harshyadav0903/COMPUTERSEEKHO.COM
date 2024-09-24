using Computer_Seekho;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class StudentImplementation : IStudentRepository
    {
        private readonly Appdbcontext context;

        public StudentImplementation(Appdbcontext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<Student>> Add(Student student)
        {
            context.Student.Add(student);
            await context.SaveChangesAsync();
            return student;
        }

        public async Task<Student> Delete(int Id)
        {
            Student student = context.Student.Find(Id);
            if (student != null)
            {
                context.Student.Remove(student);
                await context.SaveChangesAsync();
            }
            return student;
        }


        public async Task<ActionResult<IEnumerable<Student>?>> GetAllStudents()
        {
            if (context.Student == null)
            {
                return null;
            }
            return await context.Student.ToListAsync();

        }
        public async Task<ActionResult<Student>?> GetStudentAsync(int Id)
        {
            if (context.Student == null)
            {
                return null;
            }
            var student = await context.Student.FindAsync(Id);

            if (student == null)
            {
                return null;
            }

            return student;

        }

        public async Task<Student?> Update(int id, Student student)
        {
            if (id != student.student_id)
            {
                return null;
            }

            context.Entry(student).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
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
        private bool StudentExists(int id)
        {
            return (context.Student?.Any(e => e.student_id == id)).GetValueOrDefault();
        }
        public Student findByName(string name)
        {
            return context.Student?.FirstOrDefault(s => s.student_name == name);
        }

        public Student findStudentByPhoneNo(string phoneno)
        {
            return context.Student?.FirstOrDefault(s => s.contact_no == phoneno);

        }

        /* public Student FeesPendingStudents()
         {
             return context.Students?.FirstOrDefault(s => s.fees_paid <60000);

         }*/

        public async Task<ActionResult<IEnumerable<Student>>> FeesPendingStudent()
        {
            return await context.Student.Where(s => s.fees_paid < 6000).ToListAsync();
        }
    }
}
