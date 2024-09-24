using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface IRoleRepository
    {
        Task<ActionResult<Role>?> GetRole(int Role_Id);
        Task<ActionResult<IEnumerable<Role>>> GetAllRole();
        Task<ActionResult<Role>> Add(Role role);
        Task<Role> Update(int Role_Id, Role roleChanges);
        Task<Role> DeleteRole(int Role_Id);
    }
}
