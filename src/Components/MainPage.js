import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Carousel,
  Form,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mainPage.css";
import decor from "../images/pwf.svg";
import bg from "../images/bg-1.png";
import { Flex, Img } from "../styles/CommonStyle";
import pp from "../images/photo.jpg";
import f1 from "../images/gallery/1.jpeg";
import f2 from "../images/gallery/2.jpeg";
import f3 from "../images/gallery/3.jpeg";
import f4 from "../images/gallery/4.jpeg";
import f5 from "../images/gallery/5.jpeg";

export default function MainPage() {
  let max = "100vh";
  let top = "45%";

  window.addEventListener("resize", function (event) {
    this.window.location.reload(true);
  });
  if (visualViewport.height >= visualViewport.width) {
    if (visualViewport.width >= 600) {
      max = "50vh";
      top = "20%";
    } else {
      max = "35vh";
      top = "20%";
    }
  }
  return (
    <main>
      <Flex margin="-110px 0 0 0" position="relative" height={max}>
        <Carousel fade>
          <Carousel.Item style={{ height: max }}>
            <img className="d-block w-100" src={f1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item style={{ height: max }}>
            <img className="d-block w-100" src={f2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item style={{ height: max }}>
            <img className="d-block w-100" src={f3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item style={{ height: max }}>
            <img className="d-block w-100" src={f4} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item style={{ height: max }}>
            <img className="d-block w-100" src={f5} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <Flex
          width="35vw"
          position="absolute"
          z="5"
          height="inherit"
          className="decor-text"
        >
          <Image src={decor} alt="" fluid />
        </Flex>
      </Flex>
      <Flex
        className="mainBlock"
        align="center"
        justify="center"
        padding="0 3%"
        height={max}
        bgimg="https://media.istockphoto.com/photos/gray-shadows-of-the-flowers-and-grass-picture-id1164993369?k=20&m=1164993369&s=612x612&w=0&h=_lxBLJPiVYqRTwzGGEu0sOGSclUGAqZAi4yELGJOLMo="
      >
        <Container>
          <Row>
            <Col md={6} xs={6}>
              <h1> Знайомтесь, Ярина</h1>
              <p>ЛЮДИНА ПО ТУ СТОРОНУ ОБ’ЄКТИВА</p>
            </Col>
            <Col md={4} xs={6}>
              <Image src={pp} alt="" fluid />
            </Col>
          </Row>
        </Container>
      </Flex>
      {/* <Row number='0.5' >
           <Flex
            className="blueBlock"
            align="center"
            justify="center"
            background="#cde4ee"
            radius="30px"
            width="40%"
            padding="3%"
            margin="-100px 0 0 25%"
          >
            <p>
              “Емоції роблять фото живими, і це не обов'язково повинен бути
              сміх. (і ще щось бла-бла-бла-бла)”
            </p>
          </Flex> 
           </Row> */}
      <Flex
        direction="column"
        height="fit-content"
        maxHeight="fit-content"
        background="#E3E3E3"
      >
        <Flex width="100%" align="center" justify="center" margin="-4% 0 0 0">
          <p className="decor">GALLERY</p>
        </Flex>
        <div className="gallery">
          <img src={f1} alt="" />
          <img src={f2} alt="" />
          <img src={f3} alt="" />
          <img src={f4} alt="" />
          <img src={f5} alt="" />
          <img src={f1} alt="" />
        </div>
      </Flex>
      <Flex
        bgimg="https://media.istockphoto.com/photos/gray-shadows-of-the-flowers-and-grass-picture-id1164993369?k=20&m=1164993369&s=612x612&w=0&h=_lxBLJPiVYqRTwzGGEu0sOGSclUGAqZAi4yELGJOLMo="
        direction="column"
        align="center"
        width="100vw"
        height={max}
        padding="0 20%"
      >
        <Flex width="100%" align="center" justify="center" margin="-6% 0 0 0">
          <p className="decor">CONTACT</p>
        </Flex>
        <Flex
          direction="column"
          align="center"
          justify="center"
          width="100vw"
          height={max}
          padding="0 30%"
        >
          <h1 className="contactFormTitle">Запишися зараз:</h1>
          <Form className="contactForm">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                {/* <Form.Label>Ім`я</Form.Label> */}
                <Form.Control type="text" placeholder="Введіть ім`я" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                {/* <Form.Label>Телефон</Form.Label> */}
                <Form.Control
                  type="number"
                  placeholder="Введіть свій номер телефону"
                />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formGridEmail">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control type="email" placeholder="Введіть email" />
            </Form.Group>
            <Flex align="center" justify="center" margin="30px 0 0">
              <Button variant="white" type="submit">
                Надіслати
              </Button>
            </Flex>
          </Form>
        </Flex>
        {/* <Flex
        position="relative"
          width="100%"
          height="100%"
          // margin="0 10px 0"
          align="center"
          justify="center"
        > */}
        {/* <Image
              fluid
              style={{
                // position: "absolute",
                // right: "20%",
                // height: "68vh",
                aspectRatio:"3/4.5",
                // width: "30vw",
                // "margin-top": "-30%",
              }}
              src="https://images.pexels.com/photos/10041281/pexels-photo-10041281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            /> */}
        {/* <p className="decor contact">CONTACT</p> */}

        {/* <Flex width="5%">
            <p className="decor contact">CONTACT</p>
          </Flex>
        </Flex>*/}
      </Flex>
    </main>
  );
}
