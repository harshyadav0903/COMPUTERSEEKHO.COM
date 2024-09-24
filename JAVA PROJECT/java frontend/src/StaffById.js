import React, { useState, useEffect } from 'react';

const StaffById = ({staff_id}) => {
  const [staff, setStaff] = useState({});

  useEffect(()=>{
    fetch(`http://localhost:8084/api/staff/${staff_id}`)
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
