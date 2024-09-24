


import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EnquiryForm() {
  const [showForm, setShowForm] = useState({})
  const [location, setLocation] = useState({})
  const [enquirysrc, setEnquirysrc] = useState([]);
  const [qualification, setQualification] = useState([]);
  const [staff, setStaff] = useState([])
  const [course, setCourse] = useState([])
  const [id, setId] = useState(0);
  const currentDate = new Date();
  const { name, staffId } = useParams();
  let navigate = useNavigate();

  const [nextFollowupDate, setNextFollowupDate] = useState("");

  useEffect(() => {

    const currentDate = new Date();


    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 3);


    const formattedDate = nextDate.toISOString().split("T")[0];

    // Set the default value for the input field
    setNextFollowupDate(formattedDate);
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  useEffect(() => {
    handle({ target: { value: nextFollowupDate } });
  }, []);
  const handle = (event) => {
    setNextFollowupDate(event.target.value);
  };
  const handlesetLocation = (event) => {
    setLocation((loc) => ({ ...loc, [event.target.name]: event.target.value }));
  }
  useEffect(() => {
    fetch("https://localhost:7020/api/EnquirySource")
      .then(res => res.json())
      .then((result) => { console.log(result); setEnquirysrc(result); });
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
    fetch("https://localhost:7020/api/Qualification")
      .then(res => res.json())
      .then((result) => { console.log(result); setQualification(result); });
  }, []);

  const handlelocation = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify(location));
    await fetch("https://localhost:7020/api/Location", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(location)
    })
      .then(res => res.json())
      .then((result) => {
        const { locationId } = result; alert(locationId); setId(locationId); handleSubmit(locationId)
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });

  }

  const handleInput = (event) => {
    setShowForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    console.log(showForm);

  };

  const handleSubmit = async (location_id) => {
    const updatedShowForm = { ...showForm, location_id };


    console.log(JSON.stringify(updatedShowForm));

    try {
      const response = await fetch("https://localhost:7020/api/Enquiry", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedShowForm)
      })

      if (response.ok) {
        console.log('Enquiry inserted successfully.');
        const { enquiry_Id, staff, enquirer_Query, next_followup_Date } = await response.json();

        const followUpData = {
          "enquiryId": enquiry_Id,
          "followUpDate": nextFollowupDate,
          "attempts": 0,
          "staff": staff,
          "closureId": 0,
          "followUpMessage": enquirer_Query
        }
        console.log(followUpData)
        const createFollowUpResponse = await fetch("https://localhost:7020/api/Follow_up", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(followUpData),
        });

        if (createFollowUpResponse.ok) {
          console.log('Follow-up created successfully.');
          navigate(`/Dashboard/${name}/${staffId}`);
        } else {
          console.error('Error creating follow-up:', createFollowUpResponse.statusText);
        }
      } else {
        console.error('Error creating enquiry:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    navigate(`/Dashboard/${name}/${staffId}`)
  }
  return (
    <div className="container">
      <Link to={`/Dashboard/${name}/${staffId}`}>back </Link>
      <h2>Enquiry Form</h2>
      <form onSubmit={handlelocation}>
        <label htmlFor="enquirerName" >enquirer_name:</label>
        <input type="text" name="enquirerName" onChange={handleInput} /><br></br>


        <label htmlFor="student_Name">StudentName:</label>
        <input type="text" name="student_Name" onChange={handleInput} /><br></br>

        <label htmlFor="qualification">Qualification:</label>
        <select name="qualification" onChange={handleInput}>
          <option> selectOption</option>
          {qualification?.map(emp => (
            <option value={emp.qualificationName}>{emp.qualificationName}</option>
          ))}
        </select>
        <br />
        <label htmlFor="contact_No">ContactNumber:</label>
        <input type="text" name="contact_No" onChange={handleInput} /><br></br>

        <label htmlFor="email">Email:</label>
        <input type="text" name="email" onChange={handleInput} /><br></br>

        <label htmlFor="course_Id">course:</label>
        <select name="course_Id" onChange={handleInput}>
          <option> selectOption</option>
          {course.map(emp => (
            <option value={emp.course_Id}> {emp.course_Name}</option>
          ))}
        </select><br></br>

        <label htmlFor="enquiry_Date">EnquiryDate:</label>
        <input type="date" name="enquiry_Date" value={currentDate.toISOString().split("T")[0]} defaultValue={currentDate.toISOString().split("T")[0]} disabled={true} /><br></br>

        <label htmlFor="enquirySourceId">enquiry_source:</label>
        <select name="enquiry_Source_id" onChange={handleInput}>
          <option> selectOption</option>
          {enquirysrc.map(emp => (
            <option value={emp.enquirySourceId}> {emp.enquiry_Source}</option>
          ))}
        </select><br></br>

        <label htmlFor="landmark">landmark:</label>
        <input type="text" name="landmark" onChange={handlesetLocation}></input><br></br>

        <label htmlFor="city">City:</label>
        <input type="text" name="city" onChange={handlesetLocation}></input><br></br>

        <label htmlFor="country">country:</label>
        <input type="text" name="country" onChange={handlesetLocation}></input><br></br>

        <label htmlFor="pincode">Pincode:</label>
        <input type="text" name="pincode" onChange={handlesetLocation}></input><br></br>


        <label htmlFor="enquirer_Query">EnquirerQuery:</label>
        <textarea name="enquirer_Query" onChange={handleInput}></textarea><br></br>

        <label htmlFor="next_followup_Date">NextFollowupDate:</label>
        <input
          type="date"
          name="next_followup_Date"
          value={nextFollowupDate}
          defaultValue={currentDate.getDate() + 3}
          onChange={handle}
        />
        <br />
        <label htmlFor="staff">Staff Name:</label>

        <input
          type="text"
          name="staff"
          value={name}
          defaultValue={name}
          disabled="true"
          onMouseOver={handleInput}
        />
        <br />

        <label htmlFor="date_Of_Birth">DateofBirth:</label>
        <input type="date" name="date_Of_Birth" onChange={handleInput} /><br></br>
        <button type="submit" value="Submit" >SUBMIT</button><br></br>

      </form>

    </div>
  );
}

export default EnquiryForm;
