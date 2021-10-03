import React from "react";
import s from "./Skills.module.scss";
import UseTechnology from "./UseTechnology/UseTechnology";

const Skills = (props) => {
  let useTechnology = props.useTechnology.map((technology, i) => (
    <UseTechnology technology={technology} indexTechnology={technology[i]} />
  ));

  return (
    <div className={s.skills}>
      <div className={s.skills__header}>Technologies used:</div>
      {useTechnology}
    </div>
  );
};

export default Skills;
