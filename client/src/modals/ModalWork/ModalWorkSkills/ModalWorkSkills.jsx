import s from "./ModalWorkSkills.module.scss";

import ProgressBar from "../../../assets/components/ProgressBar/ProgressBar";

const Skills = ({ technology, mixin, position }) => {
    return (
        <div position={position} mixin={mixin} className={s.skills} >
            <div className={s.skills__header}>Technologies used:</div>
            {
                technology.map((group, i) => {
                    return (
                        <div key={i} className={s.skills__group}>
                            <h3>{Object.keys(group)[0]}</h3>
                            {
                                Object.values(group)[0].map((skill, j) => {
                                    return <ProgressBar
                                        text={skill.name}
                                        precentFill={skill.apply}
                                    />
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Skills;
