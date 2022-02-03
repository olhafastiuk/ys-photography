import React from "react";
import { Col, Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Flex, LinK } from "../styles/CommonStyle";
import logo from "../images/logo.svg";

export default function Navigation() {
  return (
    <Flex id="navigation" align="start" padding="1% 5% 0" background="#e3e3e3">
      <Container>
        <Navbar bg="#e3e3e3" expand="lg">
          <Col lg="5" xs="1" style={{ display: "flex", alignItems: "center" }}>
            <Navbar.Brand>
              <LinK to="/">
                <Image
                  fluide
                  className="logo"
                  src={logo}
                  className="logo"
                  alt=""
                />
              </LinK>
            </Navbar.Brand>
          </Col>
          <Col lg="7" xs="9">
            <Nav className="me-auto">
              <Navbar.Collapse
                style={{ display: "none" }}
                id="relative-navbar-nav"
              >
                <Nav.Link>
                  <LinK to="/about">Про мене</LinK>
                </Nav.Link>
                <Nav.Link>
                  <LinK to="/gallery">Галерея</LinK>
                </Nav.Link>
                <Nav.Link>
                  <LinK to="/services">Пакети послуг</LinK>
                </Nav.Link>
                <Nav.Link>
                  <LinK to="/contacts">Контакти</LinK>
                </Nav.Link>
              </Navbar.Collapse>
            </Nav>
          </Col>
          <Col xs="2" style={{ display: "flex", alignItems: "center" }}>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
          </Col>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto">
                <Navbar.Collapse id="offcanvas-navbar-nav">
                  <Nav.Link>
                    <LinK to="/about">Про мене</LinK>
                  </Nav.Link>
                  <Nav.Link>
                    <LinK to="/gallery">Галерея</LinK>
                  </Nav.Link>
                  <Nav.Link>
                    <LinK to="/services">Пакети послуг</LinK>
                  </Nav.Link>
                  <Nav.Link>
                    <LinK to="/contacts">Контакти</LinK>
                  </Nav.Link>
                </Navbar.Collapse>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Container>
    </Flex>
  );
}
