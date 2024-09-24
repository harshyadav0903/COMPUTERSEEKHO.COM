using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Computer_Seekho;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace Computer_Seekho
{
    public class PrnRepository : IPrnGenerator
    {
        private readonly Appdbcontext context;
        private readonly IStudentRepository _studentRepository;
        private readonly ILogger<PrnRepository> _logger;

        public PrnRepository(Appdbcontext context, IStudentRepository studentRepository)
        {
            this.context = context;
            _studentRepository = studentRepository;
        }
        public async Task<ActionResult<PrnGenerator>> Add(PrnGenerator prn)
        {
            context.Prn.Add(prn);
            await context.SaveChangesAsync();
            return prn;
        }

        public async Task<PrnGenerator> Delete(int id)
        {
            PrnGenerator prngen = context.Prn.Find(id);
            if (prngen != null)
            {
                context.Prn.Remove(prngen);
                await context.SaveChangesAsync();
            }
            return prngen;
        }

        public async Task<ActionResult<IEnumerable<PrnGenerator>?>> GetAllPrn()
        {
            if (context.Prn == null)
            {
                return null;
            }
            return await context.Prn.ToListAsync();

        }

        public async Task<ActionResult<PrnGenerator>?> GetPrn(int Id)
        {
            if (context.Prn == null)
            {
                return null;
            }
            var prnGenerator = await context.Prn.FindAsync(Id);

            if (prnGenerator == null)
            {
                return null;
            }

            return prnGenerator;

        }


        public async Task<PrnGenerator?> Update(int id, PrnGenerator prngen)
        {
            if (id != prngen.pid)
            {
                return null;
            }

            context.Entry(prngen).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PrnExists(id))
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
        private bool PrnExists(int id)
        {
            return (context.Prn?.Any(e => e.pid == id)).GetValueOrDefault();
        }
       
        public string GeneratePRN(int courseId, int studentId)
        {
            try
            {
                var student = context.Student.First(s => s.student_id == studentId);
                Console.WriteLine(student);

                if (student != null)
                {
                    string prnValue;
                    switch (courseId)
                    {
                        case 1:
                            prnValue = "DAC" + studentId;
                            break;
                        case 2:
                            prnValue = "DBDA" + studentId;
                            break;
                        case 3:
                            prnValue = "MSCIT" + studentId;
                            break;
                        case 4:
                            prnValue = "PRECAT" + studentId;
                            break;
                        default:
                            throw new ArgumentException("No such course available to generate the PRN");
                    }

                    using (var transaction = context.Database.BeginTransaction())
                    {
                        try
                        {
                            var prnEntity = new PrnGenerator
                            {
                                Prn_id = prnValue,
                                Course_id = courseId,
                                StudentId = studentId,
                                Student = student
                            };

                            context.Prn.Add(prnEntity);
                            context.SaveChanges();

                            transaction.Commit();

                            return prnValue;
                        }
                        catch (Exception ex)
                        {
                            transaction.Rollback();
                            _logger.LogError(ex, "Error generating PRN and saving to the database");
                            throw; // Re-throw the exception after rolling back the transaction
                        }
                    }
                }
                else
                {
                    throw new ArgumentException($"Student with id {studentId} not found");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error generating PRN and saving to the database");
                throw new Exception("An error occurred while processing the request. Please try again later.", ex);
            }
        }

        public List<Student> GetAllStudentsWithPrn()
        {
            return context.Student.Include(s => s.PRNGenerator).ToList();
        }

        public List<Student> GetStudentsByPrn(string prn)
        {

            var students = context.Student
                .Include(s => s.PRNGenerator)
                .Where(s => s.PRNGenerator.Prn_id == prn)
                .ToList();

            return students;
        }

        public Student GeneratePrnForExistingStudent(int studentId, int courseId)
        {
            var student = context.Student.Include(s => s.PRNGenerator).FirstOrDefault(s => s.student_id == studentId);

            if (student != null)
            {
                // Check if the student already has a PRN
                if (student.PRNGenerator == null)
                {
                    string prnValue = GeneratePRN(courseId, studentId);

                    var prnEntity = new PrnGenerator
                    {
                        Prn_id = prnValue,
                        Course_id = courseId,
                        StudentId = studentId
                    };

                    context.Prn.Add(prnEntity);
                    context.SaveChanges();

                    
                    student.PRNGenerator = prnEntity;
                }

                return student;
            }

            return null; 
        }



    }
}
