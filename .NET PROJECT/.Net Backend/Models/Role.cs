using System.ComponentModel.DataAnnotations;

namespace Computer_Seekho
{
        public class Role
        {
            [Key]
        
            public int Role_Id { get; set; }

            [Required]
            public string RoleName { get; set; }
        }
    }


