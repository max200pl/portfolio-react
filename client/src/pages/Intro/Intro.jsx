import React, { useState } from "react";
import { NavLink } from "react-router-dom";




import s from "./Intro.module.scss";

import Works from "./Works/Works";

import socialLink1 from "../../assets/images/intro/1.png";
import socialLink2 from "../../assets/images/intro/2.png";
import socialLink3 from "../../assets/images/intro/3.png";
import socialLink4 from "../../assets/images/intro/4.png";
import socialLink5 from "../../assets/images/intro/5.png";
import arrowNext from "../../assets/images/intro/nex-page__arrow.svg";
import ModalHireMe from "../../modals/ModalHireMe/ModalHireMe";
import ModalSeeMyResume from "../../modals/ModalSeeMyResume/ModalSeeMyResume";
import Modal from "../../assets/components/Modal/Modal";

const dataSocialLinks = [
    {
        icon_link: socialLink1,
        social_link: "https://www.instagram.com/maksym.poskannyi/?hl=ru"
    },
    {
        icon_link: socialLink2,
        social_link: "https://www.linkedin.com/in/maksym-poskannyi-114b08155/"
    },
    {
        icon_link: socialLink3,
        social_link: "https://www.facebook.com/Maksym.Poskannyi"
    },
    {
        icon_link: socialLink4,
        social_link: "viber://chat?number=+380508669945"
    },
    {
        icon_link: socialLink5,
        social_link: "https://t.me/max200pl"
    },
]

const SocialLink = (props) => (
    <a className={s.social__link} rel="noreferrer" href={props.social_link} target="_blank" >
        <img src={props.icon_link} alt="link instagram" />
    </a>
)

const SocialLinks = (props) => props.dataSocialLinks.map((link, id) =>
    <SocialLink key={id} icon_link={link.icon_link} social_link={link.social_link} />
)

const Intro = () => {
    const [isOpenHireMeModal, setIsOpenHireMeModal] = useState(false);
    const [isOpenResumeModal, setIsOpenSeeMyResumeModal] = useState(false);

    return (
        <section className={s.intro} id="hello">
            <div className="container">
                <div className={s.inner}>
                    <div className={s.content}>
                        <h2 className={s.subtitle}>I'm Maksym</h2>
                        <h1 className={s.title}>Full Stack Web Developer</h1>
                        <div className={s.text}></div>
                        <div className={s.social}>
                            <SocialLinks dataSocialLinks={dataSocialLinks} />
                        </div>

                        <div className={s.link}>
                            <button className={"btn"} onClick={() => setIsOpenHireMeModal(true)}>Hire Me</button>
                            <button className={"btn"} onClick={() => setIsOpenSeeMyResumeModal(true)}>See My Resume</button>
                        </div>
                    </div>
                </div>

                <Works />

                <div className={s.intro__footer}>
                    <NavLink className={s.next_button} to="/portfolio" >
                        <img className={s.next_button__icon} src={arrowNext} alt="arrow button" />
                    </NavLink>
                </div>
            </div>

            <Modal handleClose={() => setIsOpenHireMeModal(false)} isOpen={isOpenHireMeModal}>
                <ModalHireMe handleClose={() => setIsOpenHireMeModal(false)} isOpen={isOpenHireMeModal} />
            </Modal>

            <Modal handleClose={() => setIsOpenSeeMyResumeModal(false)} isOpen={isOpenResumeModal}>
                <ModalSeeMyResume handleClose={() => setIsOpenSeeMyResumeModal(false)} isOpen={isOpenResumeModal} />
            </Modal>
        </section>
    )
}


export default Intro;
