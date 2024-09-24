
import { useState, useEffect } from "react"
import Qualification from "./Qualification";
import Designation from "./Designation";
import './Staff.css';

export default function ShowStaff() {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7020/api/Staff")
            .then(res => res.json())
            .then((result) => { console.log(result); setStaff(result); });
    }, []);
    return (
        <div>
            <h2>Staff Data</h2>
            <table>
                <thead>
                    <tr>
                    <th>staff_Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Designation</th>
                        <th>Qualification</th>
                        <th>Experience</th>
                        <th>Contact_No</th>

                    </tr>
                </thead>
                <tbody>
                    {staff.map(emp => (
                        <tr key={emp.staffId}>
                            <td>{emp.staffId}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <Designation designationId={emp.designationId} />
                            <Qualification qualification_id={emp.qualificationId} />
                            <td>{emp.experience}</td>
                            <td>{emp.contactNo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
