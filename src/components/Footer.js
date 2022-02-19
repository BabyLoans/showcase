import React from 'react'; 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import { FaUsers, FaComments, FaDollarSign, FaExternalLinkAlt  } from 'react-icons/fa';

function Footer() {
    return (
        <Navbar className="footer-background" expand="lg">
            <Container>
                <Nav.Link href="/" className="display-6 text-white">
                    BabyLoans.Finance
                </Nav.Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Nav.Link href="/#about" className="text-white">ABOUT <FaUsers /></Nav.Link>
                    <Nav.Link href="/markets" className="text-white">MARKETS <FaDollarSign /></Nav.Link>
                    <Nav.Link href="https://babyloans-finance.gitbook.io/welcome-to-gitbook/" className="text-white">FAQ <FaComments /></Nav.Link>
                    <Nav.Link target="_blank" href="https://babyloans-front.herokuapp.com">
                        <Button variant="dark">ENTER APP <FaExternalLinkAlt /></Button>
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
  
export default Footer;