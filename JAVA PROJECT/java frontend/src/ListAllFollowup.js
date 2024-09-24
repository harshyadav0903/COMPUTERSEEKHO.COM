import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import EnqById from "./EnqById";
import StaffById from "./StaffById";

export default function ListAllFUP() {
    const [followUP, setFollowUp] = useState([]);

    const currentDate = new Date();

    useEffect(() => {
        fetch("http://localhost:8084/api/follow_up/ListAll")
            .then(res => res.json())
            .then(result => { setFollowUp(result); });
        console.log(followUP)
    }, []);

    return (<div>
        <h2>Follow_up</h2>
        <table border={5}>
            <thead>
                <tr>
                    <th>enquiry_Id</th>
                    <th>Enquirer Name</th>
                    <th>Student Name</th>
                    <th>Phone</th>
                    <th>Course</th>
                    <th>Follow-up date</th>
                    <th>Staff Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {followUP.map(fol => (
                    <tr key={fol.followUp_id}>
                        <td>{fol.enquiry_Id}</td>
                        <EnqById enquiry_Id={fol.enquiry_Id} />
                        <td>{fol.followUp_date}</td>
                        <StaffById staff_id={fol.staff_id} />
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>)
}
