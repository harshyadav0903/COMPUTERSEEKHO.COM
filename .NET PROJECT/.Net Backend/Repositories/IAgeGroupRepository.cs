using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface IAgeGroupRepository
    {
        Task<ActionResult<AgeGroup>?> GetAgeGroup(int Id);

        Task<ActionResult<IEnumerable<AgeGroup>>> GetAllAgeGroup();
        Task<ActionResult<AgeGroup>> Add(AgeGroup AgeGroup);
        Task<AgeGroup> Update(int id, AgeGroup AgeGroupChanges);
        Task<AgeGroup> Delete(int Id);
    }
}
