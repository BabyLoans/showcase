import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import logo from '../assets/bbl_logo.png';
import teamMember4 from '../assets/team_member_4.jpg';
import showcaseBackgoundImage from '../assets/showcase-background-image.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import { FaLinkedin, FaGithub, FaUserLock, FaCoins } from 'react-icons/fa';

import '../style/pages/css/showcase.css';

function Home() {
  return (
    
    <div className="background-showcase">
      <Navigation />
      <br /> <br />
      <Container>
        <Row>
          <Col></Col>
          <Col xs="auto">
            <div className="home-main">
                <img src={logo} alt="logo" className="home-logo"/>
              <h2 className="display-6 text-white">THE LIQUIDITY PROTOCOL</h2>
              <h3 className="display-6 h3-linear-gradient"><b>$ 14 785 874, 58</b></h3>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <br /> <br />
        <Row>
          <Col>
            <h2 id="#about" className="home-h2"><FaCoins /> ABOUT</h2>
            <p className="home-p">
              <b>Babyloans.Finance</b> is a decentralized web application for earning interest on stablecoin borrowing and deposits.<br /><br />
              <b>The BabyLoans token (BBL)</b> is powered by the Binance Smart Chain blockchain, it stands out for its simplicity, low transaction fees but also its speed of execution of a transaction.<br /><br />
              The earning mechanism is quite similar to traditional finance, the loans will bring interest to the borrowers, and the loans will generate interest that will be directly returned to the borrowers.<br /><br />
            </p>
          </Col>
          <Col></Col>
          <Col>
            <h2 id="#about" className="home-h2"><FaUserLock /> SECURITY</h2>
            <p></p>
          </Col>
        </Row>
        <br /> <br />
        <Row>
          <Col>
          </Col>
          <Col> 
            <div className="home-main">
              <h2 className="home-h2">TEAM</h2>
              <center>
                <p className="home-p">
                  BabyLoans.Finance is a project created by a team of 4 developers within the ESIEE-IT school. <br /><br />
                  <a href="https://github.com/BabyLoans">
                    <Button className="home-btn"><FaGithub /> GitHub</Button>
                  </a>
                </p>
              </center>
            </div>
          </Col>
          <Col>
          </Col>
        </Row>
          <br /> <br />
        <Row>
          <Col>
            <Card style={{ width: '18rem' }} bg="dark">
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title><p className='home-p'>Pierre FOURNY</p></Card.Title>
                <Badge bg="danger">Developer</Badge> <Badge bg="info">Smart Contract Developers</Badge>{' '}
                <Card.Text> <br />
                  <p className="home-p">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </p>
                </Card.Text>
                <Button className="home-btn"><FaLinkedin /> Linkedin</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} bg="dark">
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title><p className='home-p'>Rémy LEFEBVRE</p></Card.Title>
                <Badge bg="danger">Developer</Badge> <Badge bg="info">Smart Contract Developers</Badge>{' '}
                <Card.Text> <br />
                  <p className="home-p">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </p>
                </Card.Text>
                <Button className="home-btn"><FaLinkedin /> Linkedin</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} bg="dark">
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title><p className='home-p'>Alexandre BEROULE</p></Card.Title>
                <Badge bg="danger">Developer</Badge> <Badge bg="info">Smart Contract Developers</Badge>{' '}
                <Card.Text> <br />
                  <p className="home-p">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </p>
                </Card.Text>
                <Button className="home-btn"><FaLinkedin /> Linkedin</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} bg="dark">
              <Card.Img variant="top" src={teamMember4} />
              <Card.Body>
                <Card.Title><p className='home-p'>Thomas NEVIANI</p></Card.Title>
                <Badge bg="danger">Developer</Badge> <Badge bg="info">UX/UI Designer</Badge>{' '}
                <Card.Text> <br />
                  <p className="home-p">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </p>
                </Card.Text>
                <a href="https://fr.linkedin.com/in/thomasnv">
                  <Button className="home-btn"><FaLinkedin /> Linkedin</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br /> <br />
        <Row>
          <Col>
          </Col>
          <Col>
            <img src={showcaseBackgoundImage} alt="showcaseBackgoundImage" className="showcase-background-image"/>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
