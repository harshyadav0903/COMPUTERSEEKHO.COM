import { useState, useEffect } from "react";
import CreatePlacementRecord from "./CreatePlacementRecord";
import { Link } from "react-router-dom";


export default function PlacementData() {
    const [comp, setcompStudentData] = useState([]);
    const [pdata, setpdata] = useState([]);


    useEffect(() => {
        fetch("https://localhost:7020/api/Prn/get-all-students-with-prn")
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

                    // Sort the data based on student ID
                    const sortedData = transformedData.sort((a, b) => a.studentId - b.studentId);
                    setcompStudentData(sortedData);
                }
            });
    }, []);


    //for companydata and set drop down for this
    useEffect(() => {
        fetch("https://localhost:7020/api/Company")
            .then(res => res.json())
            .then(data => {
                const compdata = data.map(item => ({
                    companyId: item.companyId

                }))
                setpdata(compdata)
                console.log(pdata);
            })
    }, [])



    //to send prn,batch photo to the backend
    const handlesetpdata = (event) => {

        fetch("https://localhost:7020/api/PlacementData", {
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

            <table>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>PRN</th>
                        <th>Name</th>
                        <th>BatchId</th>
                        <th>Photo</th>
                        <th>stetus</th>
                    </tr>
                </thead>
                <tbody>
                    {comp.map(student => (
                        <tr key={student.studentId}>
                            <td>{student.studentId}</td>
                            <td>{student.prn}</td>
                            <td>{student.studentName}</td>
                            <td>{student.batchId}</td>
                            <td>{student.photo}</td>
                            <td>
                                <Link to={`/createplacementrecord/${student.prn}`}>Update</Link>

                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )

}
