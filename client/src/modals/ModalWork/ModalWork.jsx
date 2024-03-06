import s from "./ModalWork.module.scss";
import ModalWorkSkills from "./ModalWorkSkills/ModalWorkSkills";
import ModalWorkSlider from "./ModalWorkSlider/ModalWorkSlider";
import exitImg from "../../assets/images/modal/exit.svg";
import { getYear } from "../../assets/helpers/helpers";
import { Fade } from "react-awesome-reveal";

export default function ModalWork({
    onClose,
    work
}) {
    return (
        <div className={s.modal}>
            <button className={s.modal__close} onClick={() => onClose()} type="button">
                <img className={s.modal__close_image} src={exitImg} alt="Close" />
            </button>
            <div className={s.modal__header}>
                <Fade className={s.modal__title} duration={100} triggerOnce="true" direction="left" cascade >
                    {work.name}
                </Fade>
                <div className={s.modal__subtitle}>
                    {work.category}
                    <span className={s.modal__subtitle_divider}>|</span>
                    {getYear(work.dateFinished)}
                </div>

                <Fade triggerOnce="true" direction="left" cascade className={s.modal__title}>
                    <button className={s.modal__work_link} type="button">
                        <a href="https://devmax.info/">Link to work</a>
                    </button>
                </Fade>
            </div>

            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <div className={s.content__slider}>
                    {work.images &&
                        <ModalWorkSlider images={work.images} />
                    }
                </div>

                <div className={s.content__panel}>
                    <ModalWorkSkills position="right" mixin="works" technology={work.frontTech} />
                </div>
            </div>
        </div>
    );
}