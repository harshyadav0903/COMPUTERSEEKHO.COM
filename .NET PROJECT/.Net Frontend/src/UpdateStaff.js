import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
function UpdateStaff() {
    const [staff, setStaff] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("https://localhost:7020/api/Staff/"+id)
            .then(res => res.json())
            .then((result) => {
                setStaff(result);
            }
            ).catch((e) => console.log(e));
    }, []);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setStaff(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(staff);
        console.log(JSON.parse(demo));
        fetch("https://localhost:7020/api/Staff/"+ id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate('/');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Id:</label>
            <input
                type="text"
                name="staff_Id"
                value={staff.staff_Id ?? ""}
                disabled={true}
                onChange={handleChange}
            />
            <br />          
              <label>name:</label>
            <input
                type="text"
                name="name"
                value={staff.name ?? ""}
                onChange={handleChange}
            />
            <br />  

            <input
                type="text"
                name="contact_No"
                value={staff.contact_No ?? ""}
                onChange={handleChange}
            />
            <br />  

            {/* <label htmlFor="role">Staff role:</label>
            <select name="role" onChange={ handleChange}>
                <option>Select</option>
                {staff.map(emp => (
                    <option value={emp.role_id}>{emp.role}</option>
                ))}
            </select>
            <br />

              <label>Department:</label>
              <label htmlFor="designation">Staff designation:</label>
            <select name="designation_id" onChange={ handleChange}>
                <option>Select</option>
                {staff.map(emp => (
                    <option value={emp.designation_id}>{emp.designation}</option>
                ))}
            </select> */}
            <br />
            <input type="submit" />
        </form>
    );
} export default UpdateStaff;