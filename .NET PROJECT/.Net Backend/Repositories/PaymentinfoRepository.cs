using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class PaymentinfoRepository: IPaymentinfoRepository
    {
        private readonly Appdbcontext context;
        public PaymentinfoRepository(Appdbcontext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<Paymentinfo>> Add(Paymentinfo Paymentinfo)
        {
            context.Paymentinfo.Add(Paymentinfo);
            await context.SaveChangesAsync();
            return Paymentinfo;
        }

        public async Task<Paymentinfo> Delete(int PaymentinfoId)
        {
            Paymentinfo follow_up = context.Paymentinfo.Find(PaymentinfoId);
            if (follow_up != null)
            {
                context.Paymentinfo.Remove(follow_up);
                await context.SaveChangesAsync();
            }
            return follow_up;
        }
        public async Task<ActionResult<IEnumerable<Paymentinfo>?>> GetAllPaymentinfo()
        {
            if (context.Paymentinfo == null)
            {
                return null;
            }
            return await context.Paymentinfo.ToListAsync();

        }
        public async Task<ActionResult<Paymentinfo>?> GetPaymentinfo(int PaymentinfoId)
        {
            if (context.Paymentinfo == null)
            {
                return null;
            }
            var Paymentin = await context.Paymentinfo.FindAsync(PaymentinfoId);

            if (Paymentin == null)
            {
                return null;
            }

            return Paymentin;

        }

        public async Task<Paymentinfo?> Update(int Payment_Id, Paymentinfo paymentinfo)
        {
            if (Payment_Id != paymentinfo.Payment_Id)
            {
                return null;
            }

            context.Entry(paymentinfo).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!follow_upExists(Payment_Id))
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
        private bool follow_upExists(int PaymentinfoId)
        {
            return (context.Paymentinfo?.Any(e => e.Payment_Id == PaymentinfoId)).GetValueOrDefault();
        }

    }
}
