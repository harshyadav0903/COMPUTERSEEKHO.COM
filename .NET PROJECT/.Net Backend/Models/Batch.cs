namespace Computer_Seekho
{
    public class Batch
    {
        public int BatchId { get; set; }

        public string? BatchLogo { get; set; }

        public string? BatchName { get; set; }

        public DateTime? BatchYear { get; set; }

        public int CourseId { get; set; }

        public string? CoverPhoto { get; set; }

        public DateTime? EndDate { get; set; }

        public DateTime? FinalPresentationDate { get; set; }

        public ulong IsActive { get; set; }

        public DateTime? StartDate { get; set; }
    }
}
