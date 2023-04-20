import React from "react";
import s from "./About.module.scss";

//import aboutPhoto from "../../img/About__me/about__photo.png";

const About = () => {
  return (
    <section className={s.about}>
      <div className="container">
        <div className={s.about__inner}>
          <div className={s.about__content}>
            <h3 className={s.about__title}>About me</h3>
            <h2 className={s.about__subTitle}>Who am i</h2>

            <div className={s.about__text}>
              <p>
                Здравствуйте! Меня зовут Максим мне 26 и я Frontend-Developer.
              </p>
              <p>
                Я начинающий frontend разработчик, и значит в моих работах вы
                увидите самые новые и передовые технологии в web.
              </p>
              <p>Специализируюсь на верстке веб страниц.</p>
              <p>Использую возможности сторонних библиотек и плагинов.</p>
              <p>
                Основной целью считаю самосовершенствование и в этом вижу свой
                профессиональный рост в web индустрии.
              </p>
            </div>

            <button className="btn">Hire Me</button>
            <button className="btn">See My Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
