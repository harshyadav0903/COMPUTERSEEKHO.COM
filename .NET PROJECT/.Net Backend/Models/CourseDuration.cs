using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Computer_Seekho
{
    public class CourseDuration
    { 
            [Key]
            public int Duration_id { get; set; }

            public string Duration { get; set; }
        }
}




   


