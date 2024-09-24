using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface IEnquirySourceRepository
    {
        Task<ActionResult<EnquirySource>?> GetEnquirySource(int EnquirySourceId);
        Task<ActionResult<IEnumerable<EnquirySource>>> GetAllEnquirySource();
        Task<ActionResult<EnquirySource>> Add(EnquirySource enquirySource);
        Task<EnquirySource> Update(int EnquirySourceId, EnquirySource enquirySourceChanges);
        Task<EnquirySource> Delete(int EnquirySourceId);
    }
}
