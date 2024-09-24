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
    fetch(`https://localhost:7020/api/PlacementData/by-batch/${batchId}`)
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        alert("PlacementData:", JSON.stringify(result))  //done and clear
        setBatchPlacement(result);

        const placementInfo = result.map(entry => ({
          prn: entry.prnid,
          designation: entry.designation
        }));
        //alert(JSON.stringify(placementInfo)); ---clear
        setCompanyDesignation(placementInfo);
      });
  }, [batchId]);

  // For student data from prngenerator
  useEffect(() => {
    fetch("https://localhost:7020/api/Prn/get-all-students-with-prn")
      .then(res => res.json())
      .then((result) => {
        alert(JSON.stringify(result));


        if (result && result["$values"]) {
          const transformedData = result["$values"].map(item => ({
            studentId: item.student_id,
            studentName: item.student_name,
            prn: item.PRNGenerator?.Prn_id || '', // Ensures that PRN_Generator in not null
            photo: item.Photo,
            batchId: item.BatchId,
          }));
          setStudentInfo(transformedData)
          console.log(transformedData);

        }

      });
  }, [companyDesignation]);

  console.log(stud);
  //for Company data

  //for company details
  useEffect(() => {
    fetch(`https://localhost:7020/api/Company`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCompany(data);
      });
  }, []);


  const companyArray = batchplacement.map(entry => {
    const matchingCompany = company.find(comp => comp.companyId === entry.companyid);
    return {
      companyname: matchingCompany ? matchingCompany.companyName : "Loading"
    };
  });

  console.log(companyArray);

  // gives student name and prn which placementData table
  const prnStudentDesignationArray = batchplacement.map(entry => {
    const matchingStudent = stud?.find(student => student.prn === entry.prnid);
    return {
      prn: entry.prnid,
      designation: entry.designation,
      photourl: entry.photourl,
      studentName: matchingStudent ? matchingStudent.studentName : null
    };
  });

  console.log("PRNARRAY:", prnStudentDesignationArray);



  return (
    <div>
      <form>
        <h1 align="center">Placed Students</h1>
        <div className="student-card-container">
          {prnStudentDesignationArray.map((entry, index) => (
            <div key={index} className="student-card">
              <img
                src={`${entry.photourl}`} //  photoUrl in batchplacement
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
            </div >
          ))
          }
        </div >
      </form >
    </div >


  );

}
