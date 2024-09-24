import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const FacultyPage = () => {
  const facultyData = [
    { id: 1, name: 'Ketki Acharya', position: 'Professor', department: 'C, Web Programming & .Net', image: '/Images/Faculty/Faculty1.png' },
    { id: 2, name: 'Nitin Vijaykar', position: 'Professor', department: 'C++, Core & Enterprise Java', image: '/Images/Faculty/Faculty2.png' },
    { id: 3, name: 'Jayant Ponkshe', position: 'Professor', department: 'Project Mentor', image: '/Images/Faculty/Faculty3.png' },
    { id: 4, name: 'Vikram Nayak', position: 'Professor', department: 'Soft Skills', image: '/Images/Faculty/Faculty4.png' },
    { id: 5, name: 'Pradeep Tripathi', position: 'Assist. Professor', department: 'Big Data, AI & ML', image: '/Images/Faculty/Faculty5.png' },
  ];

  return (
    <Container>
      <h1 className="mt-4 mb-4">Faculty Members</h1>
      <Row>
        {facultyData.map(faculty => (
          <Col key={faculty.id} lg={12} md={6} sm={12} className="mb-4">
            <Card>
              <Card.Img variant="top" src={faculty.image} alt={faculty.name} />
              <Card.Body>
                <Card.Title>{faculty.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{faculty.position}</Card.Subtitle>
                <Card.Text>Department: {faculty.department}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FacultyPage;