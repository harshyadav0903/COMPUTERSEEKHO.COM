import { Table, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BatchById from './BatchById';
import CourseById from './CourseById';
import Qualification from './Qualification';

export default function Liststudentloyee() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch("https://localhost:7020/api/Student/allstudents")
            .then((response) => response.json())
            .then((data) => {
                setStudents(data);
                // alert(data);
            });
    }, []);

    return (
        <Container>
            <div className="table-container table-responsive">
                <h2>Students Data...</h2>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Student Id</th>
                            <th>Batch Id</th>
                            <th>Email</th>
                            <th>Enquiry Id</th>
                            <th>Fees Paid</th>
                            {/* <th>Location Id</th> */}
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
                            <th>Display</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.student_id}>
                                <td>{student.student_id}</td>
                                <BatchById batch_id={student.batch_id}/>
                                <td>{student.email}</td>
                                <td>{student.enquiry_id}</td>
                                <td>{student.fees_paid}</td>
                                {/* <td>{student.location_id}</td> */}
                                <td>{student.contact_no}</td>
                                <td>{student.date_of_birth}</td>
                                <CourseById courseId={student.course_id}/>
                                <td>{student.total_fees}</td>
                                <td>{student.payment_id}</td>
                                <td>{student.student_name}</td>
                                <td>{student.gender}</td>
                                <td>
                                    <img
                                        src={student.photo}
                                        style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: 'auto' }}
                                    />
                                </td>
                                <Qualification qualification_id={student.qualification_id} />
                                <td>{student.registration_date}</td>
                                <td><Link to={`/studentup/${student.student_id}`}>Edit</Link></td>
                                <td><Link to={`/delstud/${student.student_id}`}>Delete</Link></td>
                                <td><Link to={`/findbyid/${student.student_id}`}>Dispaly</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
}