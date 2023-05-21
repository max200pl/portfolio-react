import { technologies, precentHardSkillsTechnologies, softSkills } from "../../data/data";
import ProgressBar from "../ProgressBar/ProgressBar";

import s from "./SoftSkills.module.scss";


const SoftSkills = () => {
    return (
        <div className={s.soft_skills}>
            {softSkills.map((el, id) => {
                return (<>
                    <h3 className={s.soft_skills__title}>
                        {Object.keys(el)[0]}
                    </h3>
                    <div className={s.soft_skills__container}>

                        {Object.values(el)[0].map((el) => {
                            return (
                                <ProgressBar
                                    color="green"
                                    key={id}
                                    text={Object.keys(el)[0]}
                                    precentFill={Object.values(el)[0]}
                                />
                            )
                        })
                        }
                    </div>
                </>
                );
            })}
        </div>
    );
};

export default SoftSkills;
