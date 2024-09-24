using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Computer_Seekho
{
    public class Paymentinfo
    {
            [Key]
            public int Payment_Id { get; set; }

            [Column]
            public string Payment_method_Description { get; set; }
        }
    }