using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface ICampusLifeRepository
    {

        Task<ActionResult<CampusLife>?> GetCampusLife(int Id);
        Task<ActionResult<IEnumerable<CampusLife>>> GetAllCampusLife();
        Task<ActionResult<CampusLife>> Add(CampusLife campusLife);
        Task<CampusLife> Update(int id, CampusLife campusLifeChanges);
        Task<CampusLife> Delete(int Id);
    }
}
