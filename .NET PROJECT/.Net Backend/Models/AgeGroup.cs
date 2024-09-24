using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Computer_Seekho
{
    [Table("AgeGroup")]
    public class AgeGroup
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Age_Group_id { get; set; }

        [Column]
        public string Age_Group { get; set; }
    }
}
