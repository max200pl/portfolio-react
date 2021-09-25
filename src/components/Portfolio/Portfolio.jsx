import React from "react";
import Work from "./Work/Work";

import photoPortfolio from "../../img/modal/modal-works-slider/photo-Portfolio/intro.png";
import photoMoGo from "../../img/modal/modal-works-slider/photo-MoGo/intro.png";
import photoPower from "../../img/modal/modal-works-slider/photo-Power/intro.png";
import photoAnveshan from "../../img/modal/modal-works-slider/photo-anveshan/title.png";
import photoPantoflex from "../../img/modal/modal-works-slider/photo-pantoflex/title.png";
import photoEngPlatform from "../../img/modal/modal-works-slider/photo-engPlatform/title.png";

import s from "./Portfolio.module.scss";
let works = [
  {
    id: 1,
    categoryWork: "website",
    workName: "Portfolio",
    endWorkTime: "2020",
    img: photoPortfolio,
  },
  {
    id: 2,
    categoryWork: "landing",
    workName: "MoGo",
    endWorkTime: "2019",
    img: photoMoGo,
  },
  {
    id: 3,
    categoryWork: "landing",
    workName: "Power",
    endWorkTime: "2019",
    img: photoPower,
  },
  {
    id: 4,
    categoryWork: "landing",
    workName: "Anveshan",
    endWorkTime: "2019",
    img: photoAnveshan,
  },
  {
    id: 5,
    categoryWork: "landing",
    workName: "Pantoflex",
    endWorkTime: "2019",
    img: photoPantoflex,
  },
  {
    id: 6,
    categoryWork: "website",
    workName: "engPlatform",
    endWorkTime: "2019",
    img: photoEngPlatform,
  },
];

const Portfolio = (props) => {
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
          {works.map((workItem) => (
            <div className={s.portfolio__col}>
              <Work
                id={workItem.id}
                categoryWork={workItem.categoryWork}
                workName={workItem.workName}
                endWorkTime={workItem.endWorkTime}
                imgWork={workItem.img}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn btn_sm">Load More Work</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
