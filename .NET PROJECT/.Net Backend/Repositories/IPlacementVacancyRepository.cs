using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface IPlacementVacancyRepository
    {
        Task<ActionResult<PlacementVacancy>?> GetPlacementVacancy(int Id);
        Task<ActionResult<IEnumerable<PlacementVacancy>>> GetAllPlacementVacancy();
        Task<ActionResult<PlacementVacancy>> Add(PlacementVacancy placementVacancy);
        Task<PlacementVacancy> Update(int id, PlacementVacancy placementVacancyChanges);
        Task<PlacementVacancy> Delete(int Id);
    }
}
