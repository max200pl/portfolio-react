import s from "././ModalSeeMyResume.module.scss";
import exitImg from "../../../images/modal/exit.svg";
import Resume from "../../Resume/Resume";

const ModalSeeMyResume = ({ isOpen, handleClose }) => {

    return (
        <div className={s.modal__dialog}>
            <button className={s.modal__close} onClick={handleClose} type="button" data-close>
                <img className={s.modal__close_image} src={exitImg} alt="Close" />
            </button>


            <Resume />
        </div>
    );
};

export default ModalSeeMyResume;