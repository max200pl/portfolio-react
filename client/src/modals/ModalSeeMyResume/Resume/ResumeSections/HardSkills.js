import ProgressBar from "../../../../assets/components/ProgressBar/ProgressBar";
import { technologies, precentHardSkillsTechnologies } from "../data/data";


import s from "./HardSkills.module.scss";

const getPrecentListTechnologies = () => {
    const precentListTechnologies = [];
    // на основе объекта создать другой объект

    for (const technology in precentHardSkillsTechnologies) {
        precentListTechnologies.push(
            {
                nameTeh: technologies[technology],
                procTeh: precentHardSkillsTechnologies[technology]
            }
        )
    }
    return precentListTechnologies
}

const HardSkills = () => {
    const listTechnologies = getPrecentListTechnologies();

    return (
        <div className={s.hard_skills}>
            {listTechnologies.map((el, id) => {
                return (
                    <ProgressBar
                        key={id}
                        text={el.nameTeh}
                        precentFill={el.procTeh}
                    />
                );
            })}
        </div>
    );
};

export default HardSkills;
