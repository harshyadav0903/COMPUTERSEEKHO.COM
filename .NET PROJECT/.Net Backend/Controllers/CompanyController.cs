using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyRepository _repository;

        public CompanyController(ICompanyRepository repository)
        {
            _repository = repository;

        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Company>?>> GetCompany()
        {
            if (await _repository.GetAllCompany() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllCompany();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Company>> GetById_ActionResultOfT(int id)
        {
            var company = await _repository.GetCompany(id);
            return company == null ? NotFound() : company;
        }

        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompany(int id, Company company)
        {
            if (id != company.CompanyId)
            {
                return BadRequest();
            }


            try
            {
                await _repository.Update(id, company);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetCompany(id) == null)
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

        // POST: api/Employees
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Company>> PostCompany(Company company)
        {

            await _repository.Add(company);


            return CreatedAtAction("PostCompany", new { id = company.CompanyId }, company);
        }



        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompany(int id)
        {
            if (_repository.GetAllCompany() == null)
            {
                return NotFound();
            }
            var company = _repository.Delete(id);
            if (company == null)
            {
                return NotFound();
            }

            await _repository.Delete(company.Id);


            return NoContent();
        }
       
    }
}
