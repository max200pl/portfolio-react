// https://www.figma.com/file/zDlwMyy0LFHCO4CiXLcK7k/Login-Page-Perfect-UI-(Freebie)-(Community)?type=design&node-id=401%3A4165&mode=dev

import {
    Chip,
    Divider,
    Link
} from "@mui/material";
import React from "react";
import ButtonAuthGitHub from "../../../assets/components/ButtonAuthGitHub/ButtonAuthGitHub";
import ButtonAuthGoole from "../../../assets/components/ButtonAuthGoole/ButtonAuthGoole";
import AuthForm from "../../../forms/AuthForm/AuthForm";
import AuthModal from "../AuthModal";
import s from "./AuthSignIn.module.scss";
import { useNavigate } from "react-router-dom";
import { TypeActionAuth } from '../../../assets/api/auth.api';
import * as yup from "yup";
import { emailRegExp } from "../../../assets/helpers/regular-expressions";



export type SubmitSignInFormValues = {
    email: string;
    password: string;
    remember: boolean;
};

const schema = yup.object().shape({
    email: yup
        .string()
        .test(
            "emailOrPhone",
            "Invalid format. Please enter a valid email.",
            (value) => {
                return emailRegExp.test(value ?? ""); // || phonePattern.test(value ?? "");
            }
        )
        .required("Email is required").defined(),
    password: yup
        .string()
        .trim()
        .required("Enter password")
        .min(6, "Password must be at least 6 characters long.").defined(),
    remember: yup.boolean().defined(),
});


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

            <ButtonAuthGoole typeAction="login" />
            <ButtonAuthGitHub typeAction="login" />

            <Divider className={s["form_control"]}>
                <Chip label="OR" size="small" />
            </Divider>

            <AuthForm type={typeAction} schema={schema} />
        </AuthModal>
    );
};

export default AuthSignIn;