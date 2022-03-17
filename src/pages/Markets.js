import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TableMarkets from '../components/TableMarkets';

import showcaseBackgoundImage from '../assets/showcase-background-image.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaDollarSign } from 'react-icons/fa';

import '../style/pages/css/showcase.css';

function Markets() {
    return (
      <div className="background-showcase">
        <Navigation />
        <br /> <br />
        <Container>
          <Row>
            <Col>
              <h2 id="#about" className="home-h2"><FaDollarSign /> MARKETS</h2>
              <br />
              <TableMarkets /> <br />
            </Col>
          </Row>
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
  
export default Markets;