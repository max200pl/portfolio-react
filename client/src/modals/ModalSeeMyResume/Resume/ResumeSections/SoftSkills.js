import ProgressBar from "../../../../assets/components/ProgressBar/ProgressBar";
import { softSkills } from "../../Resume/data/data";


import s from "./SoftSkills.module.scss";

const SoftSkills = (props) => {
    return (
        <div className={s.soft_skills}>
            {softSkills.map((el, id) => {
                return (
                    <div key={id} className={s.soft_skills__container} >
                        {Object.values(el)[0].map((el, id) => {
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
                );
            })}
        </div>
    );
};

export default SoftSkills;
