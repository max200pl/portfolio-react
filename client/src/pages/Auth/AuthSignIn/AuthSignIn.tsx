// https://www.figma.com/file/zDlwMyy0LFHCO4CiXLcK7k/Login-Page-Perfect-UI-(Freebie)-(Community)?type=design&node-id=401%3A4165&mode=dev

import {
    Chip,
    Divider,
    Link
} from "@mui/material";
import React from "react";
import ButtonAuthGitHub from "../../../assets/components/ButtonAuthGitHub/ButtonAuthGitHub";
import ButtonAuthGoole from "../../../assets/components/ButtonAuthGoole/ButtonAuthGoole";
import AuthFormSignInFrom from "../../../forms/AuthForm/AuthFormSignInFrom";
import AuthModal from "../AuthModal";
import s from "./AuthSignIn.module.scss";
import { useNavigate } from "react-router-dom";
import { TypeActionAuth } from '../../../assets/api/auth.api';


const AuthSignIn: React.FC = () => {
    const navigate = useNavigate();
    const { signUp_link } = s;
    const typeAction = "login" as TypeActionAuth;

    return (
        <AuthModal typeAction={typeAction}>
            <div className={signUp_link}>
                <span>Don't have an account? </span>
                <Link href="" onClick={() => navigate("/auth/sign-up")} underline="hover">
                    Sign Up
                </Link>
            </div>

            <ButtonAuthGoole />
            <ButtonAuthGitHub />

            <Divider className={s["form_control"]}>
                <Chip label="OR" size="small" />
            </Divider>

            <AuthFormSignInFrom type={typeAction} />
        </AuthModal>
    );
};

export default AuthSignIn;
