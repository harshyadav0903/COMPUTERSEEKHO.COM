import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
function Follow_upAction() {
    const [Follow_up, setFollow_up] = useState({});
    const [staff, setStaff] = useState([])
    const { id } = useParams();
    const [closuresrc, setClosure] = useState([])
    const [DemoEnq, setDemoEnq] = useState({});
    const [course, setCourse] = useState([])
    const [cor, setCor] = useState([]);


    let navigate = useNavigate();

    const [followUpDate, setFollowUpDate] = useState("");

    useEffect(() => {
     
      const currentDate = new Date();
  
      
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + 3);
  
      
      const formattedDate = nextDate.toISOString().split("T")[0];
  
      
      setFollowUpDate(formattedDate);
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount
  
    const handle = (event) => {
      setFollowUpDate(event.target.value);
      // Handle other changes if needed
    };

    useEffect(() => {
        fetch("http://localhost:8084/api/Closure/ListAll")
            .then(res => res.json())
            .then((result) => { console.log(result); setClosure(result); });
    }, []);

    useEffect(() => {
        fetch("http://localhost:8084/api/course/ListAll")
            .then(res => res.json())
            .then((result) => { console.log(result); setCourse(result); });
    }, []);

    useEffect(() => {
        fetch("http://localhost:8084/api/staff/ListAll")
            .then(res => res.json())
            .then((result) => { console.log(result); setStaff(result); });
    }, []);
    useEffect(() => {
        fetch("http://localhost:8084/api/follow_up/" + id)
            .then(res => res.json())
            .then((result) => {
                setFollow_up(result);

            }
            ).catch((e) => console.log(e));
    }, []);

    const updateCourseId = async (event) => {
        getEnquiry();
        const newCourseId = event.target.value;
        // alert(newCourseId)
        // setCor(newCourseId);
        // alert(cor)
        setDemoEnq((prevState) => ({
            ...prevState,
            course_Id: newCourseId,
        }));
        updateenquiry();
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFollow_up(values => ({ ...values, [name]: value }))
    }

    const getEnquiry = async () => {
        fetch("http://localhost:8084/api/enquiry/" + Follow_up.enquiry_Id)
            .then(res => res.json())
            .then((result) => { console.log(result); setDemoEnq(result); });
        // handleenq()

    }
    const updateenquiry = async () => {
        fetch("http://localhost:8084/api/enquiry/update/" + Follow_up.enquiry_Id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(DemoEnq)
        }).then(r => { console.log(r) })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let demo =
        {
            "followUp_id": id,
            "enquiry_Id": Follow_up.enquiry_Id,
            "followUp_date": Follow_up.followUp_date,
            "attempts": Follow_up.attempts,
            "staff_id": Follow_up.staff_id,
            "closure_Id": Follow_up.closure_Id,
            "followUp_message": Follow_up.followUp_message
        }

        fetch("http://localhost:8084/api/follow_up/update/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(demo)
        }).then(r => { console.log(r) })
        event.preventDefault();
        updateenquiry();
        navigate('/dashboard');

    }
    return (
        <form className="container" onSubmit={handleSubmit}>
            <label>Id:</label>
            <input
                type="text"
                name="followUp_id"
                value={Follow_up.followUp_id ?? ""}
                disabled={true}
                onChange={handleChange}
            />
            <br />

            <label>followUp_message:</label>
            <input
                type="text"
                name="followUp_message"
                value={Follow_up.followUp_message || ""}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="followUp_date">FollowUp Date:</label>
            <input
                type="date"
                name="followUp_date"
                value={followUpDate}
                defaultValue={followUpDate}
                onChange={handle}
            />
            <br />
            <label>attempts:</label>
            <input
                type="number"
                name="attempts"
                value={Follow_up.attempts}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="staff_Id">Staff Name:</label>
            <select name="staff_id" onChange={handleChange}>
                <option>Select</option>
                {staff.map(emp => (
                    <option value={emp.staff_Id}>{emp.name}</option>
                ))}
            </select>
            <br />
            <label htmlFor="courseId">course:</label>
            <select name="course_Id" onChange={updateCourseId}>
                <option> selectOption</option>
                {course.map(emp => (
                    <option value={emp.courseId}> {emp.courseName}</option>
                ))}
            </select><br></br>
            <label htmlFor="closure_Id">closure:</label>
            <select name="closure_Id" onChange={handleChange}>
                <option> selectOption</option>
                {closuresrc.map(emp => (
                    <option value={emp.closure_Id}> {emp.clousre_Reason}</option>
                ))}
            </select><br></br>
            <button type="submit" >update</button>
        </form>
    );
} export default Follow_upAction;