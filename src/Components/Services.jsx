import React, { useState } from "react";
import { Container, Form, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Flex } from "../styles/CommonStyle";
import { Parallax, Background } from "react-parallax";
import { Photos } from "./Arrays";
import f2 from "../images/gallery/3.jpeg";

export default function Services() {
  return (
    <main>
      <Parallax
        bgImage="https://images.pexels.com/photos/4623060/pexels-photo-4623060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        strength={500}
      >
        <div style={{ height: "50vh", padding: 0 }}>
          <Flex
            direction="column"
            background="rgba(0, 0, 0, 0.2)"
            color="white"
            align="center"
            justify="center"
            height="100%"
          >
            <p
              style={{
                textAlign: "center",
                "text-shadow": "1px 1px 1px light-gray",
              }}
            >
              A THOUGHTFUL AND ELEVATED PHOTOGRAPHY EXPERIENCE
            </p>
            <h1
              style={{
                textAlign: "center",
                "text-shadow": "1px 1px 1px light-gray",
                fontSize: "50px",
              }}
            >
              Motherhood Collection
            </h1>
          </Flex>
        </div>
      </Parallax>
      <Flex height="100%">
        <Flex padding="5%" width="60%" direction="column" height="max-content">
          <h3
            style={{
              "align-self": "center",
              fontSize: "40px",
              fontStyle: "italic",
              textAlign: "center",
              marginBottom: "50px",
              letterSpacing: "0.05em",
            }}
          >
            Досвід, який ви оціните
          </h3>
          <p style={{ columnCount: "2", columnGap: "30px" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            alias qui consectetur aut, debitis harum labore veniam velit iste
            fugiat odio sit delectus quidem consequatur. Est necessitatibus
            velit eius quaerat!
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            blanditiis similique alias debitis explicabo facilis. Neque
            provident, labore tempora laboriosam nisi ut reiciendis animi
            doloremque eum explicabo. Optio, dicta ipsam. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Illum velit sunt consectetur
            consequuntur assumenda alias laudantium provident, aspernatur vitae,
            vero minus laborum quaerat necessitatibus quis est ipsum? Quos,
            maxime repellat!
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ea
            commodi officiis, architecto corporis optio voluptatibus totam eum
            alias non aspernatur quo, quaerat repudiandae natus atque dicta
            voluptatum perspiciatis error!
          </p>
        </Flex>
        <Flex
          position="relative"
          bgimg={f2}
          style={{
            "background-position": "center",
            "background-size": "cover",
            overflow: "hidden",
            "align-self": "center",
          }}
          width="40%"
          height="80vh"
        >
          {/* <Image style={{"object-fit": "cover",}}  src={f2} alt="" /> */}
        </Flex>
      </Flex>
      <Parallax
        bgImage="https://images.pexels.com/photos/4623060/pexels-photo-4623060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        strength={500}
      >
        <div style={{ height: "max-content", padding: 0 }}>
          <Flex
            background="rgba(0, 0, 0, 0.2)"
            color="white"
            align="center"
            justify="center"
            height="100%"
          >
            <Flex margin="50px" width="60%" justify="center" align="center">
              <Flex
                direction="column"
                background="white"
                align="start"
                justify="center"
                padding="3% 5% "
                height="max-content"
              >
                <p>
                  Вартість фотосесії в студії - 2700 грн.
                  <br />В вартість входить:
                  <br />- 1,5 год зйомки;
                  <br />- 1,5 год оренди залу в студії Fabrik (м.Львів ,
                  вул.Дашкевича,3);
                  <br />- 15 оброблених фото; <br />- усі оригінали фотографій
                  (приблизно 500 фото, які отримаєте в день зйомки ). <br />-
                  допомога з позуванням (підказую пози, як встати , куди
                  нахилити голову і т.п.). <br />
                  Макіяж/зачіска в вартість зйомки не входять (можу порадити
                  перукаря та візажиста). <br />
                  Період обробки фото - до 5 тижнів. Вибір фото для обробки Ви
                  здійснюєте самі (за бажанням). <br />
                  За 1,5 зйомки можна змінити 3-4 образи. <br />
                  При бронюванні зйомки на конкретну дату потрібно внести
                  передоплату 450 грн за оренду залу. <br />
                  Повна оплата фотосесії здійснюється в день зйомки. <br />{" "}
                  Бронювання зйомки бажано проводити за 2-3 тижні до бажаної
                  дати.
                </p>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </Parallax>
      <Flex
        direction="column" align="center"
      >
        <h1>Як підготуватися до фотосесії вагітності</h1>
        <div>
          <h3>Вибираємо дату фотосесії</h3>
          <p>
            Найкращий період для зйомки вагітності це 28-34 тижні. В цей період
            мама ще повна сил і має їх достатньо для позування, а животик вже
            красивий та кругленький.
          </p>
        </div>
        <div>
          <h3>Визначитися з стилем зйомки</h3>
          <p>
            Перш за все потрібно визначитися з стилем зйомки. Якими будуть Ваші
            майбутні фото? Можливо в пишних сукнях серед цікавого інтер'єру чи
            на природі у стильному одязі або ж лаконічна зйомка, де вся увага
            сконцентрована на чудовому стані майбутньої матусі? Чи це соло
            зйомка чи в парі з чоловіком? А можливо Ви бажаєте запам'ятати на
            фото перші речі, які Ви придбали для малюка?
          </p>
        </div>
        <div>
          <h3>Визначитися з образами для фотосесії</h3>
          <p>
            Далі підбираємо образи, обговорюємо кольорову гамму, вибираємо
            конкретний одяг для зйомки.
          </p>
        </div>
        <div>
          <h3>Уникати продуктів, що викликають набряки</h3>
          <p>
            За день до зйомки важливо уникати соленої їжі та продуктів, що
            викликають набряки. Здається дрібниця, але Ви будете почувати себе
            привабливішою і бадьорішою. Якщо запланована депіляція тіла -
            зробіть її завчасно, щоб шкіра встигла заспокоїтися.
          </p>
        </div>
        <div>
          <h3>Підготувати ідеальний образ</h3>
          <p>
            В ідеалі рекомендовано зробити природню укладку в стиліста та
            замовити професійний денний макіяж. Якщо бажаєте ці процедури
            зробити самостійно - обирайте легкі локони, достатньо використати
            тон для обличчя, підкреслити очі та губи. Щодо помади обирайте
            нейтральні або класичні кольори. Подбайте, щоб руки були охайними, а
            манікюр - свіжим.
          </p>
        </div>
        <div>
          <h3>Бути у гарному настрої</h3>
          <p>
            На зйомці Ви відчуєте себе моделлю з обгортки журналу! На фотосесії
            вибиратимемо найкрасивіші ракурси та позування, які підкреслять всю
            чарівність тендітного жіночого тіла у такому чарівному стані.
          </p>
        </div>
      </Flex>
    </main>
  );
}
