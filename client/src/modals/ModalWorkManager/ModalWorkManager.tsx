
import exitImg from "../../assets/images/modal/exit.svg";
import { Fade } from "react-awesome-reveal";

import s from "./ModalWorkManager.module.scss";
import { FC } from "react";
import { Work } from "../../assets/interfaces/interfaces";

import ModalWorkManagerForm from "./ModalWorkManagerForm/ModalWorkManagerForm";

interface IModalWorkManager {
    onClose: () => {};
    work: Work
}

const ModalWorkManager: FC<IModalWorkManager> = ({
    onClose,
    work
}) => {

    return (
        <div className={s.modal}>
            <button className={s.modal__close} onClick={() => onClose()} type="button">
                <img className={s.modal__close_image} src={exitImg} alt="Close" />
            </button>
            <div className={s.modal__header}>
                <Fade duration={100} triggerOnce={true} direction="left" cascade className={s.modal__title}>
                    Create or update work
                </Fade>
            </div>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <ModalWorkManagerForm onClose={onClose} work={work} />
            </div>
        </div>
    );
}

export default ModalWorkManager