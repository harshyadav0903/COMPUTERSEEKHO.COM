import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ShowBatchWisePlacement.css';

export default function ShowBatchWisePlacement() {
  const { batchId } = useParams();
  const [batchplacement, setBatchPlacement] = useState([]);
  const [stud, setStudentInfo] = useState([]);
  const [studentNames, setStudentNames] = useState([]);
  const [companyDesignation, setCompanyDesignation] = useState([]);
  const [company, setCompany] = useState([]);

  const [newstud, setStudent] = useState([]);

  // For batchwise placement data from placementData table
  useEffect(() => {
    fetch(`http://localhost:8084/api/placementdata/bybatch/${batchId}`)
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        setBatchPlacement(result);

        const placementInfo = result.map(entry => ({
          prn: entry.prnid,
          designation: entry.designation
        }));
        setCompanyDesignation(placementInfo);
      });
  }, [batchId]);

  // For student data from prngenerator
  useEffect(() => {
    fetch("http://localhost:8084/api/prn/allprn")
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        setStudentInfo(result);

      });
  }, [companyDesignation]);

  //for Company data

  //for company details
  useEffect(() => {
    fetch(`http://localhost:8084/api/Company/ListAll`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCompany(data);
      });
  }, []);

  const companyArray = batchplacement.map(entry => {
    const matchingCompany = company.find(comp => comp.company_Id === entry.companyid);
    return {
      companyname: matchingCompany ? matchingCompany.company_Name : ""
    };
  });

  console.log(companyArray);





  // gives student name and prn which placementData table
  const prnStudentDesignationArray = batchplacement.map(entry => {
    const matchingStudent = stud.find(student => student.prn_Id === entry.prnid);
    return {
      prn: entry.prnid,
      designation: entry.designation,
      photourl:entry.photourl,
      studentName: matchingStudent ? matchingStudent.student.student_name : null
    };
  });

  console.log(prnStudentDesignationArray);



  return (
    <div>
    <form>
      <h1 align="center">Placed Students</h1>
      <div className="student-card-container">
        {prnStudentDesignationArray.map((entry, index) => (
          <div key={index} className="student-card">
            <img
              src={`${entry.photourl}`} // Assuming photoUrl is the property name in batchplacement
              alt={`Student Photo ${index + 1}`}
            />

            <div className="student-info">
              <label htmlFor={`studentName${index}`}>Name:</label>
              <input
                type="text"
                id={`studentName${index}`}
                name={`studentName${index}`}
                value={entry.studentName || ""}
                disabled={true}
              />

              <label htmlFor={`designation${index}`}>Designation:</label>
              <input
                type="text"
                id={`designation${index}`}
                name={`designation${index}`}
                value={entry.designation || ""}
                disabled={true}
              />

              <label htmlFor={`company${index}`}>Company:</label>
              <input
                type="text"
                id={`company${index}`}
                name={`company${index}`}
                value={companyArray[index] ? companyArray[index].companyname : ""}
                disabled={true}
              />
            </div>
          </div>
        ))}
      </div>
    </form>
  </div>
     

  );

}
