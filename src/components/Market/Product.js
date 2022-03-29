import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

export default function Product() {
  const [tokens, setTokens] = React.useState([]);
  const [rates, setRates] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (isLoading) {
        fetch("https://babyloans-api.herokuapp.com/api/tokens", {
            mode: "cors",
        }).then(async (tokenResponse) => {
            setTokens((await tokenResponse.json())['hydra:member']);
            
        fetch("https://babyloans-api.herokuapp.com/api/rates?isCurrent="+true, {
          mode: "cors",
        }).then(async (rateResponse) => {
            setRates((await rateResponse.json())['hydra:member']);
        });
      });
    }
  }, [isLoading]);

  return (
    <Container>
      <Row>
        <Col md="4">
          <hr className="line-info" />
          <h1>
            MARKET{" "}
            <span className="text-info"> lending on stable coins</span>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Row>
        {tokens.map((token) => {
          return (
            <>
              <Col md="4">
                <Card className="card-coin card-plain" color="default">
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <img
                          alt="..."
                          className="img-center img-fluid"
                          src={token.logoUrl}
                          style={{ width: "50px" }}
                        /><br />
                        <h4 className="text-uppercase">{token.symbol}</h4>
                        <span>Infos</span>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>
                          1.00$
                        </ListGroupItem>
                        <ListGroupItem>BORROW APY : {' '}
                          {rates.map((rate) => {
                              if (rate.token['id'] === token['id']) {
                                  return rate.value;
                              }
                          })}%
                        </ListGroupItem>
                        <ListGroupItem>DEPOSITS APY : {' '}
                          {rates.map((rate) => {
                              if (rate.token['id'] === token['id']) {
                                  return rate.value;
                              }
                          })}%
                        </ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    {token.isActive ? (
                      <Button className="btn-simple" color="success">
                        Available
                      </Button>
                    ) : (
                      <Button className="btn-simple" color="danger" disabled>
                        Unavailable
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </Col>
            </>  
          );
        })}
      </Row>
    </Container>
  );
}