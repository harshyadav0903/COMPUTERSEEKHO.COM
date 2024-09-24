import React from 'react';

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
function StudentUp() {
    const [student, setstudent] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:7020/api/Student/" + id)
            .then(res => res.json())
            .then((result) => {
                setstudent(result.value);
                console.log(result);

            }
            ).catch((e) => console.log(e));
    },[id]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setstudent(values => ({ ...values, [name]: value }))
        // console.log(student);
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(student);
        console.log(JSON.parse(demo));
        fetch("http://localhost:7020/api/Student/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
            .catch(error => console.log('Error:', error));
        alert("Student updated successfully!");
        event.preventDefault();
        navigate('/ListAllStudents');

    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Student Name:</label>
            <input
                type="string"
                name="student_name"
                value={student.student_name ?? ""}
                onChange={handleChange}
            />
            <br /><label>Email:</label>
            <input
                type="email"
                name="email"
                value={student.email??""}
                onChange={handleChange}
            />
            <br /><label>Batch Id:</label>
            <input
                type="number"
                name="batch_id"
                value={student.batch_id ??""}
                onChange={handleChange}
            />
            <br /><label>Enquiry Id:</label>
            <input
                type="number"
                name="enquiry_id"
                value={student.enquiry_id??""}
                onChange={handleChange}
            />
            <br /><label>Fees Paid:</label>
            <input
                type="number"
                name="fees_paid"
                value={student.fees_paid??""}
                onChange={handleChange}
            />
            <br /><label>Location Id:</label>
            <input
                type="number"
                name="location_id"
                value={student.location_id??""}
                onChange={handleChange}
            />
            <br /><label>Contact No:</label>
            <input
                type="number"
                name="contact_no"
                value={student.contact_no??""}
                onChange={handleChange}
            />
            <br /><label>Date of Birth:</label>
            <input
                type="date"
                name="date_of_birth"
                value={student.date_of_birth??""}
                onChange={handleChange}
            />
            <br /><label>Course Id:</label>
            <input
                type="number"
                name="course_id"
                value={student.course_id??""}
                onChange={handleChange}
            />
            <br /><label>Total Fees:</label>
            <input
                type="number"
                name="total_fees"
                value={student.total_fees??""}
                onChange={handleChange}
            />
            <br /><label>Payment Id:</label>
            <input
                type="number"
                name="payment_id"
                value={student.payment_id??""}
                onChange={handleChange}
            />
            <br /><label>Gender:</label>
            <input
                type="String"
                name="gender"
                value={student.gender??""}
                onChange={handleChange}
            />
            <br /><label>Photo:</label>
            <input
                type="text"  
                name="photo"
                value={student.photo??""}
                onChange={handleChange}
            />
            <br /><label>Qualification Id:</label>
            <input
                type="number"
                name="qualification_id"
                value={student.qualification_id ?? ""}
                onChange={handleChange}
            />
            <br /><label>Registration Date:</label>
            <input
                type="date"
                name="registration_date"
                value={student.registration_date??""}
                onChange={handleChange}
            />
            <br></br>
            <input type="submit" />
        </form>
    );
} export default StudentUp;
