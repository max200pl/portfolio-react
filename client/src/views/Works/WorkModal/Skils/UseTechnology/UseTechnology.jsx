import React from "react";
import s from "../Skills.module.scss";
import { Fade } from "react-awesome-reveal";

const UseTechnology = (props) => {
    const applyTech = {
        width: `${props.useTechnology.applyTech}%`,
    };
    return (
        <div className={s.skillsItem} key={props.indexTechnology}>
            <Fade left delay={2000} duration={4000}>
                <span style={applyTech} className={s.applyTech}></span>
            </Fade>
            <span className={s.skills__title}>{props.useTechnology.nameTech}</span>
        </div>
    );
}
export default UseTechnology; 