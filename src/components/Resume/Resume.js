import Experience from "./Experience";
import s from "./Resume.module.scss";
import Avatar from "../../images/modal/modal-resume/photo.jpg"
import React from "react";
import HardSkills from "./HardSkills";
import LanguagesSkills from "./LanguagesSkills";
import WorkHistory from "./WorkHistory";
import SoftSkills from "./SoftSkills";

const Resume = React.forwardRef((props, ref) => {
    return (
        <div className={s.resume} ref={ref} id="RESUME">
            <div className={s.resume_header}>
                <img className={s.resume_header__img} src={Avatar} alt="" />
                <div className={s.resume_header__text}>
                    <div className={s.resume_header__title}>Maksym Poskannyi</div>
                    <div className={s.resume_header__subtitle}>
                        <p>An engineer who is constantly evolving.
                            I love creating new stuff and I love my job.</p>
                        <p>  I have over fifteen completed web projects, two desktop projects for Windows OS and the Arduino projects as well.</p>
                    </div>
                </div>
                <div className={s.resume_header__info}>
                    <div className={s.resume_header__email}>
                        <span>Email:</span>
                        <span>max2000pl@gmail.com</span>
                    </div>
                    <div className={s.resume_header__phone}>
                        <span>Phone:</span>
                        <span>+380508669945</span>
                    </div>
                </div>
            </div>
            <div className={s.resume__content}>
                <section className={s.resume__section}>
                    <h1 className={s.resume__title_section}>Work History</h1>
                    <WorkHistory />
                </section>

                <div className={s.resume__section_row}>
                    <section className={`${s.resume__section} ${s.resume__section_basics_50}`}>
                        <h1 className={s.resume__title_section}>HARD Skills</h1>
                        <HardSkills />
                    </section>
                    <section className={`${s.resume__section} ${s.resume__section_basics_50}`}>
                        <h1 className={s.resume__title_section}>Languages</h1>
                        <LanguagesSkills />
                        <h1 className={s.resume__title_section}>SOFTSkills</h1>
                        <SoftSkills />
                    </section>
                </div>
                <section className={`${s.resume__section} ${s.resume__section_experience} `}>
                    <h1 className={s.resume__title_section}>Experience</h1>
                    <Experience />
                </section>
            </div>
        </div >
    )
})

export default Resume