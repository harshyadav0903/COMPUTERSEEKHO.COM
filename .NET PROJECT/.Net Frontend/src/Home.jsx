import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ScrollingText from "./ScrollingText";
import Footer from "./Footer";


import VerticalScrollingNotifications from "./VerticalScrollingNotifications";
import CardContainer from "./CardContainer";
function Home() {
    return (
        <div>
            <div>
              <ScrollingText />
            <VerticalScrollingNotifications/>
            <Image src="/Images/HomePhoto.png" thumbnail />
            <CardContainer/>
            

            </div>
        <Footer/>
        </div>
    );
}
export default Home;
