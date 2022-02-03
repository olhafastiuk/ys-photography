import React from "react";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Flex } from "../styles/CommonStyle";
import { Parallax } from "react-parallax";
import { products } from "./Arrays";
import f2 from "../images/gallery/3.jpeg";
import "./services.css";
import ProductCard from "./ProductCard";

export default function Services() {
  return (
    <main>
      <Flex
        background="#e3e3e3"
        direction="column"
        align="center"
        justify="center"
        height="10.5vh"
      ></Flex>
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
      <Flex
        className="article-1"
        align="center"
        justify="center"
        background="white"
        height="fit-content"
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          padding="5rem 3rem 10rem 3rem"
        >
          <h3
            style={{
              fontSize: "4rem",
              marginBottom: "3rem",
              padding: "2rem",

              borderBottom: "1px solid rgba(159, 76, 100, 0.4)",
              color: "rgb(159 76 100)",
            }}
          >
            Article Title
          </h3>
          <p className="article-1__text">
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
        <Image className="article-1__img" src={f2} alt="" />
      </Flex>
      <Parallax
        bgImage="https://images.pexels.com/photos/4623060/pexels-photo-4623060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        strength={500}
      >
        <Flex padding="1rem" justify="center" align="center">
          <Flex
            align="center"
            justify="center"
            margin="3rem 0"
            style={{
              flexWrap: "wrap",
            }}
          >
            {products.map((el) => (
              <ProductCard
                photo={el.photo}
                title={el.title}
                price={el.price}
                description={el.description.map((l) => (
                  <li>{l}</li>
                ))}
              />
            ))}
          </Flex>
        </Flex>
      </Parallax>
      <Flex direction="column" padding="3rem 0">
        <h3
          style={{
            fontSize: "4rem",
            marginBottom: "3rem",

            padding: "2rem",
            alignSelf: "center",

            borderBottom: "1px solid rgba(159, 76, 100, 0.4)",
            color: "rgb(159 76 100)",
          }}
        >
          Як підготуватися до фотосесії вагітності
        </h3>
        <Flex justify="center" style={{ flexWrap: "wrap" }}>
          <div className="article-2__text">
            <h3>Вибираємо дату фотосесії</h3>
            <p>
              Найкращий період для зйомки вагітності це 28-34 тижні. В цей
              період мама ще повна сил і має їх достатньо для позування, а
              животик вже красивий та кругленький.
            </p>
          </div>
          <div className="article-2__text">
            <h3>Визначитися з стилем зйомки</h3>
            <p>
              Перш за все потрібно визначитися з стилем зйомки. Якими будуть
              Ваші майбутні фото? Можливо в пишних сукнях серед цікавого
              інтер'єру чи на природі у стильному одязі або ж лаконічна зйомка,
              де вся увага сконцентрована на чудовому стані майбутньої матусі?
              Чи це соло зйомка чи в парі з чоловіком? А можливо Ви бажаєте
              запам'ятати на фото перші речі, які Ви придбали для малюка?
            </p>
          </div>
          <div className="article-2__text">
            <h3>Визначитися з образами для фотосесії</h3>
            <p>
              Далі підбираємо образи, обговорюємо кольорову гамму, вибираємо
              конкретний одяг для зйомки.
            </p>
          </div>
          <div className="article-2__text">
            <h3>Уникати продуктів, що викликають набряки</h3>
            <p>
              За день до зйомки важливо уникати соленої їжі та продуктів, що
              викликають набряки. Здається дрібниця, але Ви будете почувати себе
              привабливішою і бадьорішою. Якщо запланована депіляція тіла -
              зробіть її завчасно, щоб шкіра встигла заспокоїтися.
            </p>
          </div>
          <div className="article-2__text">
            <h3>Підготувати ідеальний образ</h3>
            <p>
              В ідеалі рекомендовано зробити природню укладку в стиліста та
              замовити професійний денний макіяж. Якщо бажаєте ці процедури
              зробити самостійно - обирайте легкі локони, достатньо використати
              тон для обличчя, підкреслити очі та губи. Щодо помади обирайте
              нейтральні або класичні кольори. Подбайте, щоб руки були охайними,
              а манікюр - свіжим.
            </p>
          </div>
          <div className="article-2__text">
            <h3>Бути у гарному настрої</h3>
            <p>
              На зйомці Ви відчуєте себе моделлю з обгортки журналу! На
              фотосесії вибиратимемо найкрасивіші ракурси та позування, які
              підкреслять всю чарівність тендітного жіночого тіла у такому
              чарівному стані.
            </p>
          </div>
        </Flex>
      </Flex>
    </main>
  );
}
