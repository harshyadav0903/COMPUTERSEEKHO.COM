using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
        private readonly INotificationRepository _repository;

        public NotificationController(INotificationRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Notification>?>> GetNotifications()
        {
            if (await _repository.GetAllNotifications() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllNotifications();
        }



        [HttpGet("{id}")]
        public async Task<ActionResult<Notification>> GetNotification(int id)
        {
            var notification = await _repository.GetNotification(id);
            return notification == null ? NotFound() : notification.Value;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutNotification(int id, Notification notification)
        {
            if (id != notification.NotificationId)
            {
                return BadRequest();
            }

            try
            {
                await _repository.UpdateNotification(id, notification);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetNotification(id) == null)
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

        [HttpPost]
        public async Task<ActionResult<Notification>> PostNotification(Notification notification)
        {
            await _repository.AddNotification(notification);
            return CreatedAtAction("PostNotification", new { id = notification.NotificationId }, notification);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNotification(int id)
        {
            var notification = await _repository.DeleteNotification(id);

            if (notification == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
