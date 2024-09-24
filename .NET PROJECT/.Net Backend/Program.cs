using Computer_Seekho;
using Computer_Seekho.Controllers;
using Microsoft.EntityFrameworkCore;

namespace Computer_Seekho
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            //NIKHIL
            builder.Services.AddScoped<ILocationRepository, LocationRepository>();
            builder.Services.AddScoped<IAgeGroupRepository, AgeGroupRepository>();
            builder.Services.AddScoped<IQualificationRepository, QualificationRepository>();
            //BHUSHAN
            builder.Services.AddScoped<IPayment, PaymentRepository>();
            builder.Services.AddScoped<IClosureRepository, ClosureRepository>();
            //SAGAR
            builder.Services.AddScoped<IPlacementDataRepository, PlacementDataRepository>();
            builder.Services.AddScoped<IPlacementVacancyRepository, PlacementVacancyRepository>();
            builder.Services.AddScoped<ICampusLifeRepository, CampusLifeRepository>();
            //SAMRUDDHI
            builder.Services.AddScoped<IBatchInfoRepository, BatchInfoRepository>();
            builder.Services.AddScoped<IBatchRepository, BatchRepository>();
            builder.Services.AddScoped<IEnquirySourceRepository, EnquirySourceRepository>();
            builder.Services.AddScoped<INotificationRepository, SQLNotificationRepository>();
            //PRIYANSH
            builder.Services.AddScoped<ICourseRepository, CourseRepository>();
            builder.Services.AddScoped<IStaffRepository, StaffRepository>();
            builder.Services.AddScoped<IRoleRepository, RoleRepository>();
            builder.Services.AddScoped<IDesignationRepository, DesignationRepository>();
            //HARSH
            builder.Services.AddScoped<IFollowupRepository, follow_upRepository>();
            builder.Services.AddScoped<IEnquiryRepository, EnquiryRepository>();
            builder.Services.AddScoped<IPaymentinfoRepository, PaymentinfoRepository>();
            builder.Services.AddScoped<ICourseDurationRepository, CourseDurationRepository>();
            //RAJ
            builder.Services.AddScoped<ICompanyRepository, CompanyImplementation>();
            builder.Services.AddScoped<IStudentRepository, StudentImplementation>();
            builder.Services.AddScoped<IPrnGenerator, PrnRepository>();

            builder.Services.Configure<MailSettings>(builder.Configuration.GetSection("MailSettings"));
            builder.Services.AddScoped<IMailService, MailService>();

            builder.Services.AddDbContext<Appdbcontext>(option => option.UseSqlServer(builder.Configuration.GetConnectionString("DBConnection")));

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddCors(
     (p) => p.AddDefaultPolicy(policy => policy.WithOrigins("*")
               .AllowAnyHeader()
               .AllowAnyMethod()

       ));
            var app = builder.Build();
            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseHttpsRedirection();
            app.UseCors();
            /* app.UseAuthentication();
             app.UseAuthorization();*/

            app.MapControllers();
            app.Run();
        }

    }
}
;

