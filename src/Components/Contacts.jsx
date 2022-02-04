import React, { useState } from "react";
import { Container, Form, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Flex } from "../styles/CommonStyle";
import { Parallax } from "react-parallax";
import "../styles/contacts.css";

import { Photos } from "./Arrays";

export default function Contacts() {
  const [date, setDate] = useState(
    `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`
  );

  return (
    <main>
      <Flex
        padding="0 0 5vh"
        background="#e3e3e3"
        align="center"
        justify="center"
      >
        <h1 style={{ letterSpacing: "0.4rem" }}>КОНТАКТИ</h1>
      </Flex>
      <Parallax
        bgImage="https://images.pexels.com/photos/5852476/pexels-photo-5852476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        strength={500}
      >
        <div style={{ height: "50vh", padding: 0 }}>
          <Flex color="white" align="center" justify="center" height="100%">
            <h2
              style={{
                letterSpacing: "0.2rem",
                textAlign: "center",
                "text-shadow": "1px 1px 1px light-gray",
              }}
            >
              BEGIN YOUR PHOTOGRAPHY EXPERIENCE
            </h2>
          </Flex>
        </div>
      </Parallax>
      <Flex id="contacts" padding="0 5.5rem" justify="center" align="center">
        <Flex
          direction="column"
          background="#e7c3c3"
          align="start"
          justify="center"
          width="33%"
          padding=" 5% "
          margin="-15% 0 0"
          position="relative"
          height="max-content"
          z="1"
          style={{ "min-width": "400px" }}
        >
          <Flex
            width="100%"
            color="white"
            direction="column"
            style={{
              "border-bottom": "1px solid white",
              "margin-bottom": "20px",
            }}
          >
            <h3>МІСЦЕЗНАХОДЖЕННЯ</h3>
            <p>
              <a href="https://goo.gl/maps/rstunmHT3o1KrF1n8">
                м.Львів, Україна
              </a>
            </p>
          </Flex>
          <Flex
            width="100%"
            color="white"
            direction="column"
            style={{
              "border-bottom": "1px solid white",
              "margin-bottom": "20px",
            }}
          >
            <h3>КОНТАКТНА ІНФОРМАЦІЯ</h3>
            <p>Зателефонуйте за номером </p>
            <p>
              <a href="tel: +380979092200"> +380 97 909 2200</a>
            </p>
            <p>або напишіть повідомлення використовуючи форму нижче</p>
          </Flex>
          <Flex
            width="100%"
            color="white"
            direction="column"
            style={{
              "border-bottom": "1px solid white",
              "margin-bottom": "20px",
            }}
          >
            <h3>СОЦМЕРЕЖІ</h3>
            <a href="https://www.instagram.com/yaryna.sem/">
              <p>Instagram</p>
            </a>
            <a href="tg://resolve?domain=yaryna_sem">
              <p>Telegram</p>
            </a>
            <a href="">
              <p>Facebook</p>
            </a>
          </Flex>
        </Flex>
        <Flex
          style={{ "flex-wrap": "wrap" }}
          justify="center"
          align="center"
          margin="20px -35px"
          padding="0 5%"
          position="relative"
          z="2"
        >
          {Photos.map(function (el) {
            return (
              <img
                style={{
                  "max-width": "30%",
                  "min-width": "127px",
                  margin: "3px",
                  "aspect-ratio": "1/1",
                  "object-fit": "cover",
                }}
                src={el}
                alt=""
              />
            );
          })}
        </Flex>
      </Flex>
      <Parallax
        bgImage="https://images.pexels.com/photos/4623060/pexels-photo-4623060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        strength={500}
      >
        <Flex
          direction="column"
          margin="20vh 0"
          // height="45vh"
          justify="center"
          align="center"
        >
          <h1
            style={{
              margin: "0 0 -20px",
              color: "white",
              "font-size": "5rem",
              "font-weight": "500",
              "text-shadow": "0px 0px 20px rgba(17, 12, 46, 0.5)",
              letterSpacing: "0.2rem",
            }}
          >
            Contact Form
          </h1>
          <Flex
            style={{
              "box-shadow": "rgba(17, 12, 46, 0.3) 0px 48px 100px 0px",
            }}
            margin="0 5rem"
            width="auto"
            padding="5rem"
            background="white"
            justify="center"
            align="center"
          >
            <Form>
              <Flex width="100%" justify="space-between">
                <Form.Group style={{ margin: "1px" }} className="mb-3">
                  <Form.Control
                    style={{ fontSize: "1.8rem" }}
                    type="text"
                    placeholder="Імʼя"
                  />
                </Form.Group>
                <Form.Group style={{ margin: "1px" }} className="mb-3">
                  <Form.Control
                    style={{ fontSize: "1.8rem" }}
                    type="phone"
                    placeholder="Телефон"
                  />
                </Form.Group>
              </Flex>
              <Form.Group style={{ margin: "1px" }} className="mb-3">
                <Form.Control
                  style={{ fontSize: "1.8rem" }}
                  type="email"
                  placeholder="Еmail"
                />
              </Form.Group>
              <Form.Group className="mb-8">
                <Form.Label style={{ fontSize: "1.8rem" }}>
                  Бажана дата
                </Form.Label>
                <Form.Control
                  style={{ fontSize: "1.8rem" }}
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group
                className="mb-8"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  style={{ margin: "10px 1px", fontSize: "1.8rem" }}
                  as="textarea"
                  placeholder="Коментар..."
                  rows={3}
                />
              </Form.Group>
              <Flex justify="center">
                <Button
                  variant="light"
                  style={{
                    fontSize: "1.8rem",
                    color: "white",
                    background: "#e7c3c3",
                    "border-color": "#e7c3c3",
                  }}
                  type="submit"
                >
                  Надіслати
                </Button>
              </Flex>
            </Form>
          </Flex>
        </Flex>
      </Parallax>
    </main>
  );
}
