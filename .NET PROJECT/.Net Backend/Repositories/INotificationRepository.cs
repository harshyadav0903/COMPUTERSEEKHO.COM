using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface INotificationRepository
    {
        Task<ActionResult<Notification>?> GetNotification(int id);
        Task<ActionResult<IEnumerable<Notification>>> GetAllNotifications();
        Task<ActionResult<Notification>> AddNotification(Notification notification);
        Task<Notification> UpdateNotification(int id, Notification notificationChanges);
        Task<Notification> DeleteNotification(int id);
    }
}
