import React from "react";
import s from "./Skills.module.scss";
import UseTechnology from "./UseTechnology/UseTechnology";

const Skills = (props) => {
    let useTechnology = props.useTechnology.map((useTechnology, i) => (
        <UseTechnology
            key={i}
            useTechnology={useTechnology}
            indexTechnology={useTechnology[i]}
        />
    ));

    return (
        <div className={s.skills}>
            <div className={s.skills__header}>Technologies used:</div>
            {useTechnology}
        </div>
    );
};

export default Skills;
