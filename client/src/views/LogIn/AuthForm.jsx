import { useState } from "react";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const AuthForm = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [isCapsLockOn, setIsCapsLockOn] = useState(false);

    // This function is triggered on the keyup event
    const checkCapsLock = (event) => {
        if (event.getModifierState('CapsLock')) {
            setIsCapsLockOn(true);
        } else {
            setIsCapsLockOn(false);
        }
    };

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(isNotEmpty);

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput
    } = useInput(isNotEmpty);


    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    let formIsValid = false;

    if (enteredNameIsValid && enteredPasswordIsValid) {
        formIsValid = true;
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        resetNameInput();
        resetPasswordInput();
    }

    const nameInputClasses = nameInputHasError ?
        "form_control is_invalid" :
        "form_control";

    const passwordInputClasses = passwordInputHasError ?
        "form_control is_invalid" :
        "form_control";



    return (
        <form className="form" onSubmit={submitHandler}>
            <div className={nameInputClasses}>
                <label className="form_control__label" htmlFor="name">Username</label>
                <input
                    className="form_control__input"
                    type="text"
                    name="name"
                    id="name"
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError && <p>Name is must not be empty</p>}
            </div>
            <div className={passwordInputClasses}>
                <label className="form_control__label" htmlFor="password">Password</label>
                <input
                    className="form_control__input"
                    type="password"
                    name="password"
                    id="password"
                    onChange={passwordChangeHandler}
                    onBlur={passwordBlurHandler}
                    value={enteredPassword}
                />
                <div className="toggle_password">
                    {isCapsLockOn &&
                        <div className="toggle_password__text">CAPS</div>
                    }
                    <div className="toggle_password__text"> navigator.language || navigator.userLanguage; </div>
                    <button className="toggle_password__button">
                        eye password
                    </button>
                </div>

                {passwordInputHasError && <p>The proxy passwords do not match</p>}
            </div>

            <button disabled={!formIsValid}>Submit</button>
        </form>
    )
}

export default AuthForm