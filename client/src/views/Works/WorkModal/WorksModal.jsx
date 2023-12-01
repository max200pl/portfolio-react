import React from "react";
import Modal from "react-modal";
import { Fade } from "react-awesome-reveal";
import SliderWorks from "./SliderWorks/SliderWorks";
import s from "./WorksModal.module.scss";
import Skills from "./Skils/Skills";
import exitImg from "../../../images/modal/exit.svg";
import { getYear } from "../../../helpers/helpers";

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
                <span className={s.modal__title}>
                    {currentWork.name}
                </span>
                <div className={s.modal__subtitle}>
                    {currentWork.category}
                    <span className={s.modal__subtitle_divider}>|</span>
                    {getYear(currentWork.date)}
                </div>

                <button className={s.modal__work_link} type="button">
                    <a href="https://devmax.info/">Link to work</a>
                </button>
            </div>

            <div className={s.work}>
                <div className={s.work__slider}>

                </div>

                <div className={s.work__panel}>
                    <Skills position="right" mixin="works" technology={currentWork.technology} />
                </div>
            </div>
        </div>
    );
}