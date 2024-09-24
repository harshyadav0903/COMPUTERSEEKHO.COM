
import { useState, useEffect } from "react"
import Qualification from "./Qualification";

export default function ShowStaff() {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8084/api/staff/ListAll")
            .then(res => res.json())
            .then((result) => { console.log(result); setStaff(result); });
    }, []);
    return (
        <div>
            <h2>Staff Data</h2>
            <table border={5}>
                <thead>
                    <tr>
                    <th>staff_Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Designation_id</th>
                        <th>Qualification_id</th>
                        <th>Experience</th>
                        <th>Contact_No</th>

                    </tr>
                </thead>
                <tbody>
                    {staff.map(emp => (
                        <tr key={emp.staff_Id}>
                            <td>{emp.staff_Id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.designation_id}</td>
                            <Qualification qualification_id={emp.qualification_id} />
                            <td>{emp.experience}</td>
                            <td>{emp.contact_No}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
