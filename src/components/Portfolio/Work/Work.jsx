import React from "react";

import s from "./Work.module.scss";

const Work = (props) => {
  return (
    <div className={s.work}>
      <img className={s.work__img} src={props.imgWork} alt="work" />
      <div className={s.work__content}>
        <div className={s.work__cat}>category: {props.categoryWork}</div>
        <div className={s.work__title}>
          {props.workName}
          <time className={s.work__date}>{props.endWorkTime}</time>
        </div>
      </div>
    </div>
  );
};

export default Work;
