import React, { useState, useEffect } from 'react';

const Duration = ({duration_id}) => {
  const [durationData, setDuration] = useState({});

  useEffect(()=>{
    fetch(`https://localhost:7020/api/CourseDuration/${duration_id}`)
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
