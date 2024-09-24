import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './MyCard.css';

function MyCard3() {
    return (
        <Col>
            <Card className="my-card3" style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Pre CAT</Card.Title>
                    <Card.Text>
                        The admission to all PG Courses by C-DAC ACTS is through an All-India C-DAC Common Admission Test (C-CAT)
                    </Card.Text>
                    <Link to="/PreCat">
                        <Button variant="primary">
                            Go somewhere
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
}
export default MyCard3;
