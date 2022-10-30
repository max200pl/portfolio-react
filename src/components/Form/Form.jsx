import React, { useState } from "react";
import s from "./Intro.module.scss";

export default function Form(props) {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [formIsValid, setFormIsValid] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    };

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes("@"));
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);

        setFormIsValid(
            enteredEmail.includes('@') && event.target.value.trim().length > 6
        );
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    return (
        <form className={s.form} onSubmit={submitHandler}>
            <div className={`
                    ${s.form__row} 
                    ${emailIsValid === false ? s.invalid : ""}
                 `}
            >
                <input
                    className={s.form__email}
                    type="email"
                    name="email"
                    onChange={emailChangeHandler}
                    placeholder="Your email"
                    onBlur={validateEmailHandler}
                />
            </div>

            <div className={`
                    ${s.form__row} 
                    ${passwordIsValid === false ? s.invalid : ""}
                `}
            >
                <input
                    className={s.form__password}
                    type="password"
                    name="password"
                    placeholder="Your password"
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
            </div>

            <input type="submit" disabled={!formIsValid} />
        </form>
    );
}
