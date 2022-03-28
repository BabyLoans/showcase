import React from "react";

// reactstrap components
import {
    Card,
    CardHeader,
    Container,
    Row,
    Col,
  } from "reactstrap";

export default function Team() {
  return (
    <>
        <Container className="align-items-center">
            <Row>
                <Col lg="6" md="6">
                    <h5 className="text-on-back">DEV</h5>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                    <Card className="card-coin card-plain">
                        <CardHeader>
                            <a href="https://www.linkedin.com/in/pierre-fourny">
                                <img
                                alt="..."
                                className="img-center img-fluid rounded-circle"
                                src={require("assets/img/team/member_1.png").default}
                                />
                            </a>
                        <center> 
                            <h4 className="title">Pierre FOURNY</h4>
                            </center><br />
                            <p className="profile-description">
                                Offices parties lasting outward nothing age few resolve.
                                Impression to discretion understood to we interested he
                                excellence. Him remarkably use projection collecting. Going
                                about eat forty world has round miles.
                            
                            </p>
                        </CardHeader>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container className="align-items-center">
            <Row>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                    <Card className="card-coin card-plain">
                        <CardHeader>
                            <a href="https://www.linkedin.com/in/remylefebvrefr">
                                <img
                                alt="..."
                                className="img-center img-fluid rounded-circle"
                                src={require("assets/img/team/member_2.png").default}
                                />
                            </a>
                            <center> 
                                <h4 className="title">Rémy LEFEBVRE</h4>
                            </center><br />
                            <p className="profile-description">
                                Offices parties lasting outward nothing age few resolve.
                                Impression to discretion understood to we interested he
                                excellence. Him remarkably use projection collecting. Going
                                about eat forty world has round miles.
                            </p>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="6" md="6">
                    <h5 className="text-on-back">DEV</h5>
                </Col>
            </Row>
        </Container>
        <Container className="align-items-center">
            <Row>
                <Col lg="6" md="6">
                    <h5 className="text-on-back">DEV</h5>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                    <Card className="card-coin card-plain">
                        <CardHeader>
                            <a href="https://fr.linkedin.com/in/thomasnv">
                                <img
                                alt="..."
                                className="img-center img-fluid rounded-circle"
                                src={require("assets/img/team/member_4.png").default}
                                />
                            </a>
                        <center> 
                            <h4 className="title">Thomas NEVIANI</h4>
                            </center><br />
                            <p className="profile-description">
                                Offices parties lasting outward nothing age few resolve.
                                Impression to discretion understood to we interested he
                                excellence. Him remarkably use projection collecting. Going
                                about eat forty world has round miles.
                            
                            </p>
                        </CardHeader>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container className="align-items-center">
            <Row>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                    <Card className="card-coin card-plain">
                        <CardHeader>
                            <a href="https://www.linkedin.com/in/alexandre-beroule-72267a15b/">
                                <img
                                alt="..."
                                className="img-center img-fluid rounded-circle"
                                src={require("assets/img/team/member_3.png").default}
                                />
                            </a>
                            <center> 
                                <h4 className="title">Alexandre BEROULE</h4>
                            </center><br />
                            <p className="profile-description">
                                Offices parties lasting outward nothing age few resolve.
                                Impression to discretion understood to we interested he
                                excellence. Him remarkably use projection collecting. Going
                                about eat forty world has round miles.
                            </p>
                        </CardHeader>
                    </Card>
                </Col>
                <Col lg="6" md="6">
                    <h5 className="text-on-back">DEV</h5>
                </Col>
            </Row>
        </Container>
    </>
  );
}
