using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class RoleRepository:IRoleRepository
    {
        private readonly Appdbcontext context;

        public RoleRepository(Appdbcontext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<Role>> Add(Role role)
        {
            context.Role.Add(role);
            await context.SaveChangesAsync();
            return role;
        }

        public async Task<Role> Delete(int Role_Id)
        {
            Role role = context.Role.Find(Role_Id);
            if (role != null)
            {
                context.Role.Remove(role);
                await context.SaveChangesAsync();
            }
            return role;
        }

        public Task<Role> DeleteRole(int Role_Id)
        {
            throw new NotImplementedException();
        }

        public async Task<ActionResult<IEnumerable<Role>?>> GetAllRole()
        {
            if (context.Role == null)
            {
                return null;
            }
            return await context.Role.ToListAsync();

        }

        public async Task<ActionResult<Role>?> GetRole(int Role_Id)
        {
            if (context.Role == null)
            {
                return null;
            }
            var role = await context.Role.FindAsync(Role_Id);

            if (role == null)
            {
                return null;
            }

            return role;

        }

        public async Task<Role?> Update(int Role_Id, Role role)
        {
            if (Role_Id != role.Role_Id)
            {
                return null;
            }

            context.Entry(role).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoleExists(role.Role_Id))
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
        private bool RoleExists(int id)
        {
            return (context.Role?.Any(e => e.Role_Id == id)).GetValueOrDefault();
        }

    }
}
