import React, { useState, useEffect } from 'react';

const Duration = ({duration_id}) => {
  const [durationData, setDuration] = useState({});

  useEffect(()=>{
    fetch(`http://localhost:8084/api/Duration/${duration_id}`)
    .then(res=>res.json())
    .then((result) => {setDuration(result)}
    );
},{});

  return (
    <td>
      {durationData ? (
        <>
          <p>{durationData.duration}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </td>
  );
};

export default Duration;
