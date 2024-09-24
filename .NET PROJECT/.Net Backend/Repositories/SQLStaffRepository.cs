
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace Computer_Seekho
{

    public class StaffRepository: IStaffRepository
    {
   
      
            private readonly Appdbcontext context;

            public StaffRepository(Appdbcontext context)
            {
                this.context = context;
            }
            public async Task<ActionResult<Staff>> Add(Staff staff)
            {
                context.Staff.Add(staff);
                await context.SaveChangesAsync();
                return staff;
            }

            public async Task<Staff> Delete(int StaffId)
            {
                Staff staff = context.Staff.Find(StaffId);
                if (staff != null)
                {
                    context.Staff.Remove(staff);
                    await context.SaveChangesAsync();
                }
                return staff;
            }

        public Task<Staff> DeleteStaff(int StaffId)
        {
            throw new NotImplementedException();
        }

        public async Task<ActionResult<IEnumerable<Staff>?>> GetAllStaff()
            {
                if (context.Staff== null)
                {
                    return null;
                }
                return await context.Staff.ToListAsync();

            }

            public async Task<ActionResult<Staff>?> GetStaff(int StaffId)
            {
                if (context.Staff == null)
                {
                    return null;
                }
                var staff = await context.Staff.FindAsync(StaffId);

                if (staff == null)
                {
                    return null;
                }

                return staff;

            }

            public async Task<Staff?> Update(int StaffId, Staff staff)
            {
                if (StaffId != staff.StaffId)
                {
                    return null;
                }

                context.Entry(staff).State = EntityState.Modified;

                try
                {
                    await context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!StaffExists(staff.StaffId))
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
            private bool StaffExists(int id)
            {
                return (context.Staff?.Any(e => e.StaffId == id)).GetValueOrDefault();
            }

      
        public Staff GetStaffDetails(string email, string password)
        {
          
            return context.Staff.FirstOrDefault(s => s.Email == email && s.Password == password);
        }
    }
    }


