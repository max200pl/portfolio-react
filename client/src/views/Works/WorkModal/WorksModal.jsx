import React from "react";
import Modal from "react-modal";
import { Fade } from "react-awesome-reveal";
import SliderWorks from "./SliderWorks/SliderWorks";
import s from "./WorksModal.module.scss";
import Skills from "./Skils/Skills";

export default function WorksModal({
    isOpen,
    onClose,
    works,
    currentWork
}) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => onClose(false)}
            ariaHideApp={false}
            className={s.modal}
            overlayClassName={s.modal__overlay}
            shouldCloseOnOverlayClick={true}
        >
            <div className={s.modalWork}>
                <div className={s.modalWork__preview}>
                    {/*    <SliderWorks
                        workName={name}
                        workPhotos={props.workPhotos}
                    /> */}
                </div>

                <div className={s.modalWork__content}>
                    <button onClick={onClose} className={s.modal__close}>
                        <img src="images/modal/exit.svg" alt="Close" />
                    </button>
                    <div className={s.modalWork__header}>
                        <span className={s.modalWork__title}>
                            {currentWork.name}
                        </span>
                        <div className={s.modalWork__info}>
                            {currentWork.category}
                            <span className={s.modalWork__infoDivider}>|</span>
                            {currentWork.date}
                        </div>
                    </div>

                    <div className={s.modalWork__client}>
                        <div className={s.modalWork__clientTitle}>Client:</div>
                        <div className={s.modalWork__clientCompany}>
                            Creative Agency
                        </div>
                    </div>
                    <button className={s.modalWork__btnLink} type="button">
                        <a href="https://devmax.info/">Link to work</a>
                        <img src="images/modal/referral.svg" height="40" alt="" />
                    </button>

                    <Skills technology={currentWork.technology} />

                    <div className={s.modalWork__footer}>
                        <button className={s.modalWork__btn} type="button">
                            <img
                                src="images/modal/modalWorks-slider/left-arrow.svg"
                                height="14"
                                alt=""
                            />
                            Previous
                        </button>
                        <button className={s.modalWork__btn} type="button">
                            Next
                            <img
                                src="images/modal/modalWorks-slider/right-arrow.svg"
                                height="14"
                                alt=""
                            />
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}