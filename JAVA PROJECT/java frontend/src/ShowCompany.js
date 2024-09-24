import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ShowCompany() {
  const [scomp, setsComp] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8084/api/Company/ListAll")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setsComp(result);
      });
  }, []);

  const handleDelete = (companyId) => {
    fetch("http://localhost:8084/api/Company/delete/"+companyId, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error deleting company:", error));
  
    console.log(`Delete company with ID: ${companyId}`);
  };
  

  const handleUpdate = (companyId) => 
  {
    fetch(`http://localhost:8084/api/Company/update/${companyId}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error deleting company:", error));
  
    console.log(`Delete company with ID: ${companyId}`);

    
    
  };

  return (
    <div>
      <h2>Company Details</h2>
      <table>
        <thead>
          <tr>
            <th>Company ID</th>
            <th>Location</th>
            <th>Logo</th>
            <th>Company Name</th>
            <th>Total Placement</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {scomp.map((company) => (
            <tr key={company.company_Id}>
              <td>{company.company_Id}</td>
              <td>{company.location}</td>
              <td>{company.logo}</td>
              <td>{company.company_Name}</td>
              <td>{company.total_Placement}</td>
              <td>
                <button onClick={() => handleUpdate(company.company_Id)}>
                  Update
                </button>
                <button onClick={() => handleDelete(company.company_Id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/company">Add New Company</Link>
    </div>
  );
}