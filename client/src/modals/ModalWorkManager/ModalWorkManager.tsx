
import { FC } from "react";
import { Fade } from "react-awesome-reveal";
import exitImg from "../../assets/images/modal/exit.svg";
import { IWork } from "../../assets/interfaces/interfaces";
import s from "./ModalWorkManager.module.scss";
import ModalWorkManagerForm from "./ModalWorkManagerForm/ModalWorkManagerForm";


interface IModalWorkManager {
    onClose: () => {};
    work: IWork
}

const ModalWorkManager: FC<IModalWorkManager> = ({
    onClose,
    work
}) => {
    return (
        <div className={s.modal}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <button className={s.modal__close} onClick={() => onClose()} type="button">
                    <img className={s.modal__close_image} src={exitImg} alt="Close" />
                </button>
                <div className={s.modal__header}>
                    <Fade duration={100} triggerOnce={true} direction="left" cascade className={s.modal__title}>
                        {work ? "Update Work" : "Create Work"}
                    </Fade>
                </div>
                <ModalWorkManagerForm onClose={onClose} work={work} />
            </div>
        </div>
    );
}

export default ModalWorkManager