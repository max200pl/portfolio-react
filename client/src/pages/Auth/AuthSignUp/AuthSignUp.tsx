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
import * as yup from "yup";
import { emailRegExp } from "../../../assets/helpers/regular-expressions";
import ButtonAuthGitHub from "../../../assets/components/ButtonAuthGitHub/ButtonAuthGitHub";

export type SubmitSignUpFormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

const schema = yup.object().shape({
    firstName: yup.string().required("First name is required").min(3, "The First name should contain more than 3 characters").defined(),
    lastName: yup.string().required("Last name is required").min(3, "The Last name should contain more than 3 characters").defined(),
    email: yup
        .string()
        .test(
            "email",
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
});

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
            <ButtonAuthGoole typeAction="sign-up" />
            <ButtonAuthGitHub typeAction="sign-up" />

            <Divider className={s["form_control"]}>
                <Chip label="OR" size="small" />
            </Divider>

            <AuthForm type={typeAction} schema={schema} />
        </AuthModal>
    );
};

export default AuthSignUp;
