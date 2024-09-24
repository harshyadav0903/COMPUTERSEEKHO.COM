// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function EnquiryForm() {
//   const [showForm, setShowForm] = useState({})
//   const [location, setLocation] = useState({})
//   const [enquirysrc, setEnquirysrc] = useState([]);
//   const [qualification, setQualification] = useState([]);
//   const [staff, setStaff] = useState([])
//   const [course, setCourse] = useState([])
//   const[id,setId]=useState(0);
  
//   let navigate = useNavigate();

//   const [nextFollowupDate, setNextFollowupDate] = useState("");

//   useEffect(() => {
//     // Calculate the current date
//     const currentDate = new Date();

//     // Calculate the date 3 days from now
//     const nextDate = new Date(currentDate);
//     nextDate.setDate(currentDate.getDate() + 3);

//     // Format the date as "YYYY-MM-DD" for input field
//     const formattedDate = nextDate.toISOString().split("T")[0];

//     // Set the default value for the input field
//     setNextFollowupDate(formattedDate);
//   }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

//   const handle = (event) => {
//     setNextFollowupDate(event.target.value);
//   };
//   const handlesetLocation = (event) => {
//     setLocation((loc) => ({ ...loc, [event.target.name]: event.target.value }));
//   }
//   useEffect(() => {
//     fetch("http://localhost:8084/api/enquirysources/ListAll")
//       .then(res => res.json())
//       .then((result) => { console.log(result); setEnquirysrc(result); });
//   }, []);

//   useEffect(() => {
//     fetch("http://localhost:8084/api/course/ListAll")
//       .then(res => res.json())
//       .then((result) => { console.log(result); setCourse(result); });
//   }, []);
//   useEffect(() => {
//     fetch("http://localhost:8084/api/staff/ListAll")
//       .then(res => res.json())
//       .then((result) => { console.log(result); setStaff(result); });
//   }, []);
//   useEffect(() => {
//     fetch("http://localhost:8084/api/Qualification/ListAll")
//       .then(res => res.json())
//       .then((result) => { console.log(result); setQualification(result); });
//   }, []);

//   const handlelocation = async (event) => {
//     event.preventDefault();
//     console.log(JSON.stringify(location));
//      await fetch("http://localhost:8084/api/Location/create", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(location)
//     })
//     .then(res => res.json())
//     .then((result) => {const {location_id}=result ;alert(location_id);setId(location_id); handleSubmit(location_id)  
//       })
//       .catch((error) => {
//         console.error('There was a problem with the fetch operation:', error);
//       }); 
     
//   }

//   const handleInput = (event) => {
//     setShowForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
//     console.log(showForm);

//   };

//   const handleSubmit= async (location_id) => {
//     const updatedShowForm = { ...showForm, location_id };
   
    
//     console.log(JSON.stringify(updatedShowForm));

//     try {
//       const response = await fetch("http://localhost:8084/api/enquiry/create", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(updatedShowForm)
//       })

//       if (response.ok) {
//         console.log('Enquiry inserted successfully.');
//         const { enquiry_Id,staff_id, enquirer_Query, next_followup_Date } = await response.json();

//         const followUpData = {
//           "enquiry_Id": enquiry_Id,
//           "followUp_date": nextFollowupDate,
//           "attempts": 0,
//           "staff_id": staff_id,
//           "closure_Id": 0,
//           "followUp_message": enquirer_Query
//       }
//         console.log(followUpData)
//         const createFollowUpResponse = await fetch("http://localhost:8084/api/follow_up/create", {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(followUpData),
//         });

//         if (createFollowUpResponse.ok) {
//           console.log('Follow-up created successfully.');
//           navigate('/dashboard');
//         } else {
//           console.error('Error creating follow-up:', createFollowUpResponse.statusText);
//         }
//       } else {
//         console.error('Error creating enquiry:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }

//     navigate("/dashboard")
//   }
//   return (
//     <div className="container">
//         <Link to="/dashboard">back </Link>
//       <h2>Enquiry Form</h2>
//       <form onSubmit={handlelocation}>
//         <label htmlFor="enquirerName" >enquirer_name:</label>
//         <input type="text" name="enquirerName" onChange={handleInput} /><br></br>

//         <label htmlFor="qualification">Qualification:</label>
//         <select name="qualification" onChange={handleInput}>
//           <option> selectOption</option>
//           {qualification?.map(emp => (
//             <option value={emp.qualification}>{emp.qualification}</option>
//           ))}
//         </select>
//         <br />
//         <label htmlFor="contact_No">ContactNumber:</label>
//         <input type="text" name="contact_No" onChange={handleInput} /><br></br>


//         <label htmlFor="email">Email:</label>
//         <input type="text" name="email" onChange={handleInput} /><br></br>
//         <label htmlFor="enquiry_Date">EnquiryDate:</label>
//         <input type="date" name="enquiry_Date" onChange={handleInput} /><br></br>

//         <label htmlFor="enquirySourceId">enquiry_source_id:</label>
//         <select name="enquiry_Source_id" onChange={handleInput}>
//           <option> selectOption</option>
//           {enquirysrc.map(emp => (
//             <option value={emp.enquirySourceId}> {emp.enquirySource}</option>
//           ))}
//         </select><br></br>

//         <label htmlFor="student_Name">StudentName:</label>
//         <input type="text" name="student_Name" onChange={handleInput} /><br></br>


//         <label htmlFor="landmark">landmark:</label>
//         <input type="text" name="landmark" onChange={handlesetLocation}></input><br></br>

//         <label htmlFor="city">City:</label>
//         <input type="text" name="city" onChange={handlesetLocation}></input><br></br>

