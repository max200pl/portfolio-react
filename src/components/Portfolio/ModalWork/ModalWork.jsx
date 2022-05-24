import React from "react";
import Modal from "react-modal";
import Fade from "react-reveal/Fade";
import SliderWorks from "./SliderWorks/SliderWorks";
import s from "./ModalWork.module.scss";
import Skills from "./Skills/Skills";

export default function ModalWork(props) {
  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={props.closeModal}
        ariaHideApp={false}
        className={s.modal}
        overlayClassName={s.modal__overlay}
        shouldCloseOnOverlayClick={true}
      >
        <Fade left cascade={true}>
          <div className={s.modalWork}>
            <div className={s.modalWork__preview}>
              <SliderWorks
                workName={props.workItem.workName}
                workPhotos={props.workPhotos}
              />
            </div>

            <div className={s.modalWork__content}>
              <button onClick={props.closeModal} className={s.modal__close}>
                <img src="images/modal/exit.svg" alt="Close" />
              </button>
              <div className={s.modalWork__header}>
                <span className={s.modalWork__title}>
                  {props.workItem.workName}
                </span>
                <div className={s.modalWork__info}>
                  {props.workItem.categoryWork}
                  <span className={s.modalWork__infoDivider}>|</span>
                  {props.workItem.endWorkTime}
                </div>
              </div>

              <div className={s.modalWork__client}>
                <div className={s.modalWork__clientTitle}>Client:</div>
                <div className={s.modalWork__clientCompany}>
                  {props.workItem.clientName}
                </div>
              </div>
              <button className={s.modalWork__btnLink} type="button">
                <a href="https://devmax.info/">Link to work</a>
                {/* <img src="images/modal/referral.svg" height="40" alt=""> */}
              </button>

              <Skills useTechnology={props.workItem.useTechnology} />

              <div className={s.modalWork__footer}>
                <button className={s.modalWork__btn} type="button">
                  <img
                    src="images/modal/modalWorks-slider/left-arrow.svg"
                    height="14"
                    alt=""
                  />
                  Previous work
                </button>
                <button className={s.modalWork__btn} type="button">
                  Next work
                  <img
                    src="images/modal/modalWorks-slider/right-arrow.svg"
                    height="14"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
