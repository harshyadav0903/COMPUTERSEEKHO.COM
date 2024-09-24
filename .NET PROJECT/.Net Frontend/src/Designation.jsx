import React, { useState, useEffect } from 'react';

const Designation = ({designationId}) => {
  const [designation, setDesignation] = useState({});

  useEffect(()=>{
    fetch(`https://localhost:7020/api/Designation/${designationId}`)
    .then(res=>res.json())
    .then((result) => {setDesignation(result)}
    );
},{});

  return (
    <td>
      {designation ? (
        <>
          <p>{designation.designationName}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </td>
  );
};

export default Designation;
