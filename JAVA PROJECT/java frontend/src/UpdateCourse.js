import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
function UpdateCourse() {
    const [course, setCourse] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8084/api/course/" + id)
            .then(res => res.json())
            .then((result) => {
                setCourse(result);
            }
            ).catch((e) => console.log(e));
    }, []);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCourse(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(course);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8084/api/course/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate('/Maintain');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Id:</label>
            <input
                type="number"
                name="courseId"
                value={course.courseId ?? ""}
                disabled={true}
                onChange={handleChange}
            />
            <br />
            <label>courseName:</label>
            <input
                type="text"
                name="courseName"
                value={course.courseName ?? ""}
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
                name="is_active"
                value={course.is_active} // Convert the boolean value to a string
                onChange={handleChange}
            >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
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

            {/* <label htmlFor="role">course role:</label>
            <select name="role" onChange={ handleChange}>
                <option>Select</option>
                {course.map(emp => (
                    <option value={emp.role_id}>{emp.role}</option>
                ))}
            </select>
            <br />

              <label>Department:</label>
              <label htmlFor="designation">course designation:</label>
            <select name="designation_id" onChange={ handleChange}>
                <option>Select</option>
                {course.map(emp => (
                    <option value={emp.designation_id}>{emp.designation}</option>
                ))}
            </select> */}
            <br />
            <input type="submit" />
        </form>
    );
} export default UpdateCourse;