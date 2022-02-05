import React from 'react'; 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Typical from 'react-typical';

import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
                    <Nav.Link href="#" className="text-white">ABOUT <FontAwesomeIcon icon={faUsers} /></Nav.Link>
                    <Nav.Link href="#" className="text-white">MARKETS <FontAwesomeIcon icon={faDollarSign} /></Nav.Link>
                    <Nav.Link href="#" className="text-white">FAQ <FontAwesomeIcon icon={faComments} /></Nav.Link>
                    <Nav.Link href="#">
                        <Button variant="dark">ENTER APP <FontAwesomeIcon icon={faArrowRightToBracket} /></Button>
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
  
export default Navigation;
