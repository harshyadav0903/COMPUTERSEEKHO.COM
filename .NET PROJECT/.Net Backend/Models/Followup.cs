using System.ComponentModel.DataAnnotations;

namespace Computer_Seekho
{
        public partial class FollowUp
    {
        [Key]
        public int? FollowUpId { get; set; }

        public int? Attempts { get; set; }

        public int? ClosureId { get; set; }

        public int? EnquiryId { get; set; }

        public DateTime? FollowUpDate { get; set; }

        public string? FollowUpMessage { get; set; }

        public string? Staff { get; set; }
    }

}
