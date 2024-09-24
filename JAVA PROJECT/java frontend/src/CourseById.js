import React, { useState, useEffect } from 'react';

const CourseById = ({courseId}) => {
  const [durationData, setDuration] = useState({});

  useEffect(()=>{
    fetch(`http://localhost:8084/api/course/${courseId}`)
    .then(res=>res.json())
    .then((result) => {setDuration(result)}
    );
},{});

  return (
    <td>
      {durationData ? (
        <>
          <p>{durationData.courseName}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </td>
  );
};

export default CourseById;