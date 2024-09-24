import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CreatePlacementRecord() {
    const { prn_Id } = useParams();
    const [pdata, setpdata] = useState({}); 
    const[record,setRecord]=useState([ ]);
    const[company,setCompany]=useState([]);
    const[vacancy,setVacancy]=useState([]);


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
            batchid: pdata.batchId,
            prnid: pdata.prn,
            status:record.status,
            designation:record.designation,
            Companyid:company.company_Id,
            photourl:pdata.photo,
            placementvacancyid:vacancy.placementVacancy_Id,
        };
        
        fetch("https://localhost:7020/api/PlacementData", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendData)
        })
          .then((data) => {
            console.log(data);
            alert("Inserted");
            // navigate('/pdata');
          })
          .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
          });
      }


      
    // fetch the student data based on the prn generator-
    useEffect(() => {
        fetch(`https://localhost:7020/api/Prn/get-students-by-prn/${prn_Id}`)
            .then(res => res.json())
            .then(data => {
                // json data has the "$values" property
                if (data && data["$values"]) {
                    // Map and transform the data
                    const transformedData = data["$values"].map(item => ({
                        studentId: item.student_id,
                        studentName: item.student_name,
                        prn: item.PRNGenerator?.Prn_id || '', // Ensure that PRN_Generator is not null
                        photo: item.photo,
                        batchId: item.batch_id,
                    }));

                    setpdata(transformedData[0]);
                }
            });
    }, []);



//for company details
useEffect(() => {
    fetch(`https://localhost:7020/api/Company`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setCompany(data);
        });
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
                    name="batchId"
                    value={pdata.batchId ?? ""}
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
                <select name="companyId" onChange={handleOnChange}>
                <option> selectOption</option>
                {company.map(com => (
                <option value={com.companyId}> {com.companyName}</option>
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
                <button type="submit">Button</button>

                <br />
            </form>
        </div>
    );
}

export default CreatePlacementRecord;

