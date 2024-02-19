// https://www.figma.com/file/zDlwMyy0LFHCO4CiXLcK7k/Login-Page-Perfect-UI-(Freebie)-(Community)?type=design&node-id=401%3A4165&mode=dev

import {
    Chip,
    Divider,
    Link
} from "@mui/material";
import React from "react";
import ButtonAuthGoole from "../../../assets/components/ButtonAuthGoole/ButtonAuthGoole";
import AuthForm from "../../../forms/AuthForm/AuthForm";
import AuthModal from "../AuthModal";
import s from "./AuthSignUp.module.scss";
import { useNavigate } from "react-router-dom";
import { TypeActionAuth } from "../../../assets/api/auth.api";


const AuthSignUp: React.FC = () => {
    const navigate = useNavigate();
    const { signUp_link } = s;
    const typeAction = "sign-up" as TypeActionAuth;

    return (
        <AuthModal typeAction={typeAction}>
            <div className={signUp_link}>
                <span>Have an account? </span>
                <Link href="" onClick={() => navigate("/auth/login")} underline="hover">
                    Log in now
                </Link>
            </div>
            <ButtonAuthGoole text="Google" typeAction={typeAction} />

            <Divider className={s["form_control"]}>
                <Chip label="OR" size="small" />
            </Divider>

            <AuthForm type={typeAction} />
        </AuthModal>
    );
};

export default AuthSignUp;
