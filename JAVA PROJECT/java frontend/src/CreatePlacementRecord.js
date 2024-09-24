import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CreatePlacementRecord() {
    const { prn_Id } = useParams();
    const [pdata, setpdata] = useState({}); 
    const[record,setRecord]=useState([ ]);
    const[company,setCompany]=useState([]);
    const[vacancy,setVacancy]=useState([]);
    const navigate=useNavigate();

    const handleOnChange=(event)=>{
        setRecord((prev) => ({ ...prev, [event.target.name]: event.target.value }));
        console.log(record);
    }

    const handleSendRecord = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(record));
        console.log(vacancy)
        alert(JSON.stringify(vacancy));

        const sendData = {
            
            ...record,
            batchid: pdata.BatchId,
            prnid: pdata.prn,
            status:record.status,
            designation:record.designation,
            company_Id:company.company_Id,
            photourl:pdata.photo,
            placementvacancyid:vacancy.placementVacancy_Id,
        };
        
        fetch("http://localhost:8084/api/placementdata/createPlacementData", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendData)
        })
          .then((data) => {
            console.log(data);
            alert("Inserted");
            navigate('/admin');
          })
          .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
          });
      }


      
    useEffect(() => {
        fetch(`http://localhost:8084/api/prn/get/${prn_Id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const transformedData = data.map((item) => ({
                    studentId: item.student.student_id,
                    studentName: item.student.student_name,
                    prn: item.prn_Id,
                    photo: item.student.photo,
                    BatchId: item.student.batch_id,
                   
                }));

                setpdata(transformedData[0]);
            });
    }, [prn_Id]);



//for company details
useEffect(() => {
    fetch(`http://localhost:8084/api/Company/ListAll`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setCompany(data);
        });
}, []);


//for placementVacancy details
useEffect(() => {
    fetch(`http://localhost:8084/api/vacancy/getvacancy`)
        .then((res) => res.json())
        .then((data) => setVacancy(data));
}, []);



    return (
        <div>
            <form onSubmit={handleSendRecord}>
                <label htmlFor="studentId">StudentId</label>
                <input
                    type="text"
                    name="studentid"
                    value={pdata.studentId}
                    disabled={true}
                />
                <br />

                <label htmlFor="studentname">StudentName</label>
                <input
                    type="text"
                    name="studentName"
                    value={pdata.studentName ?? ""}
                    disabled={true}
                    onChange={handleOnChange}

                /><br></br>

                <label htmlFor="BatchId">BatchId</label>
                <input
                    type="text"
                    name="batchid"
                    value={pdata.BatchId ?? ""}
                    disabled={true}
                    onChange={handleOnChange}
                />
                <br />

                <label htmlFor="PRN">PRNID</label>
                <input
                    type="text"
                    name="prnid"
                    defaultValue={prn_Id}
                   disabled={true}
                    onChange={handleOnChange}
                />
                <br />

                <label htmlFor="CompanyId">CompanyID:</label>
                <select name="companyid" onChange={handleOnChange}>
                <option> selectOption</option>
                {company.map(com => (
                <option value={com.company_Id}> {com.company_Name}</option>
                ))}
                </select><br></br>

                <label htmlFor="Status">Status</label>
                <select name="status" value={pdata.status} onChange={handleOnChange} >
                    <option value="unplaced">Unplaced</option>
                    <option value="placed">Placed</option>
                    
                </select>
                <br />

                <label htmlFor="Designation">Designation</label>
                <input type="text" name="designation" onChange={handleOnChange}/><br></br>
                
                
                <label htmlFor="submit">Submit</label>
                <button type="submit">Update</button>

                <br />
            </form>
        </div>
    );
}

export default CreatePlacementRecord;






// const { prn_Id } = useParams();
// const CreatePlacementRecord = ({ prn_Id }) => {
//     alert(prn_Id)
//   const [pdata, setpdata] = useState({}); // Initialize as an object
//   useEffect(() => {
//     fetch(`http://localhost:8086/api/prn/get/${prn_Id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         const transformedData = data.map((item) => ({
//           studentId: item.student.student_id,
//           studentName: item.student.student_name,
//           prn: item.prn_Id,
//           photo: item.student.photo,
//           BatchId: item.student.batch_id,
//         }));

//         setpdata(transformedData[0]); 
//       });
//   }, [prn_Id]); 

//   return (
//     <div>
//       <form>
//         <label htmlFor="studentId">StudentId</label>
//         <input
//           type="text"
//           name="studentid"
//           value={pdata.studentId ?? ""}
//           disabled={true}
//         />
//         <br />

//         <label htmlFor="studentname">StudentName</label>
//         <input
//           type="text"
//           name="studentName"
//           value={pdata.studentName ?? ""}
//           disabled={true}
//         />

//         <label htmlFor="BatchId">BatchId</label>
//         <input
//           type="text"
//           name="batch_id"
//           value={pdata.BatchId ?? ""}
//           disabled={true}
//         />
//         <br></br>

//         <label htmlFor="Status">Status</label>
//         <input type="text" name="status" />
//         <br></br>

//         <label htmlFor="Designation">designation</label>
//         <input type="text" name="designation" />
//         <br></br>
        
//       </form>
//     </div>
//   );
// };

// export default CreatePlacementRecord;
