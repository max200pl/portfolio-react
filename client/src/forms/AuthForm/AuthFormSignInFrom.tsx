// https://www.figma.com/file/zDlwMyy0LFHCO4CiXLcK7k/Login-Page-Perfect-UI-(Freebie)-(Community)?type=design&node-id=401%3A4165&mode=dev

import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Button,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput,
    Stack,
    Switch,
    TextField,
} from "@mui/material";
import React, { useContext } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { getAuthSignInForm } from "../../assets/api/auth.api";
import { UserContext } from "../../context/user-context";
import s from "./AuthFormSignInFrom.module.scss";


export type SubmitFormValues = {
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
                // const phonePattern = /^(\+\d{1,3})?\d{10}$/;
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailPattern.test(value ?? ""); // || phonePattern.test(value ?? "");
            }
        )
        .required("Email is required"),
    password: yup
        .string()
        .trim()
        .required("Enter password")
        .min(6, "Password must be at least 6 characters long."),
    remember: yup.boolean().default(true),
});

const AuthFormSignInFrom: React.FC = () => {
    const navigate = useNavigate();
    const userCtx = useContext(UserContext);
    const [showPassword, setShowPassword] = React.useState(false);


    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SubmitFormValues>({
        mode: "onSubmit",
        resolver: yupResolver(schema),
        defaultValues: {
            remember: true,
        }
    });

    const onSubmit: SubmitHandler<SubmitFormValues> = async (data) => {
        // console.log("SubmitFormValues", data)
        try {
            const response = await getAuthSignInForm(data);
            userCtx.logInUser(response.user);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        variant="outlined"
                        label="Email"
                        className={s["form_control"]}
                        size="small"
                        margin="none"
                        error={!!errors.email}
                        helperText={errors?.email?.message}
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
                            error={!!errors.password}

                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword((show) => !show)}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />

                        {errors?.password?.message && (
                            <FormHelperText error id="accountId-error">
                                {errors?.password?.message}
                            </FormHelperText>
                        )}
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
                <Controller
                    name="remember"
                    control={control}
                    render={({ field }) => {
                        return <Switch
                            {...field}
                            checked={field.value}
                            color="primary"
                        />
                    }}
                />

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
        </form>
    );
};

export default AuthFormSignInFrom;