//         <label htmlFor="country">country:</label>
//         <input type="text" name="country" onChange={handlesetLocation}></input><br></br>

//         <label htmlFor="pincode">Pincode:</label>
//         <input type="text" name="pincode" onChange={handlesetLocation}></input><br></br>


//         <label htmlFor="enquirer_Query">EnquirerQuery:</label>
//         <textarea name="enquirer_Query" onChange={handleInput}></textarea><br></br>

//       <label htmlFor="next_followup_Date">NextFollowupDate:</label>
//       <input
//         type="date"
//         name="next_followup_Date"
//         value={nextFollowupDate}
//         defaultValue={nextFollowupDate}
//         onChange={handle}
//       />
//       <br />

//         <label htmlFor="courseId">course:</label>
//         <select name="course_Id" onChange={handleInput}>
//           <option> selectOption</option>
//           {course.map(emp => (
//             <option value={emp.courseId}> {emp.courseName}</option>
//           ))}
//         </select><br></br>

//             <label htmlFor="staff_Id">Staff Name:</label>
//             <select name="staff_id" onChange={ handleInput}>
//                 <option>Select</option>
//                 {staff.map(emp => (
//                     <option value={emp.staff_Id}>{emp.name}</option>
//                 ))}
//             </select>
//             <br />

//         <label htmlFor="date_Of_Birth">DateofBirth:</label>
//         <input type="date" name="date_Of_Birth" onChange={handleInput} /><br></br>

//         <button type="submit" value="Submit" >SUBMIT</button><br></br>

//       </form>


//     </div>
//   );
// }

// export default EnquiryForm;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function EnquiryForm() {
  const [showForm, setShowForm] = useState({})
  const [location, setLocation] = useState({})
  const [enquirysrc, setEnquirysrc] = useState([]);
  const [qualification, setQualification] = useState([]);
  const [staff, setStaff] = useState([])
  const [course, setCourse] = useState([])
  const [id, setId] = useState(0);
  const currentDate = new Date();

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

  const handle = (event) => {
    setNextFollowupDate(event.target.value);
  };
  const handlesetLocation = (event) => {
    setLocation((loc) => ({ ...loc, [event.target.name]: event.target.value }));
  }
  useEffect(() => {
    fetch("http://localhost:8084/api/enquirysources/ListAll")
      .then(res => res.json())
      .then((result) => { console.log(result); setEnquirysrc(result); });
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
    fetch("http://localhost:8084/api/Qualification/ListAll")
      .then(res => res.json())
      .then((result) => { console.log(result); setQualification(result); });
  }, []);

  const handlelocation = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify(location));
    await fetch("http://localhost:8084/api/Location/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(location)
    })
      .then(res => res.json())
      .then((result) => {
        const { location_id } = result; alert(location_id); setId(location_id); handleSubmit(location_id)
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
      const response = await fetch("http://localhost:8084/api/enquiry/create", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedShowForm)
      })

      if (response.ok) {
        console.log('Enquiry inserted successfully.');
        const { enquiry_Id, staff_id, enquirer_Query, next_followup_Date } = await response.json();

        const followUpData = {
          "enquiry_Id": enquiry_Id,
          "followUp_date":nextFollowupDate,
          "attempts": 0,
          "staff_id": staff_id,
          "closure_Id": 0,
          "followUp_message": enquirer_Query
        }
        console.log(followUpData)
        const createFollowUpResponse = await fetch("http://localhost:8084/api/follow_up/create", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(followUpData),
        });

        if (createFollowUpResponse.ok) {
          console.log('Follow-up created successfully.');
          navigate('/dashboard');
        } else {
          console.error('Error creating follow-up:', createFollowUpResponse.statusText);
        }
      } else {
        console.error('Error creating enquiry:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    navigate("/dashboard")
  }
  return (
    <div className="container">
      <Link to="/dashboard">back </Link>
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
            <option value={emp.qualification}>{emp.qualification}</option>
          ))}
        </select>
        <br />
        <label htmlFor="contact_No">ContactNumber:</label>
        <input type="text" name="contact_No" onChange={handleInput} /><br></br>


        <label htmlFor="email">Email:</label>
        <input type="text" name="email" onChange={handleInput} /><br></br>

        <label htmlFor="courseId">course:</label>
        <select name="course_Id" onChange={handleInput}>
          <option> selectOption</option>
          {course.map(emp => (
            <option value={emp.courseId}> {emp.courseName}</option>
          ))}
        </select><br></br>

        <label htmlFor="enquiry_Date">EnquiryDate:</label>
        <input type="date" name="enquiry_Date" value={currentDate.toISOString().split("T")[0]} disabled={true} /><br></br>

        <label htmlFor="enquirySourceId">enquiry_source:</label>
        <select name="enquiry_Source_id" onChange={handleInput}>
          <option> selectOption</option>
          {enquirysrc.map(emp => (
            <option value={emp.enquirySourceId}> {emp.enquirySource}</option>
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
          onMouseOver={handle}
        />
        <br />



        <label htmlFor="staff_Id">Staff Name:</label>
        <select name="staff_id" onChange={handleInput}>
          <option>Select</option>
          {staff.map(emp => (
            <option value={emp.staff_Id}>{emp.name}</option>
          ))}
        </select>
        <br />

        <label htmlFor="date_Of_Birth">DateofBirth:</label>
        <input type="date" name="date_Of_Birth" onChange={handleInput} /><br></br>

        <button type="submit" value="Submit" >SUBMIT</button><br></br>

      </form>


    </div>
  );
}

export default EnquiryForm;
