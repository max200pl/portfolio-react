
import { FC, ReactNode } from "react";
import { Fade } from "react-awesome-reveal";
import s from "./Auth.module.scss";

interface AuthModalProps {
    children: ReactNode;
    typeAction: AuthTypeAction;
}

type AuthTypeAction = "login" | "sign-up";


const AuthModal: FC<AuthModalProps> = ({ typeAction, children }) => {
    const { modal, content, modal__header, modal__title, auth_form } = s;

    return (
        <div className={modal}>
            <div className={content} onClick={(e) => e.stopPropagation()}>
                <div className={modal__header}>
                    <Fade
                        duration={100}
                        triggerOnce={true}
                        direction="left"
                        cascade
                        className={modal__title}
                    >
                        {typeAction === "login" ? "Login" : "Sign Up"}
                    </Fade>
                </div>

                <div className={auth_form}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
