using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Computer_Seekho
{
    [Table("Location")]
    public class Location
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LocationId { get; set; }

        [Column]
        public string City { get; set; }

        [Column]
        public string Country { get; set; }

        [Column]
        public string Landmark { get; set; }

        [Column]
        public string Pincode { get; set; }
    }
}
