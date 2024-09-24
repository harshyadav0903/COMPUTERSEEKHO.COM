using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class AgeGroupRepository : IAgeGroupRepository
    {
        private readonly Appdbcontext context;
        public AgeGroupRepository(Appdbcontext context)
        {
            this.context = context;
        }

        public async Task<ActionResult<AgeGroup>> Add(AgeGroup AgeGroup)
        {

            context.AgeGroup.Add(AgeGroup);
            await context.SaveChangesAsync();
            return AgeGroup;

        }

        public async Task<AgeGroup> Delete(int Id)
        {
            AgeGroup AgeGroup = context.AgeGroup.Find(Id);
            if (AgeGroup != null)
            {
                context.AgeGroup.Remove(AgeGroup);
                await context.SaveChangesAsync();
            }
            return AgeGroup;

        }

        public async Task<ActionResult<IEnumerable<AgeGroup>?>> GetAllAgeGroup()
        {
            if (context.AgeGroup == null)
            {
                return null;
            }
            return await context.AgeGroup.ToListAsync();

        }

        public async Task<ActionResult<AgeGroup>?> GetAgeGroup(int Id)
        {
            if (context.AgeGroup == null)
            {
                return null;
            }
            var AgeGroup = await context.AgeGroup.FindAsync(Id);

            if (AgeGroup == null)
            {
                return null;
            }
            return AgeGroup;

        }

        public async Task<AgeGroup> Update(int id, AgeGroup AgeGroup)
        {
            if (id != AgeGroup.Age_Group_id)
            {
                return null;
            }

            context.Entry(AgeGroup).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AgeGroupExists(id))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }
            return null;

        }
        private bool AgeGroupExists(int id)
        {
            return (context.AgeGroup?.Any(e => e.Age_Group_id == id)).GetValueOrDefault();
        }

    }
}
