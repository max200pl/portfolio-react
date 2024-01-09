import { FC } from "react";
import s from "./Auth.module.scss";
import { Fade } from "react-awesome-reveal";
import AuthForm from "../../forms/AuthForm/AuthForm";

const Auth: FC = () => {
    return (
        <div className={s.modal}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <div className={s.modal__header}>
                    <Fade duration={100} triggerOnce={true} direction="left" cascade className={s.modal__title}>
                        Log In
                    </Fade>
                </div>
                <AuthForm />
            </div>
        </div>
    );
};

export default Auth;
