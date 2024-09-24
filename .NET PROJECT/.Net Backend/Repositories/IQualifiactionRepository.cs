using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface IQualificationRepository
    {
        Task<ActionResult<Qualification>?> GetQualification(int Id);
        Task<ActionResult<IEnumerable<Qualification>>> GetAllQualification();
        Task<ActionResult<Qualification>> Add(Qualification Qualification);
        Task<Qualification> Update(int id, Qualification QualificationChanges);
        Task<Qualification> Delete(int Id);
    }
}
