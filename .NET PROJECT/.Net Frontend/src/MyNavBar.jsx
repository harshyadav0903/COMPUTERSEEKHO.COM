import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import "./MyNavBar.css";
import {history} from  "react"
import { useNavigate } from 'react-router-dom';

function MyNavbar() {
    const [activeLink, setActiveLink] = useState(null);
    const [isLoggedIn, setLoggedIn] = useState(false);

    const navigate=useNavigate();
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleLoginLogout = () => {
        setLoggedIn(!isLoggedIn);
        // Add logic here for additional logout actions if needed
        navigate('/logout');
    };
    const getLinkStyle = (link) => {
        return {
            fontWeight: activeLink === link ? 'bold' : ''
        };
    };

    return (
        <Navbar bg="body-tertiary" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/Home">ComputerSeekho</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            as={NavLink}
                            to="/Home"
                            exact
                            style={getLinkStyle('/Home')}
                            onClick={() => handleLinkClick('/Home')}
                        >
                            Home
                        </Nav.Link>
                        <NavDropdown title="Placement" id="collapsible-nav-dropdown">
                            <NavDropdown.Item
                                as={Link}
                                to="/ShowPlacement"
                                style={getLinkStyle('/ShowPlacement')}
                                onClick={() => handleLinkClick('/ShowPlacement')}
                            >
                                Batchwise Placements
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/OurRecruitersPage"
                                style={getLinkStyle('/OurRecruitersPage')}
                                onClick={() => handleLinkClick('/OurRecruitersPage')}
                            >
                                Our Recruiters
                            </NavDropdown.Item>
                           
                        </NavDropdown>

                        <NavDropdown title="Courses" id="collapsible-nav-dropdown">
                            <NavDropdown.Item
                                as={Link}
                                to="/PgdacPage"
                                style={getLinkStyle('/PgdacPage')}
                                onClick={() => handleLinkClick('/PgdacPage')}
                            >
                                PG DAC
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/PgDbdaPage"
                                style={getLinkStyle('/PgDbdaPage')}
                                onClick={() => handleLinkClick('/PgDbdaPage')}
                            >
                                PG DBDA
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/PreCat"
                                style={getLinkStyle('/PreCat')}
                                onClick={() => handleLinkClick('/PreCat')}
                            >
                                Pre CAT
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/MscitPage"
                                style={getLinkStyle('/MscitPage')}
                                onClick={() => handleLinkClick('/MscitPage')}
                            >
                                MSCIT
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link
                            as={Link}
                            to="/CampusLife"
                            style={getLinkStyle('/CampusLife')}
                            onClick={() => handleLinkClick('/CampusLife')}
                        >
                            Campus Life
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/FacultyPage"
                            style={getLinkStyle('/FacultyPage')}
                            onClick={() => handleLinkClick('/FacultyPage')}
                        >
                            Faculty
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/ContactUs"
                            style={getLinkStyle('/ContactUs')}
                            onClick={() => handleLinkClick('/ContactUs')}
                        >
                            Get In Touch
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to={isLoggedIn ? "/logout" : "/login"}
                            style={getLinkStyle(isLoggedIn ? "/logout" : "/login")}
                            onClick={() => {
                                // Use conditional logic to navigate based on the login status
                                isLoggedIn ? handleLinkClick("/logout") : handleLinkClick("/login");
                                handleLoginLogout();
                            }}
                        >
                            {isLoggedIn ? 'Logout' : 'Login'}
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
