import React from 'react'; 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Typical from 'react-typical';

import { FaCoins, FaComments, FaDollarSign, FaExternalLinkAlt  } from 'react-icons/fa';

function Navigation() {
    return (
        <Navbar expand="lg">
            <Container>
                <Nav.Link href="/" className="display-6 text-white">
                    BabyLoans.Finance is
                    {' '}
                    <Typical
                        steps={['fast', 2500, 'secure', 2500, 'easy to use', 2000]}
                        loop={Infinity}
                        wrapper="b"
                        />
                </Nav.Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Nav.Link href="/#about" className="text-white">ABOUT <FaCoins /></Nav.Link>
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
  
export default Navigation;
