using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace Computer_Seekho
{

    [Route("api/[controller]")]
    [ApiController]
    public class RoleController:ControllerBase
    {
        private readonly IRoleRepository _repository;

        public RoleController(IRoleRepository repository)
        {
            _repository = repository;

        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Role>?>> GetRole()
        {
            if (await _repository.GetAllRole() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllRole();
        }

        [HttpGet("{Role_Id}")]
        public async Task<ActionResult<Role>> GetById_ActionResultOfT(int Role_Id)
        {
            var role = await _repository.GetRole(Role_Id);
            return role == null ? NotFound() : role;
        }

        // PUT: api/Role/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{Role_Id}")]
        public async Task<IActionResult> PutRole(int Role_Id, Role role)
        {
            if (Role_Id != role.Role_Id)
            {
                return BadRequest();
            }


            try
            {
                await _repository.Update(Role_Id, role);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetRole(Role_Id) == null)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Role
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Role>> PostRole(Role role)
        {

            await _repository.Add(role);


            return CreatedAtAction("PostRole", new { id = role.Role_Id }, role);
        }

        [HttpDelete("{Role_Id}")]
        public async Task<IActionResult> DeleteRole(int Role_Id)
        {
            if (_repository.GetAllRole == null)
            {
                return NotFound();
            }
            var role = _repository.DeleteRole(Role_Id);
            if (role == null)
            {
                return NotFound();
            }
            await _repository.DeleteRole(role.Id);
            return NoContent();
        }

    }
}
