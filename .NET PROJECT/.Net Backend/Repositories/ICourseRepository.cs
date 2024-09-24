using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface ICourseRepository
    {

        Task<ActionResult<Course>?> GetCourse(int Course_Id);
        Task<ActionResult<IEnumerable<Course>>> GetAllCourse();
        Task<ActionResult<Course>> Add(Course course);
        Task<Course> Update(int Course_Id, Course courseChanges);
        Task<Course> DeleteCourse(int Course_Id);

    }

}



