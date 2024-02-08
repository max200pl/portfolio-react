// https://www.figma.com/file/zDlwMyy0LFHCO4CiXLcK7k/Login-Page-Perfect-UI-(Freebie)-(Community)?type=design&node-id=401%3A4165&mode=dev

import {
    Chip,
    Divider
} from "@mui/material";
import React from "react";
import ButtonAuthGoole from "../../../assets/components/ButtonAuthGoole/ButtonAuthGoole";
import AuthFormSignInFrom from "../../../forms/AuthForm/AuthFormSignInFrom";
import AuthModal from "../AuthModal";
import s from "./AuthSignUp.module.scss";


const AuthSignUp: React.FC = () => {
    return (
        <AuthModal authTypeAction="sign-up">
            <ButtonAuthGoole />

            <Divider className={s["form_control"]}>
                <Chip label="OR" size="small" />
            </Divider>

            <AuthFormSignInFrom />
        </AuthModal>
    );
};

export default AuthSignUp;
