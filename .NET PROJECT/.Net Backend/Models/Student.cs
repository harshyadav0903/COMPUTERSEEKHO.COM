using Computer_Seekho;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Computer_Seekho
{
    public class Student
    {
            [Key]
            public int student_id { get; set; }

            public int? batch_id { get; set; }

            public string? contact_no { get; set; }

            public int? course_id { get; set; }

            public DateTime? date_of_birth { get; set; }

            public string? email { get; set; }

            public int? enquiry_id { get; set; }

            public int? fees_paid { get; set; }

            public string? gender { get; set; }

            public int? location_id { get; set; }

            public int? payment_id { get; set; }

            public string? photo { get; set; }

            public string? qualification_id { get; set; }

            public DateTime? registration_date { get; set; }

            public string? student_name { get; set; }

            public int? total_fees { get; set; }


            public PrnGenerator PRNGenerator { get; set; }

        }
    }

