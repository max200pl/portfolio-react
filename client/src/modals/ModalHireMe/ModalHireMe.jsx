
import ModalHireMeForm from "./ModalHireMeForm/ModalHireMeForm";
import s from "./ModalHireMe.module.scss";
import exitImg from "../../assets/images/modal/exit.svg"
import emailImg from "../../assets/images/modal/modal-form/email.svg"
import phoneImg from "../../assets/images/modal/modal-form/phone.svg"

const ModalHireMe = ({ isOpen, handleClose }) => {
    // записать в local storage если закрыли окно
    // как проверить что окно было закрыто
    // если потом опять открыли проверить на содержание данных и отобразить в форме

    return (
        <div className={s.modal__dialog}>
            <button className={s.modal__close} onClick={handleClose} type="button" data-close>
                <img className={s.modal__close_image} src={exitImg} alt="Close" />
            </button>

            <div className={s.contact}>
                <h3 className={s.contact__title}>Let's talk!</h3>
                <h4 className={s.contact__subtitle}>Call me or send me request</h4>

                <ul className={s.contact__info}>
                    <li className={s.contact__info_item}>
                        <img
                            className={s.contact__info_icon}
                            src={phoneImg}
                            alt=""
                        />
                        (+380)508669945
                    </li>
                    <li className={s.contact__info_item} >
                        <img
                            className={s.contact__info_icon}
                            src={emailImg}
                            alt=""
                        />
                        max2000pl@gmail.сom
                    </li>
                </ul>

                <ModalHireMeForm />
            </div>
        </div>
    );
};

export default ModalHireMe;
