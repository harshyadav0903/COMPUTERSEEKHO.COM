using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace Computer_Seekho
{ 
    public class SQLNotificationRepository : INotificationRepository
    {
        private readonly Appdbcontext context;

        public SQLNotificationRepository(Appdbcontext context)
        {
            this.context = context;
        }

        public async Task<ActionResult<Notification>> AddNotification(Notification notification)
        {
            context.Notification.Add(notification);
            await context.SaveChangesAsync();
            return notification;
        }

        public async Task<Notification> DeleteNotification(int notificationId)
        {
            Notification notification = context.Notification.Find(notificationId);
            if (notification != null)
            {
                context.Notification.Remove(notification);
                await context.SaveChangesAsync();
            }
            return notification;
        }

        public async Task<ActionResult<IEnumerable<Notification>>> GetAllNotifications()
        {
            if (context.Notification == null)
            {
                return null;
            }
            return await context.Notification.ToListAsync();
        }

        public async Task<ActionResult<Notification>?> GetNotification(int notificationId)
        {
            if (context.Notification == null)
            {
                return null;
            }
            var notification = await context.Notification.FindAsync(notificationId);

            if (notification == null)
            {
                return null;
            }

            return notification;
        }

        public async Task<Notification?> UpdateNotification(int notificationId, Notification notification)
        {
            if (notificationId != notification.NotificationId)
            {
                return null;
            }

            context.Entry(notification).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NotificationExists(notificationId))
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

        private bool NotificationExists(int notificationId)
        {
            return (context.Notification?.Any(n => n.NotificationId == notificationId)).GetValueOrDefault();
        }
    }

}
