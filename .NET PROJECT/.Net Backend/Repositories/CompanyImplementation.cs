
using Computer_Seekho;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

public class CompanyImplementation : ICompanyRepository
{
    private readonly Appdbcontext context;

    public CompanyImplementation(Appdbcontext context)
    {
        this.context = context;
    }
    public async Task<ActionResult<Company>> Add(Company company)
    {
        context.Company.Add(company);
        await context.SaveChangesAsync();
        return company;
    }
    public async Task<Company> Delete(int id)
    {
        Company  company= context.Company.Find(id);
        if (company != null)
        {
            context.Company.Remove(company);
            await context.SaveChangesAsync();
        }
        return company;
    }

    public async Task<ActionResult<IEnumerable<Company>?>> GetAllCompany()
    {
        if (context.Company == null)
        {
            return null;
        }
        return await context.Company.ToListAsync();

    }

    public async Task<ActionResult<Company>?> GetCompany(int Id)
    {
        if (context.Company == null)
        {
            return null;
        }
        var company = await context.Company.FindAsync(Id);

        if (company == null)
        {
            return null;
        }

        return company;

    }

    public async Task<Company?> Update(int id, Company company)
    {
        if (id != company.CompanyId)
        {
            return null;
        }

        context.Entry(company).State = EntityState.Modified;

        try
        {
            await context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!CompanyExists(id))
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
    private bool CompanyExists(int id)
    {
        return (context.Company?.Any(e => e.CompanyId == id)).GetValueOrDefault();
    }

    

}

