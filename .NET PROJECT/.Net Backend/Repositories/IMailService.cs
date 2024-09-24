
namespace Computer_Seekho
{
    public interface IMailService
    {
        public Task SendEmailAsync(MailRequest mailrequest);
    }
}
