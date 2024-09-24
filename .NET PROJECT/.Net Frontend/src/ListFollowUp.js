

import React from "react"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import EnqById from "./EnqById";
import StaffById from "./StaffById";

export default function ListFollowUp({name})
{
    alert(name)
  const [followUP,setFollowUp]=useState([]);

  const currentDate = new Date();

  useEffect(()=>{
    fetch("https://localhost:7020/api/Follow_up")
    .then(res=>res.json())
    .then(result=>{setFollowUp(result);});
    console.log(followUP)
    },[]);
    const filteredFollowUp = followUP.filter(
        (fol) => fol.attempts < 3 && fol.closureId === 0 &&  new Date(fol.followUpDate).getTime() <= currentDate.getTime());
    return (<div>
        <h2>Follow_up</h2>
        <table border={5}>
            <thead>
                <tr>
                    <th>enquiry_Id</th>
                    <th>Enquirer Name</th>
                    <th>Student Name</th>  
                    <th>Phone</th>
                    <th>Course</th>
                    <th>Follow-up date</th>
                    <th>Staff Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {filteredFollowUp.map(fol=>(
                    <tr key={fol.followUpId}>
                        <td>{fol.enquiryId}</td>
                        <EnqById enquiry_Id={fol.enquiryId} />   
                        <td>{fol.followUpDate}</td>
                        <td>{fol.staff}</td>
                        <td>
                        <Link to={`/Action/${fol.followUpId}/${name}`}>CALL</Link>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>)
}

