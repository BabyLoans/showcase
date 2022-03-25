import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">BBL•</h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/#about" tag={Link}>
                  ABOUT
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/market" tag={Link}>
                  MARKET
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/#team" tag={Link}>
                  TEAM
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink href="/">
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://babyloans-finance.gitbook.io/welcome-to-gitbook/">
                  Documentation
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="/"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="/"
                target="_blank"
              >
                <i class="fab fa-github" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
