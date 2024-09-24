import { useState, useEffect } from "react";
import CreatePlacementRecord from "./CreatePlacementRecord";
import { Link } from "react-router-dom";


export default function PlacementData() {
    const [comp, setcompStudentData] = useState([]);
    const [pdata, setpdata] = useState([]);

  //for all prn and sored studentID

    useEffect(() => {
        fetch("http://localhost:8084/api/prn/allprn")
            .then(res => res.json())
            .then(data => {
                // to get all the required data and stored it in a object and sorted that object to show the data on the display
                const transformedData = data.map(item => ({
                    studentId: item.student.student_id,
                    studentName: item.student.student_name,
                    prn: item.prn_Id,
                    photo: item.student.photo,
                    batchId: item.student.batch_id,
                }));
    
                // Sort the data based on student ID
                const sortedData = transformedData.sort((a, b) => a.studentId - b.studentId);
                setcompStudentData(sortedData);
            });
    }, []);
    

    //for companydata and set drop down for this
    useEffect(()=>{
        fetch("http://localhost:8084/api/Company/ListAll")
        .then(res=>res.json())
        .then(data=>{
            const compdata= data.map(item=>({
                companyId:item.company_Id
                
            }))
            setpdata(compdata)
            console.log(pdata);
        })
    },[])



//to send prn,batch photo to the backend
const handlesetpdata=(event)=>{

    fetch("http://localhost:8084/api/placementdata/Listall", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pdata,)
    })
        .then((data) => {
            console.log(data);
            alert("Inserted");
            // navigate('/home');
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    return (
        <div>
        <h2>PlacementData Details</h2>
    
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
                <tr>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Student ID</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>PRN</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>BatchId</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Photo</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Status</th>
                </tr>
            </thead>
            <tbody>
                {comp.map(student => (
                    <tr key={student.studentId}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{student.studentId}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{student.prn}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{student.studentName}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{student.batchId}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{student.photo}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>
                            <Link to={`/createplacementrecord/${student.prn}`}>Update</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    
    )

}