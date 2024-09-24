using Microsoft.VisualBasic;
using System.ComponentModel.DataAnnotations;

namespace Computer_Seekho
{
    public class Payment
    {
        [Key]
        public int Payment_Id { get; set; }
        public int? StudentId { get; set; }
        public string? Transaction_Id { get; set; }

        public DateTime? Date { get; set; }

        public double? Amount { get; set; }
        public int? Batch_Id { get; set; }
        public int? PaymentTypeId { get; set; }
    }
}
