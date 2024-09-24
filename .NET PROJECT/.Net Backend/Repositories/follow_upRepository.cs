using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class follow_upRepository : IFollowupRepository
    {
        private readonly Appdbcontext context;
        public follow_upRepository(Appdbcontext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<FollowUp>> Add(FollowUp followup)
        {
            context.Followup.Add(followup);
            await context.SaveChangesAsync();
            return followup;
        }

        public async Task<FollowUp> Delete(int FollowUpId)
        {
            FollowUp follow_up = context.Followup.Find(FollowUpId);
            if (follow_up != null)
            {
                context.Followup.Remove(follow_up);
                await context.SaveChangesAsync();
            }
            return follow_up;
        }
        public async Task<ActionResult<IEnumerable<FollowUp>?>> GetAllfollow_up()
        {
            if (context.Followup == null)
            {
                return null;
            }
            return await context.Followup.ToListAsync();

        }

        public async Task<ActionResult<FollowUp>?> Getfollow_up(int FollowUpId)
        {
            if (context.Followup == null)
            {
                return null;
            }
            var follow_up = await context.Followup.FindAsync(FollowUpId);

            if (follow_up == null)
            {
                return null;
            }

            return follow_up;

        }

        public async Task<FollowUp?> Update(int FollowUpId, FollowUp followup)
        {
            if (FollowUpId != followup.FollowUpId)
            {
                return null;
            }

            context.Entry(followup).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!follow_upExists(FollowUpId))
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

        public void UpdateClosureId(int followUpId)
        {
            var followUpToUpdate = context.Followup.FirstOrDefault(f => f.FollowUpId == followUpId);

            if (followUpToUpdate != null)
            {
                followUpToUpdate.ClosureId = 1;
                context.SaveChanges();
            }
        }

        private bool follow_upExists(int FollowUpId)
        {
            return (context.Followup?.Any(e => e.FollowUpId == FollowUpId)).GetValueOrDefault();
        }


    }
}
