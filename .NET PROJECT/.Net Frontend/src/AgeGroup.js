import React, { useState, useEffect } from 'react';

const AgeGroup = ({age_Group_id}) => {
  const [ageGroup, setAgeGroup] = useState({});

  useEffect(()=>{
    fetch(`https://localhost:7020/api/AgeGroup/${age_Group_id}`)
    .then(res=>res.json())
    .then((result) => {setAgeGroup(result)}
    );
},{});

  return (
    <td>
      {ageGroup ? (
        <>
          <p>{ageGroup.age_Group}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </td>
  );
};

export default AgeGroup;
