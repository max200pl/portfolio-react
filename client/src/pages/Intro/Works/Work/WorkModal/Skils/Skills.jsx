import React from "react";
import s from "./Skills.module.scss";

import ProgressBar from "../../../../../../assets/components/ProgressBar/ProgressBar";

const Skills = ({ technology, mixin, position }) => {
    return (
        <div position={position} mixin={mixin} className={s.skills} >
            <div className={s.skills__header}>Technologies used:</div>
            {
                technology.map(({ name, apply }, i) => {

                    return <ProgressBar
                        text={name}
                        precentFill={apply}
                    />
                })
            }
        </div>
    );
};

export default Skills;
