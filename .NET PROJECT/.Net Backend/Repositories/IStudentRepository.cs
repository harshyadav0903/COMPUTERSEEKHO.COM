using Computer_Seekho;
using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface IStudentRepository
    {

        Task<ActionResult<Student>?> GetStudentAsync(int Id);
        Task<ActionResult<IEnumerable<Student>>> GetAllStudents();
        Task<ActionResult<Student>> Add(Student student);
        Task<Student> Update(int id, Student studentChanges);
        Task<Student> Delete(int Id);

        Student findByName(String name);
        Student findStudentByPhoneNo(string phoneno);
        Task<ActionResult<IEnumerable<Student>>> FeesPendingStudent();
    }
}
