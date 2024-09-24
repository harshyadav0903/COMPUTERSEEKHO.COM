using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentinfoController : ControllerBase
    {

            private readonly IPaymentinfoRepository _repository;

            public PaymentinfoController(IPaymentinfoRepository repository)
            {
                _repository = repository;

            }
            [HttpGet]
            public async Task<ActionResult<IEnumerable<Paymentinfo>?>> GetPaymentinfo()
            {
                if (await _repository.GetAllPaymentinfo() == null)
                {
                    return NotFound();
                }

                return await _repository.GetAllPaymentinfo();
            }

            [HttpGet("{id}")]
            public async Task<ActionResult<Paymentinfo>> GetById_ActionResultOfT(int id)
            {
                var paymentinfo = await _repository.GetPaymentinfo(id);
                return paymentinfo == null ? NotFound() : paymentinfo;
            }

        // PUT: api/Paymentinfo/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
            public async Task<IActionResult> PutPaymentinfo(int id, Paymentinfo paymentinfo)
            {
                if (id != paymentinfo.Payment_Id)
                {
                    return BadRequest();
                }


                try
                {
                    await _repository.Update(id, paymentinfo);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (_repository.GetPaymentinfo(id) == null)
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

            // POST: api/Paymentinfo
            // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
            [HttpPost]
            public async Task<ActionResult<Paymentinfo>> PostPaymentinfo(Paymentinfo paymentinfo)
            {

                await _repository.Add(paymentinfo);


                return CreatedAtAction("PostPaymentinfo", new { id = paymentinfo.Payment_Id }, paymentinfo);
            }



            /*           // DELETE: api/Paymentinfo/5
                       [HttpDelete("{id}")]
                       public async Task<IActionResult> Delete(int id)
                       {
                           if (_repository.GetAllPaymentinfo() == null)
                           {
                               return NotFound();
                           }
                           var paymentinfo = _repository.Delete(id);
                           if (paymentinfo == null)
                           {
                               return NotFound();
                           }

                       await _repository.Delete(paymentinfo.Id);


                           return NoContent();
                       }*/

            [HttpDelete("{id}")]
            public async Task<IActionResult> Delete(int id)
            {
                if (_repository.GetAllPaymentinfo() == null)
                {
                    return NotFound();
                }
                var payments = _repository.Delete(id);
                if (payments == null)
                {
                    return NotFound();
                }
                await _repository.Delete(payments.Id);
                return NoContent();
            }

        }
}


/*using Computerseekho.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Computerseekho.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentinfoController : ControllerBase
    {
        private readonly IPaymentinfoRepository _repository;

        public PaymentinfoController(IPaymentinfoRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Paymentinfo>>> GetPaymentinfo()
        {
            var paymentinfoList = await _repository.GetAllPaymentinfo();
            if (paymentinfoList == null || paymentinfoList.Count == 0)
            {
                return NotFound();
            }

            return Ok(paymentinfoList);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Paymentinfo>> GetPaymentinfo(int id)
        {
            var paymentinfo = await _repository.GetPaymentinfo(id);
            if (paymentinfo == null)
            {
                return NotFound();
            }

            return Ok(paymentinfo);
        }

        // PUT: api/Paymentinfo/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPaymentinfo(int id, Paymentinfo paymentinfo)
        {
            if (id != paymentinfo.Payment_Id)
            {
                return BadRequest();
            }

            try
            {
                await _repository.Update(id, paymentinfo);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetPaymentinfo(id) == null)
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

        // POST: api/Paymentinfo
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Paymentinfo>> PostPaymentinfo(Paymentinfo paymentinfo)
        {
            await _repository.Add(paymentinfo);
            return CreatedAtAction(nameof(GetPaymentinfo), new { id = paymentinfo.Payment_Id }, paymentinfo);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var paymentinfo = await _repository.GetPaymentinfo(id);
            if (paymentinfo == null)
            {
                return NotFound();
            }

            await _repository.Delete(id);
            return NoContent();
        }
    }
}
*/