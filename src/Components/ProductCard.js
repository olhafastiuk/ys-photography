import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Flex } from "../styles/CommonStyle";
import "./services.css";

export default function ProductCard({ photo, title, price, description }) {
  return (
    <Flex
      className="card"
      direction="column"
      background="transparent"
      margin="1rem"
      align="center"
      justify="center"
    >
      <Flex
        direction="column"
        background="white"
        margin="1rem"
        justify="start"
        align="center"
        className="card__side card__side--front"
      >
        <img className="card-img" src={photo} alt="" />
        <h1 style={{ fontSize: "2.8rem", margin: "2.2rem 0 " }}>{title}</h1>
        {/* <span>{price}</span> */}
        {/* <p
          style={{
            alignSelf: "start",
            padding: "0 0 0 1rem",
            fontSize: "1.5rem",
          }}
        >
          У вартість входить:
        </p>

        <ul style={{ fontSize: "1.5rem" }}>{description}</ul> */}
        {/* <Button
        variant="light"
        style={{
          fontSize: "1.8rem",
          color: "white",
          background: "#e7c3c3",
          "border-color": "#e7c3c3",
          marginBottom: "2rem",
        }}
      >
        <a
          style={{
            "text-decoration": "none",
            color: " white",
            "font-size": "1rem",
          }}
          href="#contacts"
        >
          ЗАБРОНЮВАТИ ЗАРАЗ
        </a>
      </Button> */}
      </Flex>
      <Flex
        direction="column"
        // background="rgba(212, 172, 178, 0.9)"
        background="rgba(253, 253, 253, 0.7)"
        color="rgb(159, 76, 100)"
        // color="black"
        margin="1rem"
        align="center"
        justify="center"
        padding="20px"
        className="card__side card__side--back"
      >
        <h1
          style={{
            textShadow: "3px 3px 15px white",
            fontSize: "3rem",
            fontWeight: "500",
            margin: "1rem 0",
          }}
        >
          {price}.0 ₴
        </h1>

        <h2
          style={{
            color: "black",
            alignSelf: "start",
            padding: "0 0 0 1rem",
            fontSize: "2rem",
          }}
        >
          У вартість входить:
        </h2>

        <ul
          style={{
            color: "black",
            fontSize: "1.5rem",
          }}
        >
          {description}
        </ul>

        {/* <Button
        variant="light"
        style={{
          fontSize: "1.8rem",
          color: "white",
          background: "#e7c3c3",
          "border-color": "#e7c3c3",
          marginBottom: "2rem",
        }}
      >
        <a
          style={{
            "text-decoration": "none",
            color: " white",
            "font-size": "1rem",
          }}
          href="#contacts"
        >
          ЗАБРОНЮВАТИ ЗАРАЗ
        </a>
      </Button> */}
      </Flex>
    </Flex>
  );
}
