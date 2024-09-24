import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BatchById from "./BatchById";

export default function ShowPlacement() {
  const [placedstudent, setPlacedstudent] = useState([]);
  const [student, setStudentinfo] = useState([]);

  const [batches, setBatches] = useState([]);

  const navigate = useNavigate();

  //for placementData and placed status
  useEffect(() => {
    fetch("https://localhost:7020/api/PlacementData")
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        setPlacedstudent(result);
        const batchIds = [...new Set(result.map((item) => item.batchid))]
        setBatches(batchIds);
      });
  }, []);


  const handleOnClick = (batchId) => {

    navigate(`/ShowBatchWisePlacement/${ batchId }`)
    
  };
  return (
    <div>
      {batches.map((batchId) => (
        <button key={batchId} type="submit" onClick={() => handleOnClick(batchId)}>
         <BatchById batch_id= {batchId} />
        </button>
      ))}

    </div>
  )

}
