import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './MyCard.css';

function MyCard2() {
    return (
        <Col>
            <Card className="my-card2" style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>PG DBDA</Card.Title>
                    <Card.Text>
                        Post Graduate Diploma in Big Data Analytics (PG DBDA) enables students to explore the fundamental concepts of big data analytics.
                    </Card.Text>
                    <Link to="/PgdbdaPage">
                        <Button variant="primary">
                            Go somewhere
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
}
export default MyCard2;
