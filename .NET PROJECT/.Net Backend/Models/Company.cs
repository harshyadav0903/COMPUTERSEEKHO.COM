using System.ComponentModel.DataAnnotations;

namespace Computer_Seekho

{
    public class Company
    {
        [Key]
        public int CompanyId { get; set; }

        public string? CompanyName { get; set; }

        public string? Location { get; set; }

        public string? Logo { get; set; }

        public int? TotalPlacement { get; set; }
    }
}


