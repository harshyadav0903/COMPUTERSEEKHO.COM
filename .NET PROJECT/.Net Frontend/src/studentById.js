import React, { useState, useEffect } from 'react';

const StudentById = ({studentId}) => {
  const [std, setStd] = useState({});


  useEffect(() => {
    fetch(`https://localhost:7020/api/Student/${studentId}`)
      .then(res => res.json())
      .then((result) => {
        setStd(result.value);
        console.log("Student Data:", result);
      });
  }, [studentId]);

   
  return (
    <>
    <td>
      {std ? (
          <p>{std.student_name}</p>
      ) : (
        <p>Loading...</p>
      )}
    </td>
    <td>
      {std ? (
          <p>{std.batch_id}</p>
      ) : (
        <p>Loading...</p>
      )}
    </td>
    <td>
      {std ? (
          <p>{std.photo}</p>
      ) : (
        <p>Loading...</p>
      )}
    </td>
    </>
  );
};

export default StudentById;
