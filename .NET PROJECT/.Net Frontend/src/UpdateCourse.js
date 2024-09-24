import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
function UpdateCourse() {
    const [course, setCourse] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("https://localhost:7020/api/Course/" + id)
            .then(res => res.json())
            .then((result) => {
                setCourse(result);
            }
            ).catch((e) => console.log(e));
    }, {});
    const handleChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;
      
        if (name === "isActive") {
          value = value === "true" ? true : false;
        }
      
        setCourse(values => ({ ...values, [name]: value }));
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        let demo = JSON.stringify(course);
        console.log(JSON.parse(demo));
        fetch("https://localhost:7020/api/Course/"+id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
       
        navigate('/Maintain');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Id:</label>
            <input
                type="number"
                name="course_Id"
                value={course.course_Id ?? ""}
                disabled={true}
                onChange={handleChange}
            />
            <br />
            <label>courseName:</label>
            <input
                type="text"
                name="course_Name"
                value={course.course_Name ?? ""}
                onChange={handleChange}
            />
            <br />

            <label>description:</label>
            <input
                type="text"
                name="description"
                value={course.description ?? ""}
                onChange={handleChange}
            />
            <br />

            <label>syllabus:</label>
            <input
                type="text"
                name="syllabus"
                value={course.syllabus ?? ""}
                onChange={handleChange}
            />
            <br />

            <label>is_active:</label>
            <select
                name="isActive"
                value={course.isActive} 
                onChange={handleChange}
            >
                <option value= {true} >Active</option>
                <option value={false}>Inactive</option>
            </select>
            <br />

            <label>Capacity:</label>
            <input
                type="number"
                name="capacity"
                value={course.capacity ?? ""}
                onChange={handleChange}
            />
            <br />

            
            <label>Fees:</label>
            <input
                type="number"
                name="fees"
                value={course.fees ?? ""}
                onChange={handleChange}
            />
            <br />

            <br />
            <input type="submit" />
        </form>
    );
} export default UpdateCourse;