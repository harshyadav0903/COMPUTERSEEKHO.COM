import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BatchById from "./BatchById";

export default function ShowPlacement()
{
    const[placedstudent,setPlacedstudent]=useState([]);
    const[student,setStudentinfo]=useState([]);
   
    const[batches,setBatches]=useState([]);

    const navigate=useNavigate();

    //for placementData and placed status
    useEffect(()=>{
        fetch("http://localhost:8084/api/placementdata/Listall")
        .then(res=>res.json())
        .then((result)=>{console.log(result);
            setPlacedstudent(result);
            const batchIds =[...new Set(result.map((item) => item.batchid))]
            setBatches(batchIds);});
      }, []);

      // for  student and prn and batchid
      useEffect(()=>{
        fetch("http://localhost:8084/api/prn/allprn")
        .then(res=>res.json())
        .then((result)=>{console.log(result);setStudentinfo(result);});
      }, []);
      console.log(placedstudent.batchid);

      //for batchwise placement data
      // useEffect(()=>{
      //   fetch(`http://localhost:8086/api/placementdata/bybatch/${2}`)
      //   .then(res=>res.json())
      //   .then((result)=>{alert((result));console.log(result);setbatchplacement(result);});
      // }, []);

      // const handleOnClick=(event)=>{
      //   navigate("/ShowBatchWisePlacement");
      // }


      // const fetchBatchPlacement = (batchId) => {
      //   fetch(`http://localhost:8086/api/placementdata/bybatch/${batchId}`)
      //     .then((res) => res.json())
      //     .then((result) => {
      //       console.log(result);
      //       setbatchplacement(result);
      //     });
      // };

      const handleOnClick = (batchId) => {

        navigate(`/ShowBatchWisePlacement/${batchId}`)
       // fetchBatchPlacement(batchId);
       // navigate("/ShowBatchWisePlacement");
      };




      return(
        <div>
            { batches.map((batchId) => (
            <button key={batchId} type="submit" onClick={() => handleOnClick(batchId)}>
             Batch {<BatchById batch_id={batchId}/>}
             
          </button>
      ))}

        </div>
      )

}