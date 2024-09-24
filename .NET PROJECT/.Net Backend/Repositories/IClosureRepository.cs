using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface IClosureRepository
    {
        Task<ActionResult<IEnumerable<Closure>>> GetAllClosureDetails();

        Task<ActionResult<Closure>?> GetClosure(int Closure_Id);

        Task<ActionResult<Closure>> AddClosure(Closure Closure);

        Task<Closure> Update(int id, Closure Closure);

        Task<Closure> DeleteClosure(int Closure_Id);
    }
}
