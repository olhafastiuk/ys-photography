import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mainPage.css";
import decor from "../images/pwf.svg";
import { Flex } from "../styles/CommonStyle";
import pp from "../images/photo.jpg";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Photos, questions, SliderPhoto } from "./Arrays";

export default function MainPage() {
  SwiperCore.use([EffectCoverflow, Pagination]);
  return (
    <main>
      <Flex id="firstScreen" background="#e3e3e3" height="80vh">
        <Flex
          direction="column"
          align="center"
          background="#E3E3E3"
          style={{ flex: 4 }}
        >
          <Flex id="start-slider" background="#E3E3E3">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2}
              spaceBetween={10}
              autoplay={{
                delay: 2800,
                disableOnInteraction: false,
              }}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 4,
                slideShadows: true,
              }}
              pagination={true}
              modules={[Autoplay, EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {SliderPhoto.map((el) => (
                <SwiperSlide>
                  <img src={el} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Flex>
          <Flex
            className="firstScreen-text"
            width="80%"
            height="30vh"
            align="center"
            justify="center"
            margin="-15vh 0 5vh 0"
            background="rgba(255, 255, 255, 0.8)"
            radius="20px"
            padding="5px 20%"
          >
            <Image height="100%" src={decor} alt="" />
          </Flex>
        </Flex>
        <Flex
          bgimg="https://images.pexels.com/photos/4623060/pexels-photo-4623060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          style={{
            flex: 3,
            opacity: 0.3,
            height: "100%",
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
        height="100vh"
        bgimg="https://media.istockphoto.com/photos/gray-shadows-of-the-flowers-and-grass-picture-id1164993369?k=20&m=1164993369&s=612x612&w=0&h=_lxBLJPiVYqRTwzGGEu0sOGSclUGAqZAi4yELGJOLMo="
      >
        <Col lg={8} md={6} xs={6}>
          <h1> Знайомтесь, Ярина</h1>
          <p>ЛЮДИНА ПО ТУ СТОРОНУ ОБ’ЄКТИВА</p>
        </Col>
        <Col lg={4} md={5} xs={6}>
          <Image
            style={{ "border-radius": "50px", position: "relative" }}
            src={pp}
            alt=""
            fluid
          />
        </Col>
      </Flex>
      <Flex
        direction="column"
        height="fit-content"
        maxHeight="fit-content"
        align="center"
        background="#E3E3E3"
      >
        <Flex
          width="100%"
          align="center"
          justify="center"
          margin="-2.7rem 0 0 0"
        >
          <p className="decor">GALLERY</p>
        </Flex>
        <Flex
          height="fit-content"
          maxHeight="fit-content"
          justify="center"
          align="center"
          margin="0 0  2rem 0"
          style={{ maxWidth: "1500px", flexWrap: "wrap" }}
          className="gallery"
        >
          {Photos.map((el) => (
            <img src={el} alt="" />
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="column"
        padding="2.5rem 3rem"
        justify="center"
        align="center"
        bgimg="https://media.istockphoto.com/photos/gray-shadows-of-the-flowers-and-grass-picture-id1164993369?k=20&m=1164993369&s=612x612&w=0&h=_lxBLJPiVYqRTwzGGEu0sOGSclUGAqZAi4yELGJOLMo="
        style={{
          "background-size": "35rem",
          "background-position": "left bottom",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", "padding-bottom": "2rem" }}>
          Поширені запитання
        </h1>
        <Flex
          direction="row"
          style={{ "flex-wrap": "wrap", "text-align": "center" }}
          justify="center"
        >
          {questions.map((el) => (
            <Flex
              direction="column"
              align="center"
              width="22rem"
              padding="0.5rem"
            >
              <h2 style={{ fontSize: "1.9rem" }}>{el.title}</h2>
              <p style={{ fontSize: "1.4rem" }}>{el.text}</p>
            </Flex>
          ))}
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
