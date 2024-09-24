import React, { useState, useEffect } from 'react';

const BatchStudentTable = ({ batchDetails, data }) => {
  
  
  return (
    <div>
      <h2>Batch Details</h2>
      <p>Batch ID: {batchDetails.batch_id}</p>
      <p>Batch Name: {batchDetails.batch_name}</p>

      <h2>Student Data</h2>
      <table border={2} >
  <thead>
    <tr>
      <th>Batch ID</th>
      <th>Student Name</th>
      <th>Registration Date</th>
      <th>Course ID</th>
      <th>Photo</th>
      <th>Contact No</th>
    </tr>
  </thead>
  <tbody>
    {data?.map(item => (
      <tr key={item.batch_id}>
        <td>{item.batch_id}</td>
        <td>{item.student_name}</td>
        <td>{item.registration_date}</td>
        <td>{item.course_id}</td>
        <td>{item.photo}</td>
        <td>{item.contact_no}</td>
      </tr>
    ))}
  </tbody>
</table>


    </div>
  );
};

const BatchStudentDisplay = () => {
  const [batchData, setBatchData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [uniqueBatchIds, setUniqueBatchIds] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [batchStudents, setBatchStudents] = useState({});

  useEffect(() => {
    // Fetch batch data
    fetch("https://localhost:7020/api/Batch")
      .then(response => response.json())
      .then(data => {
        setBatchData(data);

        // Extract unique batch IDs
        const uniqueBatchIds = [...new Set(data.map(batch => batch.batch_id))];
        setUniqueBatchIds(uniqueBatchIds);
      })
      .catch(error => console.error('Error fetching batch data:', error));

    // Fetch student data
    fetch("https://localhost:7020/api/Student/allstudents")
      .then(response => response.json())
      .then(data => setStudentData(data))
      .catch(error => console.error('Error fetching student data:', error));
  }, []);

  useEffect(() => {
    // Organize students by batch ID
    const studentsByBatch = {};
    studentData.forEach(student => {
      const batchId = student.batch_id;
      if (!studentsByBatch[batchId]) {
        studentsByBatch[batchId] = [];
      }
      studentsByBatch[batchId].push(student);
    });
    setBatchStudents(studentsByBatch);
  }, [studentData]);

  const handleBatchClick = (batchId) => {
    // Set the selected batch and its details for displaying its data
    setSelectedBatch({
      batchId: batchId,
      batchDetails: batchData.find(batch => batch.batch_id === batchId),
    });
  };

  return (
    <div>
      <h2>Batchwise Student Display</h2>

      <div>
        {uniqueBatchIds.map(batchId => (
          <div key={batchId}>
            <h3>Batch ID: {batchId}</h3>
            <button onClick={() => handleBatchClick(batchId)}>
              View Batch Data
            </button>
            {selectedBatch && selectedBatch.batchId === batchId && (
              <BatchStudentTable
                batchDetails={selectedBatch.batchDetails}
                data={batchStudents[batchId]}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BatchStudentDisplay;
