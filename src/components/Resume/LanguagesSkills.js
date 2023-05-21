import React from "react";
import s from "./LanguagesSkills.module.scss";

const LanguagesSkills = () => {
    return (
        <div className={s.languages_skills}>
            <div className={s.languages_skills__row}>
                <h4 className={s.languages_skills__title}>English</h4>
                <div className={s.languages_skills__degree}>Pre-Intermediate</div>
            </div>
            <div className={s.languages_skills__row}>
                <h4 className={s.languages_skills__title}>Ukrainian</h4>
                <div className={s.languages_skills__degree}>Native</div>
            </div>
            <div className={s.languages_skills__row}>
                <h4 className={s.languages_skills__title}>Russian</h4>
                <div className={s.languages_skills__degree}>Native</div>
            </div>
        </div>
    );
};

export default LanguagesSkills;
