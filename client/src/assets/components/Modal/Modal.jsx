import React, { useRef } from "react";
import { useEffect } from "react";
import s from "./Modal.module.scss";
import ReactPortal from "../../helpers/ReactPortal";
import { CSSTransition } from "react-transition-group";


const Modal = ({ children, isOpen, handleClose, position = undefined }) => {
    const nodeRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.className = "modal-open";
        }
        return () => {
            document.body.className = "";
        };
    }, [isOpen, handleClose]);

    useEffect(() => {
        const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [handleClose]);

    return (
        <ReactPortal wrapperId="react-portal-modal-container">
            <CSSTransition
                in={isOpen}
                timeout={{ entry: 0, exit: 300 }}
                unmountOnExit
                classNames="modal"
                position={position}
                nodeRef={nodeRef}
            >
                <div
                    className={
                        isOpen
                            ? `${s.modal} ${s["modal-enter-done"]}`
                            : `${s.modal} ${s["modal-exit"]}`

                    }
                    ref={nodeRef}
                    onClick={handleClose}
                >
                    {children}
                </div>
            </CSSTransition>
        </ReactPortal>
    );
};

export default Modal;
