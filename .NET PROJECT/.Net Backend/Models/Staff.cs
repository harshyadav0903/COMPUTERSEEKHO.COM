using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Computer_Seekho
{
    public partial class Staff
    {

        public int StaffId { get; set; }

        public string? ContactNo { get; set; }

        public int DesignationId { get; set; }

        public string? Experience { get; set; }

        public DateTime? JoiningDate { get; set; }

        public int LocationId { get; set; }

        public string? Name { get; set; }

        public string? Photo { get; set; }

        public int QualificationId { get; set; }

        public string? Username { get; set; }

        public string? Email { get; set; }

        public string? Password { get; set; }

        public int RoleId { get; set; }
    }

}
