namespace Computer_Seekho
{
    public class Notification
    {
        public int NotificationId { get; set; }
        public DateTime ArrivingDate { get; set; }
        public DateTime ExpiryDate { get; set; }
        public string? NotificationMessage { get; set; }
    }
}
