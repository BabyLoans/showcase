import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import logo from '../assets/bbl_logo.png';
import teamMember1 from '../assets/team/member_1.jpeg';
import teamMember2 from '../assets/team/member_2.JPG';
import teamMember4 from '../assets/team/member_4.jpg';
import showcaseBackgoundImage from '../assets/showcase-background-image.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import { FaLinkedin, FaGithub, FaBook, FaCoins, FaDownload } from 'react-icons/fa';

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
            <h2 id="#about" className="home-h2"><FaBook /> WHITE PAPER</h2>
            <p className="home-p">Check out the project’s <b>White Paper</b> where you will find all the features and mechanisms used for our platform and its token the The <b>BabyLoans token (BBL)</b>.</p>
            <Button className="home-btn"><FaDownload /> Download</Button>
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
            <Card style={{ width: '18rem' }} className="home-card">
              <Card.Img variant="top" src={teamMember1} className="rounded-circle" />
              <Card.Body>
                <Card.Title><p className='home-p'>Pierre FOURNY</p></Card.Title>
                <Badge bg="dark">Developer</Badge> <Badge bg="dark">Smart Contract Developers</Badge>{' '}
                <Card.Text> <br />
                  <p className="home-p">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </p>
                </Card.Text>
                <a href="https://www.linkedin.com/in/pierre-fourny">
                  <Button variant="dark"><FaLinkedin /> Linkedin</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} className="home-card">
              <Card.Img variant="top" style={{ width: '18rem', height: '18rem' }} src={teamMember2} className="rounded-circle" />
              <Card.Body>
                <Card.Title><p className='home-p'>Rémy LEFEBVRE</p></Card.Title>
                <Badge bg="dark">Developer</Badge> <Badge bg="dark">Smart Contract Developers</Badge>{' '}
                <Card.Text> <br />
                  <p className="home-p">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </p>
                </Card.Text>
                <a href="https://www.linkedin.com/in/remylefebvrefr">
                  <Button variant="dark"><FaLinkedin /> Linkedin</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} className="home-card">
              <Card.Img variant="top" src={logo} className="rounded-circle" />
              <Card.Body>
                <Card.Title><p className='home-p'>Alexandre BEROULE</p></Card.Title>
                <Badge bg="dark">Developer</Badge> <Badge bg="dark">Smart Contract Developers</Badge>{' '}
                <Card.Text> <br />
                  <p className="home-p">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </p>
                </Card.Text>
                <a href="https://fr.linkedin.com/in/thomasnv">
                  <Button variant="dark"><FaLinkedin /> Linkedin</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} className="home-card">
              <Card.Img variant="top" style={{ width: '18rem', height: '18rem' }} src={teamMember4} className="rounded-circle" />
              <Card.Body>
                <Card.Title><p className='home-p'>Thomas NEVIANI</p></Card.Title>
                <Badge bg="dark">Developer</Badge> <Badge bg="dark">Smart Contract Developers</Badge>{' '}
                <Card.Text> <br />
                  <p className="home-p">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </p>
                </Card.Text>
                <a href="https://fr.linkedin.com/in/thomasnv">
                  <Button variant="dark"><FaLinkedin /> Linkedin</Button>
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
