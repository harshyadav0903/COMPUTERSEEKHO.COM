using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace Computer_Seekho
{
    public class EnquirySourceRepository : IEnquirySourceRepository
    {
        private readonly Appdbcontext context;

        public EnquirySourceRepository(Appdbcontext context)
        {
            this.context = context;
        }

        public async Task<ActionResult<EnquirySource>> Add(EnquirySource enquirySource)
        {
            context.Enquirysource.Add(enquirySource);
            await context.SaveChangesAsync();
            return enquirySource;
        }

        public async Task<EnquirySource> Delete(int EnquirySourceId)
        {
            EnquirySource enquirySource = context.Enquirysource.Find(EnquirySourceId);
            if (enquirySource != null)
            {
                context.Enquirysource.Remove(enquirySource);
                await context.SaveChangesAsync();
            }
            return enquirySource;
        }

        public async Task<ActionResult<IEnumerable<EnquirySource>?>> GetAllEnquirySource()
        {
            if (context.Enquirysource == null)
            {
                return null;
            }
            return await context.Enquirysource.ToListAsync();
        }

        public async Task<ActionResult<EnquirySource>?> GetEnquirySource(int EnquirySourceId)
        {
            if (context.Enquirysource == null)
            {
                return null;
            }
            var enquirySource = await context.Enquirysource.FindAsync(EnquirySourceId);

            if (enquirySource == null)
            {
                return null;
            }

            return enquirySource;
        }

        public async Task<EnquirySource?> Update(int id, EnquirySource enquirySource)
        {
            if (id != enquirySource.EnquirySourceId)
            {
                return null;
            }

            context.Entry(enquirySource).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EnquirySourceExists(id))
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

        private bool EnquirySourceExists(int id)
        {
            return (context.Enquirysource?.Any(e => e.EnquirySourceId == id)).GetValueOrDefault();
        }
    }
}
