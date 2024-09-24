using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface IPaymentinfoRepository
    {
        Task<ActionResult<Paymentinfo>?> GetPaymentinfo(int PaymentinfoId);
        Task<ActionResult<IEnumerable<Paymentinfo>>> GetAllPaymentinfo();
        Task<ActionResult<Paymentinfo>> Add(Paymentinfo Paymentinfo);
        Task<Paymentinfo> Update(int PaymentinfoId, Paymentinfo PaymentinfoChanges);
        Task<Paymentinfo> Delete(int PaymentinfoId);
    }
}
