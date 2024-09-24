

namespace Computer_Seekho
{
    public class MailRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Body { get; set; }
        public List<IFormFile>? Attachments { get; set; }
    }
}
