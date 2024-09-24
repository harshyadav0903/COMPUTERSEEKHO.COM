
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace Computer_Seekho   
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IPayment _repository;

        public PaymentController(IPayment repository)
        {
            _repository = repository;

        }

        [HttpPatch("updateAmount/{id}")]
        public IActionResult UpdateAmount(int id, [FromBody] int amount)
        {
            _repository.UpdateAmount(id, amount);

            return Ok("Amount updated successfully.");
        }


        [HttpGet("ListAll")]
        public async Task<ActionResult<IEnumerable<Payment>?>> GetAllPayments()
        {
            if (await _repository.GetAllPaymentDetails() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllPaymentDetails();
        }

        [HttpGet("getby/{id}")]
        public async Task<ActionResult<Payment>> GetPayment(int id)
        {
            var payment = await _repository.GetPayment(id);
            return payment == null ? NotFound() : payment;
        }

        [HttpPost("create")]
        public async Task<ActionResult<Payment>> PostEmployee(Payment payment)
        {
            await _repository.AddPayment(payment);
            return CreatedAtAction("PostEmployee", new { id = payment.Payment_Id }, payment);
        }


        [HttpPut("updatePayment/{id}")]
        public async Task<IActionResult> PutPayment(int id, Payment payment)
        {
            if (id != payment.Payment_Id)
            {
                return BadRequest();
            }
            try
            {
                await _repository.Update(id, payment);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetPayment(id) == null)
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

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeletePayment(int id)
        {
            var pay = await _repository.GetPayment(id);
            if (pay == null)
            {
                return NotFound();
            }
            var payments = await _repository.DeletePayment(id);
            if (payments == null)
            {
                return NotFound();
            }
            await _repository.DeletePayment(payments.Payment_Id);
            return NoContent();
        }

    }
}
