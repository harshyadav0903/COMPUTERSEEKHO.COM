using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Computer_Seekho
{
    public class PrnGenerator
    {
        [Key]
        public int pid { get; set; } // This is the primary key

        public string Prn_id { get; set; }
        public int Course_id { get; set; }
        public int StudentId { get; set; }

        public Student Student { get; set; }

    }


}