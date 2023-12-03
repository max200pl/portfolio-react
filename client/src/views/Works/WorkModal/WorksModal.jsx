import React from "react";

import s from "./WorksModal.module.scss";
import Skills from "./Skils/Skills";
import exitImg from "../../../images/modal/exit.svg";
import { getYear } from "../../../helpers/helpers";
import { Fade } from "react-awesome-reveal";
import { WorkModalSlider } from "./WorkModalSlider/WorkModalSlider";

export default function WorksModal({
    isOpen,
    onClose,
    works,
    currentWork
}) {
    return (
        <div className={s.modal}>
            <button className={s.modal__close} onClick={onClose} type="button">
                <img className={s.modal__close_image} src={exitImg} alt="Close" />
            </button>
            <div className={s.modal__header}>
                <Fade duration={100} triggerOnce="true" direction="left" cascade className={s.modal__title}>
                    {currentWork.name}
                </Fade>

                <div className={s.modal__subtitle}>
                    {currentWork.category}
                    <span className={s.modal__subtitle_divider}>|</span>
                    {getYear(currentWork.date)}
                </div>

                <Fade triggerOnce="true" direction="left" cascade className={s.modal__title}>
                    <button className={s.modal__work_link} type="button">
                        <a href="https://devmax.info/">Link to work</a>
                    </button>
                </Fade>
            </div>

            <div className={s.slider}>
                <div className={s.slider__content}>
                    <WorkModalSlider images={currentWork.images} />
                </div>

                <div className={s.slider__panel}>
                    <Skills position="right" mixin="works" technology={currentWork.technology} />
                </div>
            </div>
        </div>
    );
}