import React, { useState, useEffect } from 'react';

const Qualification = ({qualification_id}) => {
  const [qualificationData, setqualification] = useState({});

  useEffect(()=>{
    fetch(`http://localhost:8084/api/Qualification/${qualification_id}`)
    .then(res=>res.json())
    .then((result) => {setqualification(result)}
    );
},{});

  return (
    <td>
      {qualificationData ? (
        <>
          <p>{qualificationData.qualification}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </td>
  );
};

export default Qualification;
