using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Computer_Seekho
{
    public class CourseDurationRepository : ICourseDurationRepository
    {
        private readonly Appdbcontext _context;

        public CourseDurationRepository(Appdbcontext context)
        {
            _context = context;
        }

        public async Task<ActionResult<CourseDuration>> Add(CourseDuration duration)
        {
            _context.CourseDuration.Add(duration);
            await _context.SaveChangesAsync();
            return new ActionResult<CourseDuration>(duration);
        }

        public async Task<CourseDuration> Delete(int duration_Id)
        {
            var courseDuration = await _context.CourseDuration.FindAsync(duration_Id);
            if (courseDuration != null)
            {
                _context.CourseDuration.Remove(courseDuration);
                await _context.SaveChangesAsync();
            }
            return courseDuration;
        }

        public async Task<ActionResult<IEnumerable<CourseDuration>>> GetAllCourseDuration()
        {
            return await _context.CourseDuration.ToListAsync();
        }

        public async Task<ActionResult<CourseDuration>?> GetCourseDuration(int duration_Id)
        {
            var courseDuration = await _context.CourseDuration.FindAsync(duration_Id);
            if (courseDuration == null)
            {
                return null;
            }
            return courseDuration;
        }

        public async Task<CourseDuration> Update(int duration_Id, CourseDuration courseChanges)
        {
            if (duration_Id != courseChanges.Duration_id)
            {
                return null;
            }

            _context.Entry(courseChanges).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseDurationExists(duration_Id))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }

            return courseChanges;
        }

        private bool CourseDurationExists(int duration_Id)
        {
            return _context.CourseDuration.Any(e => e.Duration_id == duration_Id);
        }
    }
}
