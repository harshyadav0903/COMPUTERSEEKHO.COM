import React from 'react';
import Row from 'react-bootstrap/Row';
import MyCard1 from "./MyCard1";
import MyCard2 from "./MyCard2";
import MyCard3 from "./MyCard3";

function CardContainer() {
    return (
        <Row>
            <MyCard1 />
            <MyCard2 />
            <MyCard3 />
        </Row>
    );
}

export default CardContainer;