import React, { useState, useEffect } from 'react';

const StaffById = ({staff_id}) => {
  const [staff, setStaff] = useState({});

  useEffect(()=>{
    fetch(`https://localhost:7020/api/Staff/${staff_id}`)
    .then(res=>res.json())
    .then((result) => {setStaff(result)}
    );
},{});

  return (
    <td>
      {staff ? (
        <>
          <p>{staff.name}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </td>
  );
};

export default StaffById;
