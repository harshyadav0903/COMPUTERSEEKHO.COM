using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
        public interface IFollowupRepository
        {
            Task<ActionResult<FollowUp>?> Getfollow_up(int FollowUpId);
            Task<ActionResult<IEnumerable<FollowUp>>> GetAllfollow_up();
            Task<ActionResult<FollowUp>> Add(FollowUp followup);
            Task<FollowUp> Update(int FollowUpId, FollowUp follow_upChanges);
            Task<FollowUp> Delete(int FollowUpId);
            void UpdateClosureId(int followUpId);

    }

}
