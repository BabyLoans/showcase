import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Home() {

  return (
    
    <div className="section section-basic" id="basic-elements">
       <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path5.png").default}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/dashboard.png").default}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">100%</CardTitle>
                        <p className="card-category text-white">Safe</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">573 K</CardTitle>
                        <p className="card-category text-white">
                          Satisfied customers
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">10 425</CardTitle>
                        <p className="card-category text-white">Business</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-info" />
                  <h3><i className="fas fa-question-circle" /> What is BabyLoans ?</h3>
                  <p>
                    <b className="text-info">Babyloans.Finance</b> is a decentralized web application for earning interest on stablecoin borrowing and deposits.<br /><br />
                    <b className="text-info">The BabyLoans token (BBL)</b> is powered by the Binance Smart Chain blockchain, it stands out for its simplicity, low transaction fees but also its speed of execution of a transaction.<br /><br />
                    <b className="text-info">The earning mechanism</b> is quite similar to traditional finance, the loans will bring interest to the borrowers, and the loans will generate interest that will be directly returned to the borrowers.<br /><br />
                  </p>
                </div>
              </Col>
            </Row>
            
            <Row><Col>&nbsp;</Col></Row>
            <Row><Col>&nbsp;</Col></Row>
            <Row><Col>&nbsp;</Col></Row>

            <Row className="row-grid justify-content-between">
              <Col md="5"> 
                <hr className="line-info" />
                <h3><i className="fas fa-book" /> WHITE PAPER</h3>
                <p>
                  Check out the project’s <b>White Paper</b> where you will find all the features and mechanisms used for our platform and its token the The  <b className="text-info">BabyLoans token</b>.
                </p><br />
                <Button className="nav-link d-none d-lg-block" color="info">
                  <i className="fas fa-download" /> Download
                </Button>
              </Col>

              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-info" />
                  <h3><i className="fas fa-users" /> TEAM</h3>
                  <p>
                    BabyLoans.Finance is a project created by a team of 4 developers within the ESIEE-IT school. <br /><br />
                    <a href="https://github.com/BabyLoans">
                      <Button className="nav-link d-none d-lg-block" color="info">
                        <i className="fab fa-github" /> GitHub
                      </Button>
                    </a>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </div>
  );
}
