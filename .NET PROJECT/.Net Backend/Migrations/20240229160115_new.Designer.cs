﻿// <auto-generated />
using System;
using Computer_Seekho;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Computer_Seekho.Migrations
{
    [DbContext(typeof(Appdbcontext))]
    [Migration("20240229160115_new")]
    partial class @new
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Computer_Seekho.AgeGroup", b =>
                {
                    b.Property<int>("Age_Group_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Age_Group_id"));

                    b.Property<string>("Age_Group")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Age_Group_id");

                    b.ToTable("AgeGroup");
                });

            modelBuilder.Entity("Computer_Seekho.Batch", b =>
                {
                    b.Property<int>("BatchId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BatchId"));

                    b.Property<string>("BatchLogo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BatchName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("BatchYear")
                        .HasColumnType("datetime2");

                    b.Property<int>("CourseId")
                        .HasColumnType("int");

                    b.Property<string>("CoverPhoto")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("FinalPresentationDate")
                        .HasColumnType("datetime2");

                    b.Property<decimal>("IsActive")
                        .HasColumnType("decimal(20,0)");

                    b.Property<DateTime?>("StartDate")
                        .HasColumnType("datetime2");

                    b.HasKey("BatchId");

                    b.ToTable("Batches");
                });

            modelBuilder.Entity("Computer_Seekho.BatchInfo", b =>
                {
                    b.Property<int>("Batchinfo_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Batchinfo_Id"));

                    b.Property<int>("Batch_Id")
                        .HasColumnType("int");

                    b.Property<int>("Staff_Id")
                        .HasColumnType("int");

                    b.Property<string>("Subject")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Batchinfo_Id");

                    b.ToTable("BatchInfo");
                });

            modelBuilder.Entity("Computer_Seekho.CampusLife", b =>
                {
                    b.Property<int>("CampusLifeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CampusLifeId"));

                    b.Property<int?>("BatchId")
                        .HasColumnType("int");

                    b.Property<string>("Photo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("StaffId")
                        .HasColumnType("int");

                    b.Property<string>("Video")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CampusLifeId");

                    b.ToTable("CampusLife");
                });

            modelBuilder.Entity("Computer_Seekho.Closure", b =>
                {
                    b.Property<int>("Closure_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Closure_Id"));

                    b.Property<string>("Clousre_Reason")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Closure_Id");

                    b.ToTable("Closure");
                });

            modelBuilder.Entity("Computer_Seekho.Company", b =>
                {
                    b.Property<int>("CompanyId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CompanyId"));

                    b.Property<string>("CompanyName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Location")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Logo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("TotalPlacement")
                        .HasColumnType("int");

                    b.HasKey("CompanyId");

                    b.ToTable("Company");
                });

            modelBuilder.Entity("Computer_Seekho.Course", b =>
                {
                    b.Property<int>("Course_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Course_Id"));

                    b.Property<int>("Age_Group_ID")
                        .HasColumnType("int");

                    b.Property<int>("Capacity")
                        .HasColumnType("int");

                    b.Property<string>("Course_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Duration_Id")
                        .HasColumnType("int");

                    b.Property<decimal?>("Fees")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Photo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Qualification_id")
                        .HasColumnType("int");

                    b.Property<string>("Syllabus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Video")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("isActive")
                        .HasColumnType("bit");

                    b.HasKey("Course_Id");

                    b.ToTable("Course");
                });

            modelBuilder.Entity("Computer_Seekho.CourseDuration", b =>
                {
                    b.Property<int>("Duration_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Duration_id"));

                    b.Property<string>("Duration")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Duration_id");

                    b.ToTable("CourseDuration");
                });

            modelBuilder.Entity("Computer_Seekho.Designation", b =>
                {
                    b.Property<int>("DesignationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DesignationId"));

                    b.Property<string>("DesignationName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("DesignationId");

                    b.ToTable("Designation");
                });

            modelBuilder.Entity("Computer_Seekho.Enquiry", b =>
                {
                    b.Property<int>("Enquiry_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Enquiry_Id"));

                    b.Property<int?>("Closure_Id")
                        .HasColumnType("int");

                    b.Property<string>("Contact_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Course_Id")
                        .HasColumnType("int");

                    b.Property<DateTime?>("Date_Of_Birth")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EnquirerName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Enquirer_Query")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("Enquiry_Date")
                        .HasColumnType("datetime2");

                    b.Property<int?>("Enquiry_Source_id")
                        .HasColumnType("int");

                    b.Property<int?>("Location_id")
                        .HasColumnType("int");

                    b.Property<DateTime?>("Next_followup_Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Other_Closure_reason")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Qualification")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Staff")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Student_Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Enquiry_Id");

                    b.ToTable("Enquiry");
                });

            modelBuilder.Entity("Computer_Seekho.EnquirySource", b =>
                {
                    b.Property<int>("EnquirySourceId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("EnquirySourceId"));

                    b.Property<string>("Enquiry_Source")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("EnquirySourceId");

                    b.ToTable("Enquirysource");
                });

            modelBuilder.Entity("Computer_Seekho.FollowUp", b =>
                {
                    b.Property<int?>("FollowUpId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int?>("FollowUpId"));

                    b.Property<int?>("Attempts")
                        .HasColumnType("int");

                    b.Property<int?>("ClosureId")
                        .HasColumnType("int");

                    b.Property<int?>("EnquiryId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("FollowUpDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("FollowUpMessage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Staff")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("FollowUpId");

                    b.ToTable("Followup");
                });

            modelBuilder.Entity("Computer_Seekho.Location", b =>
                {
                    b.Property<int>("LocationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("LocationId"));

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Country")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Landmark")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pincode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("LocationId");

                    b.ToTable("Location");
                });

            modelBuilder.Entity("Computer_Seekho.Notification", b =>
                {
                    b.Property<int>("NotificationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("NotificationId"));

                    b.Property<DateTime>("ArrivingDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("ExpiryDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("NotificationMessage")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("NotificationId");

                    b.ToTable("Notification");
                });

            modelBuilder.Entity("Computer_Seekho.Payment", b =>
                {
                    b.Property<int>("Payment_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Payment_Id"));

                    b.Property<double?>("Amount")
                        .HasColumnType("float");

                    b.Property<int?>("Batch_Id")
                        .HasColumnType("int");

                    b.Property<DateTime?>("Date")
                        .HasColumnType("datetime2");

                    b.Property<int?>("PaymentTypeId")
                        .HasColumnType("int");

                    b.Property<int?>("StudentId")
                        .HasColumnType("int");

                    b.Property<string>("Transaction_Id")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Payment_Id");

                    b.ToTable("Payment");
                });

            modelBuilder.Entity("Computer_Seekho.Paymentinfo", b =>
                {
                    b.Property<int>("Payment_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Payment_Id"));

                    b.Property<string>("Payment_method_Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Payment_Id");

                    b.ToTable("Paymentinfo");
                });

            modelBuilder.Entity("Computer_Seekho.PlacementData", b =>
                {
                    b.Property<int>("Placementid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Placementid"));

                    b.Property<int?>("Batchid")
                        .HasColumnType("int");

                    b.Property<int?>("Companyid")
                        .HasColumnType("int");

                    b.Property<string>("Designation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Photourl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Placementvacancyid")
                        .HasColumnType("int");

                    b.Property<string>("Prnid")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Placementid");

                    b.ToTable("PlacementData");
                });

            modelBuilder.Entity("Computer_Seekho.PlacementVacancy", b =>
                {
                    b.Property<int>("PlacementVacancyId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PlacementVacancyId"));

                    b.Property<int?>("CompanyId")
                        .HasColumnType("int");

                    b.Property<string>("Location")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Vacancy")
                        .HasColumnType("int");

                    b.HasKey("PlacementVacancyId");

                    b.ToTable("PlacementVacancy");
                });

            modelBuilder.Entity("Computer_Seekho.PrnGenerator", b =>
                {
                    b.Property<int>("pid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("pid"));

                    b.Property<int>("Course_id")
                        .HasColumnType("int");

                    b.Property<string>("Prn_id")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("StudentId")
                        .HasColumnType("int");

                    b.HasKey("pid");

                    b.HasIndex("StudentId")
                        .IsUnique();

                    b.ToTable("Prn");
                });

            modelBuilder.Entity("Computer_Seekho.Qualification", b =>
                {
                    b.Property<int>("Qualification_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Qualification_id"));

                    b.Property<string>("QualificationName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Qualification_id");

                    b.ToTable("Qualification");
                });

            modelBuilder.Entity("Computer_Seekho.Role", b =>
                {
                    b.Property<int>("Role_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Role_Id"));

                    b.Property<string>("RoleName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Role_Id");

                    b.ToTable("Role");
                });

            modelBuilder.Entity("Computer_Seekho.Staff", b =>
                {
                    b.Property<int>("StaffId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("StaffId"));

                    b.Property<string>("ContactNo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("DesignationId")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Experience")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("JoiningDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("LocationId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Photo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("QualificationId")
                        .HasColumnType("int");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("StaffId");

                    b.ToTable("Staff");
                });

            modelBuilder.Entity("Computer_Seekho.Student", b =>
                {
                    b.Property<int>("student_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("student_id"));

                    b.Property<int?>("batch_id")
                        .HasColumnType("int");

                    b.Property<string>("contact_no")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("course_id")
                        .HasColumnType("int");

                    b.Property<DateTime?>("date_of_birth")
                        .HasColumnType("datetime2");

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("enquiry_id")
                        .HasColumnType("int");

                    b.Property<int?>("fees_paid")
                        .HasColumnType("int");

                    b.Property<string>("gender")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("location_id")
                        .HasColumnType("int");

                    b.Property<int?>("payment_id")
                        .HasColumnType("int");

                    b.Property<string>("photo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("qualification_id")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("registration_date")
                        .HasColumnType("datetime2");

                    b.Property<string>("student_name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("total_fees")
                        .HasColumnType("int");

                    b.HasKey("student_id");

                    b.ToTable("Student");
                });

            modelBuilder.Entity("Computer_Seekho.PrnGenerator", b =>
                {
                    b.HasOne("Computer_Seekho.Student", "Student")
                        .WithOne("PRNGenerator")
                        .HasForeignKey("Computer_Seekho.PrnGenerator", "StudentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Student");
                });

            modelBuilder.Entity("Computer_Seekho.Student", b =>
                {
                    b.Navigation("PRNGenerator")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
