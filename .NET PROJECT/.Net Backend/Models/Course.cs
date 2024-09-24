using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Computer_Seekho
{
    public class Course
    {
        [Key]
            public int Course_Id { get; set; }
            public string? Course_Name { get; set; }
            public int Capacity { get; set; }
            public int Qualification_id { get; set; }
        
        public int Duration_Id {  get; set; }
        public int Age_Group_ID { get; set; }
         public string? Description { get; set; }

        public string? Syllabus {  get; set; }

        public Boolean isActive {  get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal? Fees{ get; set; }

         public string? Video {  get; set; }
        public string? Photo {  get; set; }
    
    }
}
