import React from "react";
import Modal from "react-modal";
import s from "./ModalWork.module.scss";

export default function ModalWork(props) {
  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={props.closeModal}
        ariaHideApp={false}
        className={s.modal}
      >
        <div className={s.modal} id="modal_project">
          <div className={s.modal__dialog}>
            <div className={s.modalWork}>
              <div className={s.modalWork__preview}>
                {/* <!-- Подключение слайдера -->
  <div data-slider="slick">
    <div>
      <img className="modal-work__photo" src="images/modal/modal-works-slider/photo-Portfolio/intro.png"
        alt="photo Portfolio" />
    </div>
    <div>
      <img className="modal-work__photo modal-work__photo--tab"
        src="images/modal/modal-works-slider/photo-Portfolio/resume.png" alt="photo Portfolio" />
    </div>
    <div>
      <img className="modal-work__photo" src="images/modal/modal-works-slider/photo-Portfolio/form.png"
        alt="photo Portfolio" />
    </div>
  </div>
*/}
              </div>

              <div className={s.modalWork__content}>
                <button onClick={props.closeModal} className={s.modal__close}>
                  <img src="images/modal/exit.svg" alt="Close" />
                </button>
                <div className="modal-work__header">
                  <h3 className="modal-work__title">Portfolio</h3>
                  <div className="modal-work__info">
                    website<span className="modal-work__info-divider">|</span>
                    2020
                  </div>
                </div>

                <div className="modal-work__client">
                  <div className="modal-work__client-title">Client:</div>
                  <div className="modal-work__client-company">
                    Creative Agency
                  </div>
                </div>
                <button className="modal-work__btn-link" type="button">
                  <a href="https://devmax.info/">Link to work</a>
                  {/* <img src="images/modal/referral.svg" height="40" alt=""> */}
                </button>

                <div className="skills">
                  <h1>Технологии</h1>

                  <div className="skills-item">
                    <h3 className="skills__title">HTML 5</h3>
                    <div
                      className="skills-item__progress"
                      data-progress="90"
                    ></div>
                  </div>
                  <div className="skills-item">
                    <h3 className="skills__title">CSS 3</h3>
                    <div
                      className="skills-item__progress"
                      data-progress="80"
                    ></div>
                  </div>
                  <div className="skills-item">
                    <h3 className="skills__title">JavaScript</h3>
                    <div
                      className="skills-item__progress"
                      data-progress="50"
                    ></div>
                  </div>
                  <div className="skills-item">
                    <h3 className="skills__title">Jquery</h3>
                    <div
                      className="skills-item__progress"
                      data-progress="60"
                    ></div>
                  </div>
                  <div className="skills-item">
                    <h3 className="skills__title">@Media</h3>
                    <div
                      className="skills-item__progress"
                      data-progress="90"
                    ></div>
                  </div>
                  <div className="skills-item">
                    <h3 className="skills__title">Ajax</h3>
                    <div
                      className="skills-item__progress"
                      data-progress="40"
                    ></div>
                  </div>
                  <div className="skills-item">
                    <h3 className="skills__title">PHP</h3>
                    <div
                      className="skills-item__progress"
                      data-progress="30"
                    ></div>
                  </div>
                  <div className="skills-item">
                    <h3 className="skills__title">БЭМ</h3>
                    <div
                      className="skills-item__progress"
                      data-progress="95"
                    ></div>
                  </div>
                </div>
                <div className="modal-work__footer">
                  <button className="modal-work__btn slickPrev" type="button">
                    <img
                      src="images/modal/modal-works-slider/left-arrow.svg"
                      height="14"
                      alt=""
                    />
                    Previous
                  </button>
                  <button className="modal-work__btn slickNext" type="button">
                    Next
                    <img
                      src="images/modal/modal-works-slider/right-arrow.svg"
                      height="14"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
