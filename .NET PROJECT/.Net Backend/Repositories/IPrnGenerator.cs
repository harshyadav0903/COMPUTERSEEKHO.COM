using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface IPrnGenerator
    {
        Task<ActionResult<PrnGenerator>?> GetPrn(int Pid);
        Task<ActionResult<IEnumerable<PrnGenerator>>> GetAllPrn();
        Task<ActionResult<PrnGenerator>> Add(PrnGenerator prn);
        Task<PrnGenerator> Update(int PId, PrnGenerator prnchanges);
        Task<PrnGenerator> Delete(int PId);
        string GeneratePRN(int courseId, int studentId);
        public Student GeneratePrnForExistingStudent(int studentId, int courseId);
        List<Student> GetAllStudentsWithPrn();
        List<Student> GetStudentsByPrn(string prn);

    }
}
