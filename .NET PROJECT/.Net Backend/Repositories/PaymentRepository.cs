using Computer_Seekho;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class PaymentRepository : IPayment
    {
        private readonly Appdbcontext context;

        public PaymentRepository(Appdbcontext _context)
        {
            this.context = _context;
        }

        public async Task<ActionResult<IEnumerable<Payment>>> GetAllPaymentDetails()
        {
            if (context.Payment == null)
            {
                return null;
            }
            return await context.Payment.ToListAsync();
        }


        public async Task<ActionResult<Payment>?> GetPayment(int Payment_Id)
        {
            if (context.Payment == null)
            {
                return null;
            }
            var payment = await context.Payment.FindAsync(Payment_Id);

            if (payment == null)
            {
                return null;
            }

            return payment;

        }

        public async Task<ActionResult<Payment>> AddPayment(Payment payment)
        {
            context.Payment.Add(payment);
            await context.SaveChangesAsync();
            return payment;
        }


        public async Task<Payment?> Update(int id, Payment payment)
        {
            if (id != payment.Payment_Id)
            {
                return null;
            }

            context.Entry(payment).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymentExists(id))
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
        private bool PaymentExists(int id)
        {
            return (context.Payment?.Any(e => e.Payment_Id == id)).GetValueOrDefault();
        }


        public async Task<Payment> DeletePayment(int Id)
        {
            Payment payment = context.Payment.Find(Id);
            if (payment != null)
            {
                context.Payment.Remove(payment);
                await context.SaveChangesAsync();
            }
            return payment;
        }

        public void UpdateAmount(int paymentID, int amount)
        {


            var Searchupdate = context.Payment.FirstOrDefault(p => p.Payment_Id == paymentID);
            {
                if (Searchupdate != null)
                {
                    Searchupdate.Amount += amount;
                    context.SaveChanges();
                }
                else
                {
                    Console.Write("Payment Not Found");
                }
            }
        }
    }
}
