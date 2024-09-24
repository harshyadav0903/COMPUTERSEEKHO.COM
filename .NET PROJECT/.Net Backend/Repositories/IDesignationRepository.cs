using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface IDesignationRepository
    {
        Task<ActionResult<Designation>?> GetDesignation(int DesignationId);
        Task<ActionResult<IEnumerable<Designation>>> GetAllDesignation();
        Task<ActionResult<Designation>> Add(Designation designation);
        Task<Designation> Update(int DesignationId, Designation designationChanges);
        Task<Designation> DeleteDesignation(int DesignationId);
    } 
}
