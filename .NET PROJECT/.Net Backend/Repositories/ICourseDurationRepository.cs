using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface ICourseDurationRepository
    {
        Task<ActionResult<CourseDuration>?> GetCourseDuration(int Duration_Id);
        Task<ActionResult<IEnumerable<CourseDuration>>> GetAllCourseDuration();
        Task<ActionResult<CourseDuration>> Add(CourseDuration Duration);
        Task<CourseDuration> Update(int Duration_Id, CourseDuration CourseDurationChanges);
        Task<CourseDuration> Delete(int Duration_Id);
    }
}
