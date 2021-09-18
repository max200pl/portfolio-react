import React from "react";
import socialLink1 from "../../img/intro/1.png";
import socialLink2 from "../../img/intro/2.png";
import socialLink3 from "../../img/intro/3.png";
import socialLink4 from "../../img/intro/4.png";
import socialLink5 from "../../img/intro/5.png";

import s from "./Intro.module.scss";

const Intro = (props) => {
  return (
    <section className={s.intro} id="hello">
      <div className={s.inner}>
        <div className="container">
          <div className={s.content}>
            <h2 className={s.subtitle}>Hello i'm</h2>
            <h1 className={s.title}>Poskannui Maksym</h1>
            <div className={s.text}>Frontend Developer</div>

            <div className={s.social}>
              <a
                className={s.social__link}
                rel="noreferrer"
                href="https://www.instagram.com/maksym.poskannyi/?hl=ru"
                target="_blank"
              >
                <img src={socialLink1} alt="link instagram" />
              </a>
              <a
                className={s.social__link}
                rel="noreferrer"
                href="https://www.linkedin.com/in/maksym-poskannyi-114b08155/"
                target="_blank"
              >
                <img src={socialLink3} alt="link linkedin" />
              </a>
              <a
                className={s.social__link}
                rel="noreferrer"
                href="https://www.facebook.com/Maksym.Poskannyi"
                target="_blank"
              >
                <img src={socialLink2} alt="link facebook" />
              </a>
              <a
                className={s.social__link}
                rel="noreferrer"
                href="viber://chat?number=+380508669945"
                target="_blank"
              >
                <img src={socialLink4} alt="link viber" />
              </a>
              <a
                className={s.social__link}
                rel="noreferrer"
                href="https://t.me/max200pl"
                target="_blank"
              >
                <img src={socialLink5} alt="link telegram" />
              </a>
            </div>
            <div className={s.link}>
              <button className={s.btn}>Hire Me</button>
              <button className={s.btn}>See My Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
