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
import { TypeActionAuth, getAuthForm } from "../../assets/api/auth.api";
import { UserContext } from "../../context/user-context";
import s from "./AuthForm.module.scss";
import { SubmitSignInFormValues } from "../../pages/Auth/AuthSignIn/AuthSignIn";
import { AnyObject, Maybe, ObjectSchema } from "yup";
import { SubmitSignUpFormValues } from "../../pages/Auth/AuthSignUp/AuthSignUp";
import { SetStateAction } from "../../assets/interfaces/interfaces.helpers";
import { ErrorMessage } from "./ErrorMessage";

interface AuthFormProps<T extends Maybe<AnyObject>> {
    type: TypeActionAuth;
    schema: ObjectSchema<T>;
    defaultValues?: any;
}

const AuthForm = <T extends SubmitSignUpFormValues | SubmitSignInFormValues>({
    type,
    schema,
    defaultValues,
}: AuthFormProps<T>) => {
    const navigate = useNavigate();
    const userCtx = useContext(UserContext);
    const [showPassword, setShowPassword] = React.useState(false);
    const [showError, setError] = React.useState<{ message: "string" }>();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema),
        defaultValues,
    });

    const onSubmit: SubmitHandler<
        SubmitSignUpFormValues | SubmitSignInFormValues
    > = async (data) => {
        console.log("SubmitFormValues", data);
        try {
            const response = await getAuthForm(type, data);

            console.log("response", response);
            setError(undefined);
            userCtx.authUser(response.user);
            navigate("/");
        } catch (error) {
            const { response } = error as { response: { data: { message: string } } };
            setError(response.data as SetStateAction<{ message: "string"; } | undefined>);
            console.log(error);
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            {
                showError && <ErrorMessage message={showError.message} />
            }
            {type === "sign-up" && (
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                    className={s["form_control"]}
                >
                    <Controller
                        name="firstName"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant="outlined"
                                label="First Name"
                                size="small"
                                margin="none"
                                error={!!errors.firstName}
                                helperText={<>{errors?.firstName?.message}</>}
                                fullWidth
                            />
                        )}
                    />
                    <Controller
                        name="lastName"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant="outlined"
                                label="Last Name"
                                size="small"
                                margin="none"
                                error={!!errors.lastName}
                                helperText={<>{errors?.lastName?.message}</>}
                                fullWidth
                            />
                        )}
                    />
                </Stack>
            )}

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
                        helperText={<>{errors?.email?.message}</>}
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
                                <>{errors?.password?.message}</>
                            </FormHelperText>
                        )}
                    </FormControl>
                )}
            />
            {type === "login" && (
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
                            return (
                                <Switch {...field} checked={field.value} color="primary" />
                            );
                        }}
                    />

                    <Link href="#" underline="hover" color="inherit">
                        Forgot password?
                    </Link>
                </Stack>
            )}

            <Button
                className={`${s["form_control"]} ${s["form_control__submit"]}`}
                variant="contained"
                type="submit"
            >
                {type === "sign-up" ? "Sign Up" : "Sign in"}
            </Button>
        </form>
    );
};

export default AuthForm;
