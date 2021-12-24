import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mainPage.css";
import decor from "../images/pwf.svg";
import { Flex } from "../styles/CommonStyle";
import pp from "../images/photo.jpg";
import f1 from "../images/gallery/1.jpeg";
import f2 from "../images/gallery/2.jpeg";
import f3 from "../images/gallery/3.jpeg";
import f4 from "../images/gallery/4.jpeg";
import f5 from "../images/gallery/5.jpeg";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

export default function MainPage() {
  SwiperCore.use([EffectCoverflow, Pagination]);
  return (
    <main>
      <Flex
      id="start"
        background="#e3e3e3"
        height="800px"
        style={{ "flex-wrap": "wrap" }}
      >
        <Flex
          direction="column"
          align="center"
          background="#E3E3E3"
          style={{ flex: 4 }}
        >
          <Flex id="start-slider" background="#E3E3E3">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={f1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={f2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={f3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={f4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={f5} alt="" />
              </SwiperSlide>
            </Swiper>
          </Flex>
          <Flex
            width="80%"
            align="center"
            justify="center"
            margin="-15% 0 70px"
            background="rgba(255, 255, 255, 0.8)"
            radius="20px"
            padding="5%"
            height="60%"
          >
            <Image width="60%" src={decor} alt="" fluid />
          </Flex>
        </Flex>
        <Flex
          bgimg="https://images.pexels.com/photos/4623060/pexels-photo-4623060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          style={{
            flex: 3,
            opacity: 0.3,
            height:"100%"
          }}
        >
          {/* {" "} */}
        </Flex>
      </Flex>
      <Flex
        className="mainBlock"
        align="center"
        justify="center"
        padding="10% 3%"
        height="max-content"
        bgimg="https://media.istockphoto.com/photos/gray-shadows-of-the-flowers-and-grass-picture-id1164993369?k=20&m=1164993369&s=612x612&w=0&h=_lxBLJPiVYqRTwzGGEu0sOGSclUGAqZAi4yELGJOLMo="
      >
        <Container>
          <Row>
            <Col md={6} xs={6}>
              <h1> Знайомтесь, Ярина</h1>
              <p>ЛЮДИНА ПО ТУ СТОРОНУ ОБ’ЄКТИВА</p>
            </Col>
            <Col md={5} xs={6}>
              <Image
                style={{ "border-radius": "50px", position: "relative" }}
                src={pp}
                alt=""
                fluid
              />
            </Col>
          </Row>
          {/* <Row number="0.5">
        <Flex
          className="blueBlock"
          align="center"
          justify="center"
          background="#cde4ee"
          radius="30px"
          width="40%"
          padding="3%"
          margin="-100px 0 0 25%"
          position="relative"
          z="1"
        >
          <p>
            “Емоції роблять фото живими, і це не обов'язково повинен бути сміх.
            (і ще щось бла-бла-бла-бла)”
          </p>
        </Flex>
      </Row> */}
        </Container>
      </Flex>
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
        direction="column"
        padding="5%"
        justify="center"
        align="center"
        bgimg="https://media.istockphoto.com/photos/gray-shadows-of-the-flowers-and-grass-picture-id1164993369?k=20&m=1164993369&s=612x612&w=0&h=_lxBLJPiVYqRTwzGGEu0sOGSclUGAqZAi4yELGJOLMo="
        style={{
          "background-size": "500px",
          "background-position": "left bottom",
        }}
      >
        <h1 style={{ "padding-bottom": "3%" }}>Поширені запитання</h1>
        <Flex
          direction="row"
          style={{ "flex-wrap": "wrap", "text-align": "center" }}
          justify="center"
        >
          <Flex direction="column" align="center" width="250px" padding="1%">
            <h3>Якесь часте запитання?</h3>
            <p>
              Ось коротка відповідь, яка допоможе відвідувачам і потенційним
              клієнтам отримати відповідь на поширене запитання.
            </p>
          </Flex>
          <Flex direction="column" align="center" width="250px" padding="1%">
            <h3>Якесь запитання?</h3>
            <p>Ось коротка відповідь.</p>
          </Flex>
          <Flex direction="column" align="center" width="250px" padding="1%">
            <h3>Якесь часте запитання?</h3>
            <p>
              Ось коротка відповідь, яка допоможе відвідувачам і потенційним
              клієнтам отримати відповідь на поширене запитання.
            </p>
          </Flex>
          <Flex direction="column" align="center" width="250px" padding="1%">
            <h3>Якесь часте запитання?</h3>
            <p>Ось коротка відповідь.</p>
          </Flex>
          <Flex direction="column" align="center" width="250px" padding="1%">
            <h3>Якесь часте запитання?</h3>
            <p>Ось коротка відповідь.</p>
          </Flex>
          <Flex direction="column" align="center" width="250px" padding="1%">
            <h3>Якесь часте запитання?</h3>
            <p>
              Ось коротка відповідь, яка допоможе відвідувачам і потенційним
              клієнтам отримати відповідь на поширене запитання.
            </p>
          </Flex>
          <Flex direction="column" align="center" width="250px" padding="1%">
            <h3>Якесь часте запитання?</h3>
            <p>
              Ось коротка відповідь, яка допоможе відвідувачам і потенційним
              клієнтам отримати відповідь на поширене запитання.
            </p>
          </Flex>
          <Flex direction="column" align="center" width="250px" padding="1%">
            <h3>Якесь часте запитання?</h3>
            <p>
              Ось коротка відповідь, яка допоможе відвідувачам і потенційним
              клієнтам отримати відповідь на поширене запитання.
            </p>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        bgimg="https://images.pexels.com/photos/5853183/pexels-photo-5853183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        height="500px"
        style={{ "background-position": "center" }}
        direction="column"
        justify="center"
      >
        <Swiper
          keyboard={{
            enabled: true,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Flex className="response" direction="column" width="60%">
              <h1>"Captured this season of life so perfectly."</h1>
              <p>
                "Sweet biscuit sugar plum. Halvah chocolate bar jujubes. Dragée
                donut candy gingerbread muffin chocolate bar topping tootsie
                roll. Fruitcake danish sesame snaps pastry tart jujubes halvah
                biscuit. Cupcake donut gingerbread. Bonbon sweet roll oat cake
                pie pastry bonbon jelly-o bonbon jelly beans."
              </p>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex direction="column" width="60%" className="response">
              <h1>Відгук 2</h1>
              <p>Текст відгука</p>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex direction="column" width="60%" className="response">
              <h1>Відгук 3</h1>
              <p>Текст відгука</p>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex direction="column" width="60%" className="response">
              <h1>Відгук 4</h1>
              <p>Текст відгука</p>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex direction="column" width="60%" className="response">
              <h1>Відгук 5</h1>
              <p>Текст відгука</p>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex direction="column" width="60%" className="response">
              <h1>Відгук 6</h1>
              <p>Текст відгука</p>
            </Flex>
          </SwiperSlide>
        </Swiper>
        <Flex
          justify="flex-end"
          padding="20px 0 0 0"
          width="85%"
          height="30%"
          style={{
            "border-top": "1px solid  white",
            "margin-left": "7.5%",
          }}
        >
          <a
            style={{
              "text-decoration": "none",
              color: " white",
              "font-size": "15px",
            }}
            href="#contact"
          >
            ЗАБРОНЮВАТИ ЗАРАЗ
          </a>
        </Flex>
      </Flex>
    </main>
  );
}
