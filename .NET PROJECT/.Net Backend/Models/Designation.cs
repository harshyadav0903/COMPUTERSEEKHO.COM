using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Computer_Seekho
{
    public class Designation
    {
        [Key]
       
        public int DesignationId { get; set; }

        public string DesignationName { get; set; }
    }
}
