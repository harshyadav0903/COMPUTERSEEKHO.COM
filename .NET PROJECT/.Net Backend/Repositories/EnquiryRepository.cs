namespace Computer_Seekho
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using System.Collections.Generic;
    public class EnquiryRepository : IEnquiryRepository
    {
        private readonly Appdbcontext context;

        public EnquiryRepository(Appdbcontext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<Enquiry>> Add(Enquiry enquiry)
        {
            context.Enquiry.Add(enquiry);
            await context.SaveChangesAsync();
            return enquiry;
        }

        public async Task<Enquiry> Delete(int Enquiry_Id)
        {
            Enquiry Enquiry = context.Enquiry.Find(Enquiry_Id);
            if (Enquiry != null)
            {
                context.Enquiry.Remove(Enquiry);
                await context.SaveChangesAsync();
            }
            return Enquiry;
        }
        public async Task<ActionResult<IEnumerable<Enquiry>?>> GetAllEnquiry()
        {
            if (context.Enquiry == null)
            {
                return null;
            }
            return await context.Enquiry.ToListAsync();

        }

        public async Task<ActionResult<Enquiry>?> GetEnquiry(int Id)
        {
            if (context.Enquiry == null)
            {
                return null;
            }
            var Enquiry = await context.Enquiry.FindAsync(Id);

            if (Enquiry == null)
            {
                return null;
            }

            return Enquiry;

        }

        public async Task<Enquiry?> Update(int id, Enquiry Enquiry)
        {
            if (id != Enquiry.Enquiry_Id)
            {
                return null;
            }

            context.Entry(Enquiry).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EnquiryExists(id))
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
        private bool EnquiryExists(int id)
        {
            return (context.Enquiry?.Any(e => e.Enquiry_Id == id)).GetValueOrDefault();
        }

    }
}
