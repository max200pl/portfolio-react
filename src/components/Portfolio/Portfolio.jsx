import React from "react";
import Work from "./Work/Work";
import s from "./Portfolio.module.scss";

// При нажатии на кнопку отобразить только нужные список карточек
// 1) Перерисовать только те карточки которые имеют свойство определенное объекта

const Portfolio = (props) => {
  return (
    <div className={s.works} id="portfolio">
      <div className="container">
        <div className={s.works__nav}>
          <button
            className={s.works__nav_link}
            onClick={() => {
              console.log("ok");
            }}
            data-filter="all"
          >
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
          {props.works.map((workItem) => (
            <div key={workItem.id} className={s.portfolio__col}>
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
