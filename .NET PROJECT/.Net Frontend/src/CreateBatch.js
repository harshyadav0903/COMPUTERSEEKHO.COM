// 

import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateBatch.css';

function CreateBatch() {
  const [formData, setFormData] = useState({
    batch_logo: '',
    batch_name: '',
    batch_year: '',
    course_id: '',
    cover_Photo: '',
    end_date: '',
    finalPresentationDate: '',
    is_active: '',
    start_date: '',
  });
  const [course, setCourse] = useState([])


  useEffect(() => {
    fetch("https://localhost:7020/api/Course")
      .then(res => res.json())
      .then((result) => { console.log(result); setCourse(result); });
  }, []);
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    const { name, value, type } = event.target;

    // Convert boolean value for 'is_active' from string to boolean
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? event.target.checked : value === 'true' ? true : value === 'false' ? false : value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    fetch("https://localhost:7020/api/Batch", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Inserted");
        // Uncomment the line below if you want to navigate to '/home' after successful submission
        // navigate('/home');
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <div>
      <h2>Add Details to Batch</h2>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="batch_logo">Batch Logo:</label>
        <input
          type="text"
          name="batchLogo"
          placeholder="Enter batch logo URL"
          onChange={handleOnChange}
        />
        <br />

        <label htmlFor="batch_name">Batch Name:</label>
        <input
          type="text"
          name="batchName"
          placeholder="Enter batch name"
          onChange={handleOnChange}
        />
        <br />

        <label htmlFor="batch_year">Batch Year:</label>
        <input
          type="datetime-local"
          name="batchYear"
          onChange={handleOnChange}
        />
        <br />

        <label htmlFor="courseId">course:</label>
        <select name="courseId" onChange={handleOnChange}>
          <option> selectOption</option>
          {course.map(emp => (
            <option value={emp.course_Id}> {emp.course_Name}</option>
          ))}
        </select><br></br>

        <label htmlFor="cover_photo">Cover Photo:</label>
        <input
          type="text"
          name="coverPhoto"
          placeholder="Enter cover photo URL"
          onChange={handleOnChange}
        />
        <br />

        <label htmlFor="end_date">End Date:</label>
        <input
          type="datetime-local"
          name="endDate"
          onChange={handleOnChange}
        />
        <br />

        <label htmlFor="finalPresentationDate">Final Presentation Date:</label>
        <input
          type="date"
          name="finalPresentationDate"
          onChange={handleOnChange}
        />
        <br />

        <label htmlFor="is_active">Is Active:</label>
        <select
          id="is_active"
          name="isActive"
          onChange={handleOnChange}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <br />

        <label htmlFor="start_date">Start Date:</label>
        <input
          type="datetime-local"
          name="startDate"
          onChange={handleOnChange}
        />
        <br />

        <button type="submit">Create Batch</button>
      </form>
    </div>
  );
}

export default CreateBatch;
