import React from "react";
import { Flex } from "../styles/CommonStyle";
import photo from "../images/about.jpg";
import { Image } from "react-bootstrap";
import "./about.css";

export default function About() {
  return (
    <main>
      <Flex
        background="#e3e3e3"
        direction="column"
        align="center"
        justify="center"
      >
        <h1 style={{ letterSpacing: "0.4rem", padding: " 0 0 5vh" }}>
          -SOME TITLE-
        </h1>

        <Flex
          className="article-1"
          align="center"
          justify="center"
          background="white"
          height="fit-content"
        >
          <Image className="article-1__img" src={photo} alt="" />
          <Flex
            direction="column"
            align="center"
            justify="center"
            padding="5rem 3rem 10rem 3rem"
          >
            <p
              style={{
                fontSize: "1.2rem",
                alignSelf: "start",
                letterSpacing: "0.3rem",
              }}
            >
              MY PHOTOGRAPHY STORY
            </p>
            <h1
              style={{
                fontSize: "6rem",
                // fontStyle: "italic",
                borderBottom: "1px solid rgba(179, 153, 125, 0.4)",
                color: "rgb(179 153 125)",
              }}
            >
              Article Title
            </h1>
            <p className="article-1__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum at
              cumque ad nisi aliquid consequuntur ullam sed maiores, autem
              accusamus, veritatis temporibus amet. Necessitatibus modi iure
              tempore doloremque, molestias doloribus. <br /> <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum at
              cumque ad nisi aliquid consequuntur ullam sed maiores, autem
              accusamus, veritatis temporibus amet. Necessitatibus modi iure
              tempore doloremque, molestias doloribus. <br />
              <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Rerum at cumque ad nisi aliquid consequuntur ullam sed maiores,
              autem accusamus, veritatis temporibus amet. Necessitatibus modi
              iure tempore doloremque, molestias doloribus. <br />
              <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Rerum at cumque ad nisi aliquid consequuntur ullam sed maiores,
              autem accusamus, veritatis temporibus amet. Necessitatibus modi
              iure tempore doloremque, molestias doloribus.
            </p>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
}
