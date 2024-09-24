import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './MyCard.css';
function MyCard1() {
    return (
        <Col>
            <Card className="my-card1" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>PG DAC</Card.Title>
                    <Card.Text>
                        Post Graduate Diploma in Advanced Computing (PG DAC) grooms engineers and IT professionals for a career in Software Development.
                    </Card.Text>
                    <Link to="/PgdacPage">
                        <Button variant="primary">
                            Go somewhere
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
}
export default MyCard1;
