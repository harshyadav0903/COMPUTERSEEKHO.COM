import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
export default function CreateCourse() {
    const [course, setcourse] = useState({});
    const [duration, setDuration] = useState([]);
    const [qualification, setQualification] = useState([]);
    const [agegroup, setAgeGroup] = useState([])

    let navigate = useNavigate();

    useEffect(() => {
        fetch("https://localhost:7020/api/Course")
            .then(res => res.json())
            .then((result) => { console.log(result); setDuration((result)); });
    }, []);


    useEffect(() => {
        fetch("https://localhost:7020/api/Course")
            .then(res => res.json())
            .then((result) => { console.log(result); setQualification(result); });
    }, []);



    useEffect(() => {
        fetch("https://localhost:7020/api/Course")
            .then(res => res.json())
            .then((result) => { console.log(result); setAgeGroup((result)); });
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setcourse(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(course);
    
        fetch("https://localhost:7020/api/Course", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        })
        .then(response => response.json())  
        .then(data => {
            console.log(data);  
            navigate('/Admindashboard');  
        })
        .catch(error => console.error('Error:', error));  // Handle any errors
    
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>name:</label>
            <input
                type="text"
                name="courseName"
                onChange={handleChange}
            />
            <br /><label>Capacity:</label>
            <input
                type="text"
                name="capacity"
                onChange={handleChange}
            />
            <br />
            <br /><label>description:</label>
            <input
                type="text"
                name="description"
                onChange={handleChange}
            />
            <br /><label>syllabus:</label>
            <input
                type="text"
                name="syllabus"
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="duration_id">Duration:</label>
            <select name="duration_id" onChange={handleChange}>
                <option>Select </option>
                {duration.map(emp => (
                    <option value={emp.duration_id}>{emp.duration}</option>
                ))}
            </select>
            <br/>
            <label htmlFor="qualification_id">Qualification_id:</label>
            <select name="qualification_id" onChange={handleChange}>
                <option> selectOption</option>
                {qualification?.map(emp => (
                    <option value={emp.qualification_id}> {emp.qualification}</option>
                ))}
            </select>
            <label htmlFor="age_group_id">Age Group:</label>
            <select name="age_Group_id" onChange={handleChange}>
                <option>Select an Age Group</option>
                {agegroup.map(emp => (
                    <option value={emp.age_Group_id}>{emp.age_Group}</option>
                ))}
            </select>
            <br />

            <input type="submit" />
        </form>
    );
}
