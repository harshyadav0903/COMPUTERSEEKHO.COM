using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Computer_Seekho
{
    [Table("Qualification")]
    public class Qualification
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Qualification_id { get; set; }

        [Column]
        public string QualificationName { get; set; }
    }
}
