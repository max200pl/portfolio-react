// https://www.figma.com/file/zDlwMyy0LFHCO4CiXLcK7k/Login-Page-Perfect-UI-(Freebie)-(Community)?type=design&node-id=401%3A4165&mode=dev

import { yupResolver } from "@hookform/resolvers/yup";
import {
    Button,
    Chip,
    Divider,
    FormControl,
    FormControlLabel,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput,
    Stack,
    Switch,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import * as yup from "yup";
import s from "./AuthForm.module.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useGoogleLogin } from "@react-oauth/google";
import { getAuthGoole } from "../../assets/api/auth.api";


type FormValues = {
    emailOrPhone: string;
    password: string;
};

type TypeActionForm = "login" | "register";

const schema = yup.object().shape({
    emailOrPhone: yup
        .string()
        .test(
            "emailOrPhone",
            "Invalid format. Please enter a valid email or phone number.",
            (value) => {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const phonePattern = /^\d{10}$/;

                return emailPattern.test(value ?? "") || phonePattern.test(value ?? "");
            }
        )
        .required("Email or phone number is required"),
    password: yup
        .string()
        .trim()
        .required("Enter password")
        .min(6, "Password must be at least 6 characters long."),
});

const AuthForm: React.FC = () => {
    const [typeActionForm] = useState<TypeActionForm>("login");
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        console.log(data);
    };

    const googleLoginHandler = useGoogleLogin({
        onSuccess: codeResponse => {
            const googleResponse = getAuthGoole(codeResponse);
        },
        onError: (error) => console.log('Login Failed:', error),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <Controller
                name="emailOrPhone"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        variant="outlined"
                        label="Email or phone"
                        className={s["form_control"]}
                        size="small"
                        margin="none"
                        error={!!errors.emailOrPhone}
                        helperText={errors?.emailOrPhone?.message}
                        fullWidth
                    />
                )}
            />
            <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <FormControl
                        variant="outlined"
                        className={s["form_control"]}
                        size="small"
                        margin="none"
                    >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            label="Password"
                            {...field}
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                )}
            />

            <Stack
                className={s["form_control"]}
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
            >
                <FormControlLabel control={<Switch />} label="Remember" />
                <Link href="#" underline="hover" color="inherit">
                    Forgot password?
                </Link>
            </Stack>

            <Button
                className={`${s["form_control"]} action_button_primary`}
                variant="contained"
                type="submit"
            >
                Sign in
            </Button>

            <Divider className={s["form_control"]}>
                <Chip label="OR" size="small" />
            </Divider>



            <GoogleLoginButton className={`${s["form_control"]} ${s["form_control__login"]}`} onClick={() => googleLoginHandler()} align="center" />
            <GithubLoginButton className={`${s["form_control"]} ${s["form_control__login"]}`} onClick={() => alert("Hello")} align="center" />
        </form>
    );
};

export default AuthForm;
