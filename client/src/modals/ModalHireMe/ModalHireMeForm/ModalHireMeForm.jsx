import React, { useState, useEffect, useReducer } from "react";
import Input from "../../../assets/components/Input/Input";

const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {
            value: action.value,
            isValid: action.value.includes("@")
            //errorType: action.value.includes("@") ? "":  "format" ,
        };
    }
    if (action.type === "INPUT_BLUR") {
        return {
            value: state.value,
            isValid: state.value.includes("@"),
            //errorType: state.value.includes("@") ?  "" : "format",
        };
    }
    return { value: "", isValid: false, errorType: "" };
};

const nameReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {
            value: action.value,
            isValid: action.value.length > 2,
            //errorType: action.value.length > 2 ? "" : "length",
        };
    }
    if (action.type === "INPUT_BLUR") {
        console.log(state.value, "state.value")
        return {
            value: state.value,
            isValid: state.value.length > 2,
            //errorType: action.value.length > 2 ? "" : "length",
        };
    }
    return {
        value: "",
        isValid: false,
        //errorType: ""
    };
};

const ModalHireMeForm = (props) => {
    /* const [enteredEmail, setEnteredEmail] = useState('');
      const [enteredName, setEnteredName] = useState(""); */
    // const [emailIsValid, setEmailIsValid] = useState("");
    // const [nameIsValid, setNameIsValid] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
    const [formIsValid, setFormIsValid] = useState("");

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "", // getFromLocalStorageObj("hireMeForm", "email"),
        isValid: null,
        errorType: "",
    });
    const [nameState, dispatchName] = useReducer(nameReducer, {
        value: "", // getFromLocalStorageObj("hireMeForm", "name"),
        isValid: null,
        errorType: "",
    });

    // This is an alias assignment if need not run useeEffect if only value change and validity not change
    const { isValid: emailIsValid } = emailState; // other simple if we don't wanna rerun the effect whenever props change
    const { isValid: nameIsValid } = nameState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            //use debouncing
            setFormIsValid(
                // когда компонента первый раз отрендерилась
                emailIsValid && nameIsValid
            );
        }, 500);

        return () => {
            //cleanup function before useEffect executes this function next time,
            //and not ran when first execution
            clearTimeout(identifier);
        };
    }, [emailIsValid, nameIsValid]); // check only emailIsValid, nameIsValid changed not value from input

    const emailChangeHandler = (e) => {
        dispatchEmail({ type: "USER_INPUT", value: e.target.value }); // setEnteredEmail(e.target.value);
        // setFormIsValid(e.target.value.includes("@") && nameState.isValid);
    };

    const nameChangeHandler = (e) => {
        dispatchName({ type: "USER_INPUT", value: e.target.value }); //setEnteredName(e.target.value);
        // setFormIsValid(emailState.isValid && e.target.value.trim().length > 6);
    };

    const descriptionChangeHandler = (e) => {
        setEnteredDescription(e.target.value);
        //addToLocalStorageObj("hireMeForm", "description", enteredDescription);
    };

    const validateNameHandler = (e) => {
        //setNameIsValid(enteredName.trim().length > 6)
        dispatchName({ type: "INPUT_BLUR" });
        //addToLocalStorageObj("hireMeForm", "name", nameState.value);
    };

    const validateEmailHandler = (e) => {
        // setEmailIsValid(emailState.isValid)
        dispatchEmail({ type: "INPUT_BLUR" });
        //addToLocalStorageObj("hireMeForm", "email", emailState.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        //localStorage.removeItem("hireMeForm");
    };

    return (
        <form onSubmit={submitHandler}>
            <Input
                value={nameState.value}
                label="Name"
                name="name"
                type="text"
                id="input-name"
                placeholder="What's your name?"
                isValid={nameIsValid}
                onChange={nameChangeHandler}
                onBlur={validateNameHandler}
            //errorType={nameState.errorType}
            />

            <Input
                value={emailState.value}
                label="Email"
                name="email"
                type="email"
                id="input-email"
                placeholder="Address e-mail"
                isValid={emailIsValid}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
            //errorType={emailState.errorType}
            />

            <Input
                value={enteredDescription}
                name="messages"
                type="textarea"
                id="input-text"
                placeholder="Request"
                onChange={descriptionChangeHandler}
            />

            <button
                id="btn-form"
                className={`${formIsValid ? "btn light" : "btn btn_hide"
                    } position_right`}
                type="submit"
            >
                Send
            </button>
        </form>
    );
};

export default ModalHireMeForm;
