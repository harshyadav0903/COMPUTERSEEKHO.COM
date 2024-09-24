import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
function Follow_upAction() {
    const [Follow_up, setFollow_up] = useState({});
    const [staff, setStaff] = useState([])
    const { id,name } = useParams();
    alert("Name:"+name)
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
        fetch("https://localhost:7020/api/Closure/ListAll")
            .then(res => res.json())
            .then((result) => { console.log(result); setClosure(result); });
    }, []);

    useEffect(() => {
        fetch("https://localhost:7020/api/Course")
            .then(res => res.json())
            .then((result) => { console.log(result); setCourse(result); });
    }, []);

    useEffect(() => {
        fetch("https://localhost:7020/api/Staff")
            .then(res => res.json())
            .then((result) => { console.log(result); setStaff(result); });
    }, []);
    useEffect(() => {
        fetch("https://localhost:7020/api/Follow_up/"+id)
            .then(res => res.json())
            .then((result) => {
                setFollow_up(result);

            }
            ).catch((e) => console.log(e));
    }, []);

    const updateCourseId = async (event) => {
        await getEnquiry();
        const newCourseId = event.target.value;
        
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
        fetch("https://localhost:7020/api/Enquiry/" + Follow_up.enquiryId)
            .then(res => res.json())
            .then((result) => { console.log(result); setDemoEnq(result); });
        // handleenq()

    }
    const updateenquiry = async () => {
        fetch(`https://localhost:7020/api/Enquiry/${Follow_up.enquiryId}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(DemoEnq)
        }).then(r => { console.log(r) })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let demo =
        {
            "followUpId": id,
            "enquiryId": Follow_up.enquiryId,
            "followUpDate": Follow_up.followUpDate,
            "attempts": Follow_up.attempts,
            "staff": Follow_up.staff,
            "courseId": Follow_up.closureId,
            "followUpMessage": Follow_up.followUpMessage
        }

        fetch("https://localhost:7020/api/Follow_up/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(demo)
        }).then(r => { console.log(r) })
        event.preventDefault();
        updateenquiry();
        navigate(`/dashboard/${ name }/${id}`);

    }
    return (
        <form className="container" onSubmit={handleSubmit}>
            <label>Id:</label>
            <input
                type="text"
                name="followUpId"
                value={Follow_up.followUpId ?? ""}
                disabled={true}
                onChange={handleChange}
            />
            <br />

            <label>followUp_message:</label>
            <input
                type="text"
                name="followUpMessage"
                value={Follow_up.followUpMessage || ""}
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
            <label htmlFor="staff">Staff Name:</label>
            <input
                type="text"
                name="staff"
                value={name}
                defaultValue={name}
                
                onChange={handleChange}
            />
            <br />
            <label htmlFor="courseId">course:</label>
            <select name="courseId" onChange={updateCourseId}>
                <option> selectOption</option>
                {course.map(emp => (
                    <option value={emp.course_Id}> {emp.course_Name}</option>
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