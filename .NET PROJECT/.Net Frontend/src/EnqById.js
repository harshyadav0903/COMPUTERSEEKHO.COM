import React, { useState, useEffect } from 'react';

const EnqById = ({enquiry_Id}) => {
  const [Enq, setEnq] = useState({});

  const [course,setCourse] = useState({});

  useEffect(() => {
    fetch(`https://localhost:7020/api/Enquiry/${enquiry_Id}`)
      .then(res => res.json())
      .then((result) => {
        setEnq(result);
      });
  }, [enquiry_Id]);

  useEffect(() => {
    if (Enq.course_Id) {
      fetch(`https://localhost:7020/api/Course/${Enq.course_Id}`)
        .then(res => res.json())
        .then((result) => {
          setCourse(result);
        });
    }
  }, [Enq.course_Id]);
const {course_Name}=course;
   
  return (
    <>
    <td>
      {Enq ? (
          <p>{Enq.enquirerName}</p>
      ) : (
        <p>Loading...</p>
      )}
    </td>
    <td>
      {Enq ? (
          <p>{Enq.student_Name}</p>
      ) : (
        <p>Loading...</p>
      )}
    </td>
    <td>
      {Enq ? (
          <p>{Enq.contact_No}</p>
      ) : (
        <p>Loading...</p>
      )}
    </td>
    <td>
          <p>{course_Name}</p>
    </td>
    </>
  );
};

export default EnqById;
