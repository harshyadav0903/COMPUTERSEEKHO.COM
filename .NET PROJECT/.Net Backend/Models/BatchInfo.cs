using System.ComponentModel.DataAnnotations;

namespace Computer_Seekho
{
    public class BatchInfo
    {
        [Key]
        public int Batchinfo_Id { get; set; }
        public int Batch_Id { get; set; }
        public int Staff_Id { get; set; }
        public string? Subject { get; set; }
    }
}
