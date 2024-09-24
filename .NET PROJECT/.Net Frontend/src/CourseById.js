import React, { useState, useEffect } from 'react';

const CourseById = ({courseId}) => {
  const [durationData, setDuration] = useState({});

  useEffect(()=>{
    fetch(`https://localhost:7020/api/Course/${courseId}`)
    .then(res=>res.json())
    .then((result) => {setDuration(result)}
    );
},{});

  return (
    <td>
      {durationData ? (
        <>
          <p>{durationData.course_Name}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </td>
  );
};

export default CourseById;