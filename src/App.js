import { useRouteMatch } from "react-router";
import { Flex, LinK } from "./styles/CommonStyle";
import logo from "./images/logo.svg";
import { Link, Switch, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Gallery from "./Components/Gallery";
import {
  Navbar,
  Container,
  Nav,
  Col,
  Offcanvas,
  Image,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const match = useRouteMatch();
  return (
    <div>
      <Flex height="110px" align="center" padding="1% 5%">
        <Container>
          <Navbar bg="none" expand="lg">
            <Col lg="5" xs="1">
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
                <Navbar.Collapse id="relative-navbar-nav">
                  <Nav.Link>
                    <LinK to="/about">Про мене</LinK>
                  </Nav.Link>
                  <Nav.Link>
                    <LinK to="/gallery">Галерея</LinK>
                  </Nav.Link>
                  <Nav.Link>
                    <LinK to="/price">Пакети послуг</LinK>
                  </Nav.Link>
                  <Nav.Link>
                    <LinK to="/contacts">Контакти</LinK>
                  </Nav.Link>
                </Navbar.Collapse>
              </Nav>
            </Col>
            <Col xs="2">
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
                      <LinK to="/price">Пакети послуг</LinK>
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
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
      </Switch>
      <footer>
        <Row>
          <Col xs={3}>
            <LinK to="/">
              <Image
                fluide
                className="logo"
                src={logo}
                className="logo"
                alt=""
              />
            </LinK>
          </Col>
          <Col xs={5}>
            <Flex direction="column" className="footer-nav">
              <LinK to="/">Головна</LinK>
              <LinK to="/about">Про мене</LinK>
              <LinK to="/gallery">Галерея</LinK>
              <LinK to="/price">Пакети послуг</LinK>
              <LinK to="/contacts">Контакти</LinK>
            </Flex>
          </Col>
          <Col xs={4}>
            <Flex
            className="footer-soc"
              margin="2% "
              justify="space-between"
              align="center"
            >
              <a target="_blank" href="https://www.instagram.com/yaryna.sem/">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1904 0H5.80969C2.60621 0 0 2.60621 0 5.80969V14.1903C0 17.3938 2.60621 20 5.80969 20H14.1903C17.3938 20 20 17.3938 20 14.1904V5.80969C20 2.60621 17.3938 0 14.1904 0ZM18.4375 14.1903C18.4375 16.5322 16.5322 18.4375 14.1904 18.4375H5.80969C3.46777 18.4375 1.5625 16.5322 1.5625 14.1904V5.80969C1.5625 3.46777 3.46777 1.5625 5.80969 1.5625H14.1903C16.5322 1.5625 18.4375 3.46777 18.4375 5.80969V14.1903Z"
                    fill="#CEA29C"
                  />
                  <path
                    d="M10 4.60938C7.02758 4.60938 4.60938 7.02758 4.60938 10C4.60938 12.9724 7.02758 15.3906 10 15.3906C12.9724 15.3906 15.3906 12.9724 15.3906 10C15.3906 7.02758 12.9724 4.60938 10 4.60938ZM10 13.8281C7.88918 13.8281 6.17188 12.1108 6.17188 10C6.17188 7.88918 7.88918 6.17188 10 6.17188C12.1108 6.17188 13.8281 7.88918 13.8281 10C13.8281 12.1108 12.1108 13.8281 10 13.8281Z"
                    fill="#CEA29C"
                  />
                  <path
                    d="M15.4688 5.3125C15.9002 5.3125 16.25 4.96272 16.25 4.53125C16.25 4.09978 15.9002 3.75 15.4688 3.75C15.0373 3.75 14.6875 4.09978 14.6875 4.53125C14.6875 4.96272 15.0373 5.3125 15.4688 5.3125Z"
                    fill="#CEA29C"
                  />
                </svg>
              </a>

              <a href="tel:+380979092200" target="_blank">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_305:74)">
                    <path
                      d="M17.7918 12.3887C17.3823 11.9624 16.8884 11.7344 16.365 11.7344C15.8458 11.7344 15.3477 11.9581 14.9214 12.3845L13.5875 13.7141C13.4778 13.655 13.368 13.6002 13.2625 13.5453C13.1105 13.4693 12.967 13.3976 12.8446 13.3216C11.5951 12.528 10.4596 11.4938 9.37059 10.1557C8.84295 9.48878 8.48837 8.92737 8.23088 8.35751C8.57702 8.04093 8.89782 7.71168 9.21019 7.39509C9.32838 7.2769 9.44657 7.15449 9.56476 7.0363C10.4512 6.14986 10.4512 5.00171 9.56476 4.11527L8.41239 2.9629C8.28154 2.83204 8.14646 2.69697 8.01983 2.56189C7.76656 2.30018 7.50063 2.03003 7.22625 1.77676C6.8168 1.37153 6.32715 1.15625 5.81217 1.15625C5.29719 1.15625 4.7991 1.37153 4.37698 1.77676C4.37276 1.78098 4.37276 1.78098 4.36854 1.7852L2.93336 3.23305C2.39305 3.77336 2.08491 4.43185 2.01737 5.19588C1.91606 6.42845 2.27908 7.5766 2.55768 8.32797C3.2415 10.1726 4.26301 11.8822 5.78684 13.7141C7.6357 15.9218 9.86024 17.6651 12.4014 18.8935C13.3722 19.3536 14.6681 19.8981 16.116 19.991C16.2046 19.9952 16.2975 19.9994 16.3819 19.9994C17.357 19.9994 18.1759 19.6491 18.8175 18.9526C18.8217 18.9441 18.8302 18.9399 18.8344 18.9315C19.0539 18.6655 19.3071 18.4249 19.5731 18.1674C19.7546 17.9944 19.9403 17.8129 20.1218 17.6229C20.5397 17.1881 20.7592 16.6816 20.7592 16.1624C20.7592 15.639 20.5355 15.1367 20.1092 14.7145L17.7918 12.3887ZM19.3029 16.8336C19.2987 16.8336 19.2987 16.8378 19.3029 16.8336C19.1383 17.0108 18.9695 17.1713 18.7879 17.3485C18.5136 17.6103 18.235 17.8846 17.9733 18.1928C17.5469 18.6487 17.0446 18.8639 16.3861 18.8639C16.3228 18.8639 16.2553 18.8639 16.1919 18.8597C14.9383 18.7795 13.7732 18.2899 12.8995 17.872C10.5103 16.7154 8.41239 15.0733 6.66906 12.9923C5.22965 11.2574 4.26724 9.6534 3.62984 7.93118C3.23728 6.88012 3.09376 6.06121 3.15708 5.28875C3.19929 4.79487 3.38924 4.38542 3.73959 4.03507L5.179 2.59566C5.38584 2.40149 5.60534 2.29596 5.82061 2.29596C6.08655 2.29596 6.30182 2.45636 6.4369 2.59144C6.44112 2.59566 6.44534 2.59988 6.44956 2.6041C6.70705 2.84471 6.95188 3.09375 7.20937 3.35968C7.34022 3.49476 7.4753 3.62984 7.61038 3.76914L8.76275 4.92151C9.21019 5.36895 9.21019 5.78262 8.76275 6.23006C8.64033 6.35247 8.52214 6.47489 8.39973 6.59308C8.04515 6.95609 7.70746 7.29379 7.34022 7.62304C7.33178 7.63148 7.32334 7.6357 7.31912 7.64414C6.9561 8.00716 7.02364 8.36173 7.09962 8.60234C7.10384 8.615 7.10806 8.62767 7.11228 8.64033C7.41198 9.36637 7.8341 10.0502 8.47571 10.8649L8.47993 10.8691C9.64496 12.3043 10.8733 13.4229 12.2283 14.2798C12.4014 14.3895 12.5787 14.4782 12.7475 14.5626C12.8995 14.6386 13.043 14.7103 13.1654 14.7863C13.1823 14.7948 13.1992 14.8074 13.216 14.8159C13.3596 14.8876 13.4946 14.9214 13.6339 14.9214C13.9843 14.9214 14.2038 14.7019 14.2756 14.6301L15.7192 13.1865C15.8627 13.043 16.0906 12.8699 16.3566 12.8699C16.6183 12.8699 16.8336 13.0345 16.9644 13.1781C16.9686 13.1823 16.9686 13.1823 16.9729 13.1865L19.2987 15.5123C19.7335 15.9429 19.7335 16.3861 19.3029 16.8336Z"
                      fill="#CEA29C"
                    />
                    <path
                      d="M12.7939 4.7574C13.8998 4.94314 14.9045 5.46656 15.7065 6.26857C16.5085 7.07059 17.0277 8.07522 17.2176 9.18116C17.2641 9.45975 17.5047 9.65392 17.7791 9.65392C17.8128 9.65392 17.8424 9.6497 17.8761 9.64548C18.1885 9.59483 18.3953 9.29935 18.3447 8.98699C18.1167 7.64888 17.4836 6.42898 16.5169 5.46234C15.5503 4.49569 14.3304 3.86252 12.9923 3.63458C12.6799 3.58393 12.3887 3.79076 12.3338 4.09891C12.2789 4.40705 12.4815 4.70675 12.7939 4.7574Z"
                      fill="#CEA29C"
                    />
                    <path
                      d="M21.9622 8.82242C21.5865 6.61899 20.5481 4.61395 18.9525 3.01836C17.3569 1.42277 15.3519 0.384369 13.1485 0.00868771C12.8403 -0.0461871 12.5491 0.16487 12.4942 0.473013C12.4435 0.785377 12.6504 1.07664 12.9627 1.13151C14.9298 1.46498 16.7238 2.39785 18.1505 3.82037C19.5773 5.24712 20.5059 7.0411 20.8394 9.00815C20.8858 9.28675 21.1264 9.48092 21.4008 9.48092C21.4346 9.48092 21.4641 9.4767 21.4979 9.47248C21.806 9.42604 22.0171 9.13056 21.9622 8.82242Z"
                      fill="#CEA29C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_305:74">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a href="tg://resolve?domain=yaryna_sem" target="_blank">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.8689 0.559422C19.6928 0.209521 19.3765 0.000668316 19.0228 0.000668316L0.977231 0C0.558302 0 0.197261 0.291049 0.0575005 0.7415C-0.0822988 1.19195 0.0378138 1.6772 0.363465 1.97778L7.55882 8.61893L8.95829 19.0547C9.02161 19.527 9.32847 19.89 9.73998 19.9795C9.8033 19.9933 9.86631 20 9.92853 20C10.2708 20 10.5865 19.7968 10.7653 19.4476L19.8653 1.67461C20.0436 1.32623 20.045 0.909322 19.8689 0.559422V0.559422ZM10.2592 19.1106C10.1303 19.3624 9.91314 19.3369 9.84967 19.3231C9.78619 19.3094 9.57608 19.2419 9.53741 18.9537L8.15114 8.61644L9.097 7.99718C9.23731 7.90532 9.28578 7.7011 9.20524 7.54107C9.12469 7.38105 8.94568 7.32581 8.80533 7.41763L7.85947 8.03688L0.732045 1.45832C0.533342 1.27495 0.588261 1.03397 0.609823 0.964475C0.631385 0.894976 0.721616 0.668259 0.97727 0.668259L19.0228 0.668927C19.0489 0.668927 19.0743 0.672669 19.0991 0.678193L9.90626 6.6968C9.76596 6.78866 9.71748 6.99288 9.79803 7.15295C9.85216 7.26054 9.95087 7.32077 10.0524 7.32077C10.1018 7.32077 10.152 7.30647 10.1979 7.27636L19.3907 1.2578C19.3823 1.28502 19.3724 1.31188 19.3593 1.33759L10.2592 19.1106Z"
                    fill="#CEA29C"
                  />
                </svg>
              </a>
            </Flex>
          </Col>
        </Row>
        <Row>
          <Flex width="100%" direction="column">
            <p className="copyright">Copyright© 2021. All Rights Reserved </p>
            {/* <p className="copyright">All Rights Reserved</p> */}
          </Flex>
        </Row>
        {/* <Flex
          className="footer-nav"
          width="60%"
          justify="space-between"
          align="center"
        >
          <LinK to="/">Головна</LinK>
          <LinK to="/about">Про мене</LinK>
          <LinK to="/gallery">Галерея</LinK>
          <LinK to="/price">Пакети послуг</LinK>
          <LinK to="/contacts">Контакти</LinK>
        </Flex>
        <Flex
          width="200px"
          margin="1.5% 0 "
          justify="space-between"
          align="center"
        >
          <a target="_blank" href="https://www.instagram.com/yaryna.sem/">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1904 0H5.80969C2.60621 0 0 2.60621 0 5.80969V14.1903C0 17.3938 2.60621 20 5.80969 20H14.1903C17.3938 20 20 17.3938 20 14.1904V5.80969C20 2.60621 17.3938 0 14.1904 0ZM18.4375 14.1903C18.4375 16.5322 16.5322 18.4375 14.1904 18.4375H5.80969C3.46777 18.4375 1.5625 16.5322 1.5625 14.1904V5.80969C1.5625 3.46777 3.46777 1.5625 5.80969 1.5625H14.1903C16.5322 1.5625 18.4375 3.46777 18.4375 5.80969V14.1903Z"
                fill="#CEA29C"
              />
              <path
                d="M10 4.60938C7.02758 4.60938 4.60938 7.02758 4.60938 10C4.60938 12.9724 7.02758 15.3906 10 15.3906C12.9724 15.3906 15.3906 12.9724 15.3906 10C15.3906 7.02758 12.9724 4.60938 10 4.60938ZM10 13.8281C7.88918 13.8281 6.17188 12.1108 6.17188 10C6.17188 7.88918 7.88918 6.17188 10 6.17188C12.1108 6.17188 13.8281 7.88918 13.8281 10C13.8281 12.1108 12.1108 13.8281 10 13.8281Z"
                fill="#CEA29C"
              />
              <path
                d="M15.4688 5.3125C15.9002 5.3125 16.25 4.96272 16.25 4.53125C16.25 4.09978 15.9002 3.75 15.4688 3.75C15.0373 3.75 14.6875 4.09978 14.6875 4.53125C14.6875 4.96272 15.0373 5.3125 15.4688 5.3125Z"
                fill="#CEA29C"
              />
            </svg>
          </a>

          <a href="tel:+380979092200" target="_blank">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_305:74)">
                <path
                  d="M17.7918 12.3887C17.3823 11.9624 16.8884 11.7344 16.365 11.7344C15.8458 11.7344 15.3477 11.9581 14.9214 12.3845L13.5875 13.7141C13.4778 13.655 13.368 13.6002 13.2625 13.5453C13.1105 13.4693 12.967 13.3976 12.8446 13.3216C11.5951 12.528 10.4596 11.4938 9.37059 10.1557C8.84295 9.48878 8.48837 8.92737 8.23088 8.35751C8.57702 8.04093 8.89782 7.71168 9.21019 7.39509C9.32838 7.2769 9.44657 7.15449 9.56476 7.0363C10.4512 6.14986 10.4512 5.00171 9.56476 4.11527L8.41239 2.9629C8.28154 2.83204 8.14646 2.69697 8.01983 2.56189C7.76656 2.30018 7.50063 2.03003 7.22625 1.77676C6.8168 1.37153 6.32715 1.15625 5.81217 1.15625C5.29719 1.15625 4.7991 1.37153 4.37698 1.77676C4.37276 1.78098 4.37276 1.78098 4.36854 1.7852L2.93336 3.23305C2.39305 3.77336 2.08491 4.43185 2.01737 5.19588C1.91606 6.42845 2.27908 7.5766 2.55768 8.32797C3.2415 10.1726 4.26301 11.8822 5.78684 13.7141C7.6357 15.9218 9.86024 17.6651 12.4014 18.8935C13.3722 19.3536 14.6681 19.8981 16.116 19.991C16.2046 19.9952 16.2975 19.9994 16.3819 19.9994C17.357 19.9994 18.1759 19.6491 18.8175 18.9526C18.8217 18.9441 18.8302 18.9399 18.8344 18.9315C19.0539 18.6655 19.3071 18.4249 19.5731 18.1674C19.7546 17.9944 19.9403 17.8129 20.1218 17.6229C20.5397 17.1881 20.7592 16.6816 20.7592 16.1624C20.7592 15.639 20.5355 15.1367 20.1092 14.7145L17.7918 12.3887ZM19.3029 16.8336C19.2987 16.8336 19.2987 16.8378 19.3029 16.8336C19.1383 17.0108 18.9695 17.1713 18.7879 17.3485C18.5136 17.6103 18.235 17.8846 17.9733 18.1928C17.5469 18.6487 17.0446 18.8639 16.3861 18.8639C16.3228 18.8639 16.2553 18.8639 16.1919 18.8597C14.9383 18.7795 13.7732 18.2899 12.8995 17.872C10.5103 16.7154 8.41239 15.0733 6.66906 12.9923C5.22965 11.2574 4.26724 9.6534 3.62984 7.93118C3.23728 6.88012 3.09376 6.06121 3.15708 5.28875C3.19929 4.79487 3.38924 4.38542 3.73959 4.03507L5.179 2.59566C5.38584 2.40149 5.60534 2.29596 5.82061 2.29596C6.08655 2.29596 6.30182 2.45636 6.4369 2.59144C6.44112 2.59566 6.44534 2.59988 6.44956 2.6041C6.70705 2.84471 6.95188 3.09375 7.20937 3.35968C7.34022 3.49476 7.4753 3.62984 7.61038 3.76914L8.76275 4.92151C9.21019 5.36895 9.21019 5.78262 8.76275 6.23006C8.64033 6.35247 8.52214 6.47489 8.39973 6.59308C8.04515 6.95609 7.70746 7.29379 7.34022 7.62304C7.33178 7.63148 7.32334 7.6357 7.31912 7.64414C6.9561 8.00716 7.02364 8.36173 7.09962 8.60234C7.10384 8.615 7.10806 8.62767 7.11228 8.64033C7.41198 9.36637 7.8341 10.0502 8.47571 10.8649L8.47993 10.8691C9.64496 12.3043 10.8733 13.4229 12.2283 14.2798C12.4014 14.3895 12.5787 14.4782 12.7475 14.5626C12.8995 14.6386 13.043 14.7103 13.1654 14.7863C13.1823 14.7948 13.1992 14.8074 13.216 14.8159C13.3596 14.8876 13.4946 14.9214 13.6339 14.9214C13.9843 14.9214 14.2038 14.7019 14.2756 14.6301L15.7192 13.1865C15.8627 13.043 16.0906 12.8699 16.3566 12.8699C16.6183 12.8699 16.8336 13.0345 16.9644 13.1781C16.9686 13.1823 16.9686 13.1823 16.9729 13.1865L19.2987 15.5123C19.7335 15.9429 19.7335 16.3861 19.3029 16.8336Z"
                  fill="#CEA29C"
                />
                <path
                  d="M12.7939 4.7574C13.8998 4.94314 14.9045 5.46656 15.7065 6.26857C16.5085 7.07059 17.0277 8.07522 17.2176 9.18116C17.2641 9.45975 17.5047 9.65392 17.7791 9.65392C17.8128 9.65392 17.8424 9.6497 17.8761 9.64548C18.1885 9.59483 18.3953 9.29935 18.3447 8.98699C18.1167 7.64888 17.4836 6.42898 16.5169 5.46234C15.5503 4.49569 14.3304 3.86252 12.9923 3.63458C12.6799 3.58393 12.3887 3.79076 12.3338 4.09891C12.2789 4.40705 12.4815 4.70675 12.7939 4.7574Z"
                  fill="#CEA29C"
                />
                <path
                  d="M21.9622 8.82242C21.5865 6.61899 20.5481 4.61395 18.9525 3.01836C17.3569 1.42277 15.3519 0.384369 13.1485 0.00868771C12.8403 -0.0461871 12.5491 0.16487 12.4942 0.473013C12.4435 0.785377 12.6504 1.07664 12.9627 1.13151C14.9298 1.46498 16.7238 2.39785 18.1505 3.82037C19.5773 5.24712 20.5059 7.0411 20.8394 9.00815C20.8858 9.28675 21.1264 9.48092 21.4008 9.48092C21.4346 9.48092 21.4641 9.4767 21.4979 9.47248C21.806 9.42604 22.0171 9.13056 21.9622 8.82242Z"
                  fill="#CEA29C"
                />
              </g>
              <defs>
                <clipPath id="clip0_305:74">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>

          <a href="tg://resolve?domain=yaryna_sem" target="_blank">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8689 0.559422C19.6928 0.209521 19.3765 0.000668316 19.0228 0.000668316L0.977231 0C0.558302 0 0.197261 0.291049 0.0575005 0.7415C-0.0822988 1.19195 0.0378138 1.6772 0.363465 1.97778L7.55882 8.61893L8.95829 19.0547C9.02161 19.527 9.32847 19.89 9.73998 19.9795C9.8033 19.9933 9.86631 20 9.92853 20C10.2708 20 10.5865 19.7968 10.7653 19.4476L19.8653 1.67461C20.0436 1.32623 20.045 0.909322 19.8689 0.559422V0.559422ZM10.2592 19.1106C10.1303 19.3624 9.91314 19.3369 9.84967 19.3231C9.78619 19.3094 9.57608 19.2419 9.53741 18.9537L8.15114 8.61644L9.097 7.99718C9.23731 7.90532 9.28578 7.7011 9.20524 7.54107C9.12469 7.38105 8.94568 7.32581 8.80533 7.41763L7.85947 8.03688L0.732045 1.45832C0.533342 1.27495 0.588261 1.03397 0.609823 0.964475C0.631385 0.894976 0.721616 0.668259 0.97727 0.668259L19.0228 0.668927C19.0489 0.668927 19.0743 0.672669 19.0991 0.678193L9.90626 6.6968C9.76596 6.78866 9.71748 6.99288 9.79803 7.15295C9.85216 7.26054 9.95087 7.32077 10.0524 7.32077C10.1018 7.32077 10.152 7.30647 10.1979 7.27636L19.3907 1.2578C19.3823 1.28502 19.3724 1.31188 19.3593 1.33759L10.2592 19.1106Z"
                fill="#CEA29C"
              />
            </svg>
          </a>
        </Flex>
        <Flex width="80%" justify="center" align="center" direction="column">
          <p className="copyright">Copyright© 2021</p>
          <p className="copyright">All Rights Reserved</p>
        </Flex> */}
      </footer>
    </div>
  );
}

export default App;
