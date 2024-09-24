using Microsoft.AspNetCore.Mvc;

namespace Computer_Seekho
{
    public interface IEnquiryRepository
    {
        Task<ActionResult<Enquiry>?> GetEnquiry(int Enquiry_Id);
        Task<ActionResult<IEnumerable<Enquiry>>> GetAllEnquiry();
        Task<ActionResult<Enquiry>> Add(Enquiry Enquiry);
        Task<Enquiry> Update(int Enquiry_Id, Enquiry EnquiryChanges);
        Task<Enquiry> Delete(int Enquiry_Id);
    }
}
