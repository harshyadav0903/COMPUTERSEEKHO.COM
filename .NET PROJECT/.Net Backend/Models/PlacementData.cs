using System.ComponentModel.DataAnnotations;

namespace Computer_Seekho
{
    public class PlacementData
    {
        [Key]
        public int Placementid { get; set; }

        public int? Batchid { get; set; }

        public int? Companyid { get; set; }

        public string? Designation { get; set; }

        public string? Photourl { get; set; }

        public int? Placementvacancyid { get; set; }

        public string? Prnid { get; set; }

        public string? Status { get; set; }




    }
}
