import React from "react";

import s from "./WorksModal.module.scss";
import Skills from "./Skils/Skills";
import exitImg from "../../../images/modal/exit.svg";
import { getYear } from "../../../helpers/helpers";
import { Fade } from "react-awesome-reveal";
import { WorkModalSlider } from "./WorkModalSlider/WorkModalSlider";

export default function WorkModal({
    onClose,
    work
}) {
    return (
        <div className={s.modal}>
            <button className={s.modal__close} onClick={() => onClose()} type="button">
                <img className={s.modal__close_image} src={exitImg} alt="Close" />
            </button>
            <div className={s.modal__header}>
                <Fade duration={100} triggerOnce="true" direction="left" cascade className={s.modal__title}>
                    {work.name}
                </Fade>

                <div className={s.modal__subtitle}>
                    {work.category}
                    <span className={s.modal__subtitle_divider}>|</span>
                    {getYear(work.date)}
                </div>

                <Fade triggerOnce="true" direction="left" cascade className={s.modal__title}>
                    <button className={s.modal__work_link} type="button">
                        <a href="https://devmax.info/">Link to work</a>
                    </button>
                </Fade>
            </div>

            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <div className={s.content__slider}>
                    <WorkModalSlider images={work.images} />
                </div>

                <div className={s.content__panel}>
                    <Skills position="right" mixin="works" technology={work.technology} />
                </div>
            </div>
        </div>
    );
}