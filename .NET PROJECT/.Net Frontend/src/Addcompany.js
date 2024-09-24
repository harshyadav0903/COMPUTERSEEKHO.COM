import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './addcompany.css'; // Import your custom CSS file for additional styling

export default function AddCompany() {
    const [company, setCompany] = useState({
        company_Id: 0,
        company_Name: "",
        logo: "",
        location: "",
        total_Placement: 0
    });
    let navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCompany(values => ({ ...values, [name]: value }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let demo = JSON.stringify(company);

        fetch("https://localhost:7020/api/Company", {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: demo
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            alert("Company added successfully!");
            navigate('/admindashboard');
        })
        .catch((error) => console.log(error));
    }

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Add Company</h2>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="companyName">
                            <Form.Label>Company Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="company_Name"
                                value={company.company_Name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="companyId">
                            <Form.Label>Company Id:</Form.Label>
                            <Form.Control
                                type="number"
                                name="company_Id"
                                value={company.company_Id}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="logo">
                            <Form.Label>Logo:</Form.Label>
                            <Form.Control
                                type="file"
                                name="logo"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="locationId">
                            <Form.Label>Location :</Form.Label>
                            <Form.Control
                                type="text"
                                name="location"
                                value={company.location}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="totalPlacement">
                            <Form.Label>Total Placement:</Form.Label>
                            <Form.Control
                                type="number"
                                name="total_Placement"
                                value={company.total_Placement}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Add Company
                </Button>
            </Form>
        </Container>
    );
}
