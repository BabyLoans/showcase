import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

export default function Home() {

  
  return (
    <div className="section section-basic" id="basic-elements">
      <Container>
        <Row>
          <Col>
            <h2 id="#about"> <i className="fas fa-question-circle" /> ABOUT</h2>
            <p>
              <b className="text-info">Babyloans.Finance</b> is a decentralized web application for earning interest on stablecoin borrowing and deposits.<br /><br />
              <b className="text-info">The BabyLoans token (BBL)</b> is powered by the Binance Smart Chain blockchain, it stands out for its simplicity, low transaction fees but also its speed of execution of a transaction.<br /><br />
              <b className="text-info">The earning mechanism</b> is quite similar to traditional finance, the loans will bring interest to the borrowers, and the loans will generate interest that will be directly returned to the borrowers.<br /><br />
            </p>
          </Col>
          <Col> </Col>
          <Col>
            <h2 id="#about"> <i className="fas fa-book" /> WHITE PAPER</h2>
            <p>Check out the project’s <b>White Paper</b> where you will find all the features and mechanisms used for our platform and its token the The  <b className="text-info">BabyLoans token</b>.</p><br />
            <Button className="nav-link d-none d-lg-block" color="info">
              <i className="fas fa-download" /> Download
            </Button>
          </Col>
        </Row>
        <br /> <br />
        <Row>
          <Col>
          </Col>
          <Col> 
            <center>
              <h2>TEAM</h2>
              <p>
                BabyLoans.Finance is a project created by a team of 4 developers within the ESIEE-IT school. <br /><br />
                <a href="https://github.com/BabyLoans">
                  <Button className="nav-link d-none d-lg-block" color="info">
                    <i class="fab fa-github" /> GitHub
                  </Button>
                </a>
              </p>
            </center>
          </Col>
          <Col>
          </Col>
        </Row>
        <br /> <br /><br /> <br />
        <Row>
          <Col>
            <a href="https://www.linkedin.com/in/pierre-fourny">
              <img
                alt="..."
                className="img-fluid rounded-circle shadow"
                src={require("assets/img/team/member_1.jpeg").default}
                style={{ width: "150px" }}
              />
            </a>
          </Col>
          <Col></Col>
          <Col>
            <a href="https://www.linkedin.com/in/remylefebvrefr">
              <img
                alt="..."
                className="img-fluid rounded-circle shadow"
                src={require("assets/img/team/member_2.JPG").default}
                style={{ width: "150px" }}
              />
            </a>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <a href="https://www.linkedin.com/in/alexandre-beroule-72267a15b/">
              <img
                alt="..."
                className="img-fluid rounded-circle shadow"
                src={require("assets/img/team/member_2.JPG").default}
                style={{ width: "150px" }}
              />
            </a>
          </Col>
          <Col></Col>
          <Col>
            <a href="https://fr.linkedin.com/in/thomasnv">
              <img
                alt="..."
                className="img-fluid rounded-circle shadow"
                src={require("assets/img/team/member_2.JPG").default}
                style={{ width: "150px" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
