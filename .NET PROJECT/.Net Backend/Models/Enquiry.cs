using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Computer_Seekho
{
    public class Enquiry
    {
        [Key]
        public int Enquiry_Id { get; set; }

        public string? EnquirerName { get; set; }

        public string? Qualification { get; set; }

        public string? Contact_No { get; set; }

        public string? Email { get; set; }

        public DateTime? Enquiry_Date { get; set; }

        public int? Enquiry_Source_id { get; set; }

        public string? Student_Name { get; set; }

        public int? Location_id { get; set; }

        public string? Enquirer_Query { get; set; }

        public int? Closure_Id { get; set; }

        public DateTime? Next_followup_Date { get; set; }

        public int? Course_Id { get; set; }

        public String? Staff { get; set; }

        public DateTime? Date_Of_Birth { get; set; }

        public string? Other_Closure_reason { get; set; }
    }
}
