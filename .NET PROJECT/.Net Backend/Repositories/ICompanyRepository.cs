using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface ICompanyRepository
    {
        Task<ActionResult<Company>?> GetCompany(int CompanyId);
        Task<ActionResult<IEnumerable<Company>>> GetAllCompany();
        Task<ActionResult<Company>> Add(Company company);
        Task<Company> Update(int CompanyId, Company companyChanges);
        Task<Company> Delete(int CompanyId);

    }
}
