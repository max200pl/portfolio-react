import React from "react";

import photoPortfolio from "../../img/modal/modal-works-slider/photo-Portfolio/intro.png";
import photoMoGo from "../../img/modal/modal-works-slider/photo-MoGo/intro.png";
import photoPower from "../../img/modal/modal-works-slider/photo-Power/intro.png";
import photoAnveshan from "../../img/modal/modal-works-slider/photo-anveshan/title.png";
import photoPantoflex from "../../img/modal/modal-works-slider/photo-pantoflex/title.png";
import photoEngPlatform from "../../img/modal/modal-works-slider/photo-engPlatform/title.png";

import s from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <div className={s.works} id="portfolio">
      <div className="container">
        <div className={s.works__nav}>
          <button className={s.works__nav_link} data-filter="all">
            All
          </button>
          <button className={s.works__nav_link} data-filter="landing">
            Landing
          </button>
          <button className={s.works__nav_link} data-filter="website">
            Websites
          </button>
        </div>

        <div className={s.portfolio}>
          <div className={s.portfolio__col}>
            <div className={s.work}>
              <img
                className={s.work__img}
                src={photoPortfolio}
                alt="Portfolio"
              />
              <div className={s.work__content}>
                <div className={s.work__cat}>category: website</div>
                <div className={s.work__title}>
                  Portfolio
                  <time className={s.work__date}>2020</time>
                </div>
              </div>
            </div>
          </div>

          <div className={s.portfolio__col}>
            <div className={s.work}>
              <img className={s.work__img} src={photoMoGo} alt="MoGo" />
              <div className={s.work__content}>
                <div className={s.work__cat}>category: landing</div>
                <div className={s.work__title}>
                  MoGo
                  <time className={s.work__date}>2019</time>
                </div>
              </div>
            </div>
          </div>

          <div className={s.portfolio__col}>
            <div className={s.work}>
              <img className={s.work__img} src={photoPower} alt="Power" />
              <div className={s.work__content}>
                <div className={s.work__cat}>category: landing</div>
                <div className={s.work__title}>
                  Power
                  <time className={s.work__date}>2019</time>
                </div>
              </div>
            </div>
          </div>

          <div className={s.portfolio__col}>
            <div className={s.work}>
              <img
                className={s.work__img}
                src={photoAnveshan}
                alt="anveshan title"
              />
              <div className={s.work__content}>
                <div className={s.work__cat}>category: landing</div>
                <div className={s.work__title}>
                  Anveshan
                  <time className={s.work__date}>2019</time>
                </div>
              </div>
            </div>
          </div>

          <div className={s.portfolio__col}>
            <div className={s.work}>
              <img
                className={s.work__img}
                src={photoPantoflex}
                alt="pantoflex"
              />

              <div className={s.work__content}>
                <div className={s.work__cat}>category: landing</div>
                <div className={s.work__title}>
                  Pantoflex
                  <time className={s.work__date}>2020</time>
                </div>
              </div>
            </div>
          </div>

          <div className={s.portfolio__col}>
            <div className={s.work}>
              <img
                className={s.work__img}
                src={photoEngPlatform}
                alt="engPlatform"
              />

              <div className={s.work__content}>
                <div className={s.work__cat}>category: website</div>
                <div className={s.work__title}>
                  English_Platform
                  <time className={s.work__date}>2020</time>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn_sm">Load More Work</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
