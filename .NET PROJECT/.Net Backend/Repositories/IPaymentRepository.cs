using Computer_Seekho;
using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface IPayment
    {

        Task<ActionResult<IEnumerable<Payment>>> GetAllPaymentDetails();

        Task<ActionResult<Payment>?> GetPayment(int payment_Id);

        Task<ActionResult<Payment>> AddPayment(Payment payment);

        Task<Payment> Update(int id, Payment payment);

        Task<Payment> DeletePayment(int payment_Id);
        void UpdateAmount(int id, int amount);
    }
}
