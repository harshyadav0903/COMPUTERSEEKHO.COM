using Microsoft.AspNetCore.Mvc;
namespace Computer_Seekho
{
    public interface IStaffRepository
    {
         

        Task<ActionResult<Staff>?> GetStaff(int StaffId);
        Task<ActionResult<IEnumerable<Staff>>> GetAllStaff();
        Task<ActionResult<Staff>> Add(Staff staff);
        Task<Staff> Update(int StaffId, Staff staffChanges);
        Task<Staff> DeleteStaff(int StaffId);
        Task<Staff> Delete(int StaffId);

        //object GetStaffDetails(string email, string password);
        Staff GetStaffDetails(string email, string password);

    }
}
