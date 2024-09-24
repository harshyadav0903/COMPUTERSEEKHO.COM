


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Nav, ButtonGroup,Button,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListAllStudents from './ListAllStudents';
import {   Row, Col } from 'react-bootstrap'; // Make sure to import these components from your UI framework

export default function Student() {
 
  const [studentName, setStudentName] = useState('');

  const [studentId, setStudentId] = useState('');
  const[contact_no,setphoneno]=useState('');

  const handlephonenoButtonClick = () => {
    if (contact_no.trim() !== '') {
      window.location.href = (`/findbyphoneno/${contact_no}`);

    }
  };
  const handleNameButtonClick = () => {
    if (studentName.trim() !== '') {
      window.location.href = (`/findbyname/${studentName}`);

    }
  };
  const handleIdButtonClick = () => {
    if (studentId.trim() !== '') {
      window.location.href = `/findbyid/${studentId}`;
    }
  };

  return (
    <div className="App">
      <div style={{ backgroundColor: "#17a2b8", padding: "10px", display: "flex", justifyContent: "center" }}>
      {/* <Link to="/Home" style={{ textDecoration: "none", marginRight: "10px" }}>
        <button style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Home</button>
      </Link> */}
      <Link to="/ListAllStudents" style={{ textDecoration: "none", marginRight: "10px" }}>
        <button style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px" }}>List Students</button>
      </Link>
      <Link to="/addStudent" style={{ textDecoration: "none", marginRight: "10px" }}>
        <button style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Add Students</button>
      </Link>
      {/* <Link to="/addCompany" style={{ textDecoration: "none", marginRight: "10px" }}>
        <button style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Add Company</button>
      </Link> */}
      <Link to="/CompaniesDetails" style={{ textDecoration: "none", marginRight: "10px" }}>
        <button style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Companies Details</button>
      </Link>
    </div>

      <div>
        
<div>
  
<div style={{ float: "left", marginRight: "20px" }}> {/* Define inline styles */}
      <Button 
        variant="link" 
        as={Link} 
        to="/feespending" 
        style={{
          color: "#007bff",
          textDecoration: "none",
          fontSize: "16px",
          padding: "10px 20px",
          border: "1px solid #007bff",
          borderRadius: "5px",
          backgroundColor: "#fff",
          transition: "background-color 0.3s, color 0.3s",
        }}
        hoverStyle={{
          backgroundColor: "#007bff",
          color: "#fff",
        }}
      >
        Fees pending Students
      </Button>
    </div>
</div>
<br></br>
<br></br>
    <div>
    <h4 className="custom-heading" align="left">Find student by</h4>

      <Row>
        <Col>
          <Form.Group controlId="studentId">
            <Form.Control
              type="text"
              placeholder="Enter Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Button variant="link" onClick={handleIdButtonClick}>
            Find by ID
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="studentName">
            <Form.Control
              type="text"
              placeholder="Enter Student Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Button variant="link" onClick={handleNameButtonClick}>
            Find by Name
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="contact_no">
            <Form.Control
              type="text"
              placeholder="Enter Student phoneno"
              value={contact_no}
              onChange={(e) => setphoneno(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Button variant="link" onClick={handlephonenoButtonClick}>
            Find by Phone no:
          </Button>
        </Col>
      </Row>
    </div>
    <ListAllStudents/>
      </div>

      <Outlet />
    </div>
  );
}