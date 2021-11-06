import React from "react";
import "./mainPage.css";
import decor from "../images/pwf.svg";
import bg from "../images/bg-1.png";
import { Flex, Img } from "../styles/CommonStyle";
import pp from "../images/photo.jpg";

export default function MainPage() {
  let max = "100vh";
  let top = "45%";

  window.addEventListener("resize", function (event) {
    this.window.location.reload(true);
  });
  if (visualViewport.height >= visualViewport.width) {
    max = "50vh";
    top = "20%";
  }
  return (
    <main>
      <div className="blackBlock" width="100vw" height={max}></div>

      <Flex
        width="100vw"
        height="100vh"
        margin="-200px 0 0 0"
        maxHeight={max}
        bgimg="https://images.pexels.com/photos/4041317/pexels-photo-4041317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        //  bgimg="https://images.pexels.com/photos/6941803/pexels-photo-6941803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        // bgimg="https://images.pexels.com/photos/10137509/pexels-photo-10137509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        // bgimg="https://images.pexels.com/photos/1231171/pexels-photo-1231171.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        // bgimg={bg}
      >
        <Img
          position="absolute"
          top={top}
          right="10%"
          width="40%"
          src={decor}
          alt=""
        />
      </Flex>
      <Flex
        margin="0 0"
        height={max}
        align="center"
        justify="center"
        width="100%"
        bgimg="https://media.istockphoto.com/photos/gray-shadows-of-the-flowers-and-grass-picture-id1164993369?k=20&m=1164993369&s=612x612&w=0&h=_lxBLJPiVYqRTwzGGEu0sOGSclUGAqZAi4yELGJOLMo="
      >
        <Flex
          className="mainBlock"
          direction="column"
          align="center"
          margin="0 3%"
        >
          <h1> Знайомтесь, Ярина</h1>
          <p>ЛЮДИНА ПО ТУ СТОРОНУ ОБ’ЄКТИВА</p>
          {/* <Flex
            className="blueBlock"
            align="center"
            justify="center"
            background="#cde4ee"
            radius="30px"
            width="60%"
            padding="5%"
            margin="100px 0 0"
          >
            <p>
              “Емоції роблять фото живими, і це не обов'язково повинен бути
              сміх. (і ще щось бла-бла-бла-бла)”
            </p>
          </Flex> */}
        </Flex>
        <Flex height="70%" margin="0 3%">
          <Img height="100%" src={pp} alt="" />
        </Flex>
      </Flex>
      <Flex
        direction="column"
        height="max-content"
        maxHeight="max-content"
        background="#E3E3E3"
      >
        <Flex
          margin="50px 0 0 0"
          width="100%"
          direction="column"
          align="center"
          justify="center"
        >
          {/* <p className="recent">RECENT</p>
          <p className="works">WORKS</p> */}
          <p className="decor">GALLARY</p>
        </Flex>
        <Flex
          width="80%"
          margin="0 10% 10%"
          justify="center"
          className="gallery"
        >
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </Flex>
      </Flex>
      <Flex
        bgimg="https://media.istockphoto.com/photos/gray-shadows-of-the-flowers-and-grass-picture-id1164993369?k=20&m=1164993369&s=612x612&w=0&h=_lxBLJPiVYqRTwzGGEu0sOGSclUGAqZAi4yELGJOLMo="
        // bgimg="https://image.freepik.com/free-vector/diamond-shape-white-abstract-background_52683-56093.jpg"
        align="center"
        justify="center"
        width="100vw"
        height="85vh"
        padding="0 5%"
      >
        <form className="contactForm" action="">
          <h1>Запишися зараз:</h1>
          <Flex width="100%" direction="column" align="center">
            <Flex width="100%" justify="space-between" >
              <Flex width="100%" margin="0 1% 0 0">
              <input
                className="contactFormInput"
                type="text"
                placeholder="Ім'я"
              />
              </Flex>
              <Flex width="100%" margin="0 0 0 1%">
              <input
                className="contactFormInput"
                type="text"
                placeholder="Телефон"
              />
              </Flex>
            </Flex>
            <Flex width="100%"margin="3% 0 ">
              <input
                className="contactFormInput"
                type="e-mail"
                placeholder="E-mail"
              />
            </Flex>
            <Flex width="100%" justify="center" align="center">
              <input type="submit" value="Надіслати" className="submit" />
            </Flex>
          </Flex>
        </form>
        <Flex width="90%" height="100%" margin="0 10px 0" align="center" justify="center">
          <Img
            width="24rem"
            src="https://images.pexels.com/photos/10041281/pexels-photo-10041281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
<Flex width="5%">
<p className="decor contact">CONTACT</p>

</Flex>
        </Flex>

      </Flex>
    </main>
  );
}
