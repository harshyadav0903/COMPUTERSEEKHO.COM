using Computer_Seekho;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class Appdbcontext:DbContext
    {
        public Appdbcontext(DbContextOptions<Appdbcontext> options)
             : base(options)
        {
        }
        public DbSet<Location> Location { get; set; }
        public DbSet<AgeGroup> AgeGroup { get; set; }
        public DbSet<Qualification> Qualification { get; set; }
        public DbSet<Payment> Payment { get; set; }
        public DbSet<Closure> Closure { get; set; }
        public DbSet<PlacementData> PlacementData { get; set; }
        public DbSet<PlacementVacancy> PlacementVacancy { get; set; }
        public DbSet<CampusLife> CampusLife { get; set; }
        public DbSet<EnquirySource> Enquirysource { get; set; }
        public DbSet<BatchInfo> BatchInfo { get; set; }
        public DbSet<Batch> Batches { get; set; }
        public DbSet<Course> Course { get; set; }
        public DbSet<Staff> Staff { get; set; }
        public DbSet<Designation> Designation { get; set; }
        public DbSet<Role> Role { get; set; }
        public DbSet<FollowUp> Followup { get; set; }
        public DbSet<Enquiry> Enquiry { get; set; }
        public DbSet<Paymentinfo> Paymentinfo { get; set; }
        public DbSet<CourseDuration> CourseDuration { get; set; }
        public DbSet<Company> Company { get; set; }
        public DbSet<Student> Student { get; set; }
        public DbSet<PrnGenerator> Prn { get; set; }
        public DbSet<Notification> Notification { get; set; }

    }
}