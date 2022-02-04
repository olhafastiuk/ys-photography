import React, { useState } from "react";
import { Col, Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Flex, LinK } from "../styles/CommonStyle";
import logo from "../images/logo.svg";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <Flex id="navigation" align="center" background="#e3e3e3">
        <Container>
          <Navbar bg="#e3e3e3" expand="lg">
            <Col
              lg="5"
              xs="1"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Navbar.Brand>
                <LinK to="/">
                  <Image className="logo" src={logo} className="logo" alt="" />
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
              <Navbar.Toggle
                aria-controls="offcanvasNavbar"
                onClick={() => {
                  showMenu ? setShowMenu(false) : setShowMenu(true);
                }}
              />
            </Col>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              show={showMenu}
            >
              <Offcanvas.Header onClick={() => setShowMenu(false)} closeButton>
                {/* <Offcanvas.Title>Меню</Offcanvas.Title> */}
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto">
                  <Navbar.Collapse id="offcanvas-navbar-nav">
                    <Nav.Link>
                      <LinK onClick={() => setShowMenu(false)} to="/about">
                        Про мене
                      </LinK>
                    </Nav.Link>
                    <Nav.Link>
                      <LinK onClick={() => setShowMenu(false)} to="/gallery">
                        Галерея
                      </LinK>
                    </Nav.Link>
                    <Nav.Link>
                      <LinK onClick={() => setShowMenu(false)} to="/services">
                        Пакети послуг
                      </LinK>
                    </Nav.Link>
                    <Nav.Link>
                      <LinK onClick={() => setShowMenu(false)} to="/contacts">
                        Контакти
                      </LinK>
                    </Nav.Link>
                  </Navbar.Collapse>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        </Container>
      </Flex>
    </header>
  );
}
