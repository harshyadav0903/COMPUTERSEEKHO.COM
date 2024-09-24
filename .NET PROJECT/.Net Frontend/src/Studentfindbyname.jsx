import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';

export default function StudentFindById() {
  const [student, setStudent] = useState({});
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://localhost:7020/api/Student/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
      });
  }, [name]);

  return (
    <Container>
      <div className="table-container table-responsive">
        <h2>Student Data...</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Student Id</th>
              <th>Batch Id</th>
              <th>Email</th>
              <th>Enquiry Id</th>
              <th>Fees Paid</th>
              <th>Location Id</th>
              <th>Contact No</th>
              <th>Date of Birth</th>
              <th>Course Id</th>
              <th>Total Fees</th>
              <th>Payment Id</th>
              <th>Student Name</th>
              <th>Gender</th>
              <th>Photo</th>
              <th>Qualification Id</th>
              <th>Registration Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr key={student.student_id}>
              <td>{student.student_id}</td>
              <td>{student.batch_id}</td>
              <td>{student.email}</td>
              <td>{student.enquiry_id}</td>
              <td>{student.fees_paid}</td>
              <td>{student.location_id}</td>
              <td>{student.contact_no}</td>
              <td>{student.date_of_birth}</td>
              <td>{student.course_id}</td>
              <td>{student.total_fees}</td>
              <td>{student.payment_id}</td>
              <td>{student.student_name}</td>
              <td>{student.gender}</td>
              <td>{student.photo}</td>
              <td>{student.qualification_id}</td>
              <td>{student.registration_date}</td>
              <td>
                <Link to={`/studentup/${student.student_id}`}>Edit</Link>
              </td>
              <td>
                <Link to={`/delstud/${student.student_id}`}>Delete</Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
