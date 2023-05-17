import Experience from "./Experience";
import s from "./Resume.module.scss";
import Avatar from "../../images/modal/modal-resume/photo.jpg"
import React from "react";

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

            <section className={s.resume__section}>
                <h1 className={s.resume__title_section}>Experience</h1>

                <Experience />
            </section>
        </div >
    )
})

export default Resume