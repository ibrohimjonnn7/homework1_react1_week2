import img1 from "@/app/assets/img/img1.png";
import img2 from "@/app/assets/img/img2.png";
import img3 from "@/app/assets/img/img3.png";
import img4 from "@/app/assets/img/img4.png";
import img5 from "@/app/assets/img/img5.png";
import img6 from "@/app/assets/img/img6.png";
import img7 from "@/app/assets/img/img7.png";
import img8 from "@/app/assets/img/img8.png";
import img9 from "@/app/assets/img/img9.png";
import img10 from "@/app/assets/img/img10.png";
import img13 from "@/app/assets/img/img13.png";
import img14 from "@/app/assets/img/img14.png";
import img15 from "@/app/assets/img/img15.png";
import img16 from "@/app/assets/img/img16.png";
import img17 from "@/app/assets/img/img17.png";

import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import Footer2 from "../footer2/footer2.jsx";
import Section7 from "../section7/section7.jsx";
import Section6 from "../section6/section6.jsx";
import Section5 from "../section5/section5.jsx";
import Section4 from "../section4/section4.jsx";
import Section2 from "../section2/section2.jsx";
import Section1 from "../section1/section1.jsx";

export default function HomePage() {
  return (
    <>
      <Header
        img_header={img1}
        text1="Чему вы научитесь"
        text2="Процесс обучения"
        text3="Стоимость"
        text4="Контакты"
        text5="Регистрация"
        text6="Войти"
      />
      <Section1
        text2="Школа {программирования}для тех, кому нужны реальные навыки,
а не просто сертификат"
        text3="Пройдите тестирование, чтобы получить доступ к бесплатным вводным урокам"
        img_comp={img16}
      />
      <div
        style={{
          display: "flex",
          width: "90%",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <Section2
          img={img9}
          w="22%"
          title="Огромное количество практики"
          bg="#EAF2F5"
          text="Более 500 самостоятельных заданий и 20 полноценных больших проектов"
        />
        <Section2
          img={img10}
          w="22%"
          title="Современные методики обучения"
          bg="#EAF2F5"
          text="Более 500 самостоятельных заданий и 20 полноценных больших проектов"
        />
        <Section2
          img={img14}
          w="22%"
          title="Современные методики обучения"
          bg="#EAF2F5"
          text="Более 500 самостоятельных заданий и 20 полноценных больших проектов"
        />
        <Section2
          img={img6}
          w="22%"
          title="Простое и понятное изложение"
          bg="#EAF2F5"
          text="Более 500 самостоятельных заданий и 20 полноценных больших проектов"
        />
      </div>
      <div
        style={{
          display: "flex",
          width: "90%",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <Section2
          img={img15}
          w="22%"
          title="Гибкий график занятий"
          bg="#EAF2F5"
          text="Более 500 самостоятельных заданий и 20 полноценных больших проектов"
        />
        <Section2
          img={img13}
          w="22%"
          title="Прямая связь с опытными программистами"
          bg="#EAF2F5"
          text="Более 500 самостоятельных заданий и 20 полноценных больших проектов"
        />
        <Section2
          img={img14}
          w="22%"
          title="Оплата небольшими частями"
          bg="#EAF2F5"
          text="Более 500 самостоятельных заданий и 20 полноценных больших проектов"
        />
      </div>

      <Section4
        img7={img7}
        text1="Помощь и поддержка"
        text2="Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос своему наставнику. Раз в несколько уроков вы будете получать большое задание, которое нужно будет сдавать на проверку код-ревьюеру. Он внимательно изучит ваш код, найдет ошибки и поможет вам стать лучше. "
      />

      <Section4
        text1="Помощь и поддержка"
        text2="Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос своему наставнику. Раз в несколько уроков вы будете получать большое задание, которое нужно будет сдавать на проверку код-ревьюеру. Он внимательно изучит ваш код, найдет ошибки и поможет вам стать лучше. "
        img7={img8}
      />

      {/* <Section4
        text1="Помощь и поддержка"
        text2="Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос своему наставнику. Раз в несколько уроков вы будете получать большое задание, которое нужно будет сдавать на проверку код-ревьюеру. Он внимательно изучит ваш код, найдет ошибки и поможет вам стать лучше. "
        img7_8={img8}
      />
       */}
      <div
        style={{ display: "flex", width: "85%", margin: "auto", gap: "30px" }}
      >
        <Section5
          text1="Стоимость обучения"
          img_Calc={img4}
          text2="Весь курс разбит на несколько блоков. Оплата поэтапная вы платите только за тот блок, который сейчас проходите."
        />

        <Section5
          img_Calc={img5}
          text2="Весь курс разбит на несколько блоков. Оплата поэтапная вы платите только за тот блок, который сейчас проходите."
        />

        <Section5
          img_Calc={img6}
          text2="Весь курс разбит на несколько блоков. Оплата поэтапная вы платите только за тот блок, который сейчас проходите."
        />
      </div>

      <Section6 />

      <Section7
        img_section7={img3}
        text2="Все блоки проходятся строго по порядку. Пропустить какой-то блок или начать обучение с середины нельзя, даже если вы считаете, что уже знаете какую-то часть материала. Только так мы можем гарантировать, что вы получите все знания, предусмотренные учебной программой."
      />

      {/*  */}

      <Footer
        img_footer={img1}
        text1="Школа программирования"
        img_footer2={img2}
        text2="Чему вы научитесь"
        text3="Процесс обучения"
        text4="Стоимость"
        text5="Контакты"
        text6="Регистрация"
        text7="+7 (499) 348 93 96"
        text8="info@ytyt.ru"
        text9="ИП Умаров Т. А."
        text10="ИНН 745216229809"
        text11="ОГРНИП 315745200001358"
      />

      <Footer2
        text12="© 2022 ytyt — Все права защищены"
        text13="Пользовательское соглашение"
        text14="Политика конфиденциальности"
      />
    </>
  );
}
