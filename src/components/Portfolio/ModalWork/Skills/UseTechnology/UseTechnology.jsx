import React from "react";
import s from "../Skills.module.scss";

export default function UseTechnology(props) {
  return (
    <div className={s.skillsItem} key={props.indexTechnology}>
      <span className={s.skills__title}>{Object.keys(props.technology)}</span>
      <div className={s.skillsItem__progress}></div>
    </div>
  );
}
