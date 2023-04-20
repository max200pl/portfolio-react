import React, { useState, useEffect, useReducer } from "react";
import Input from "../../../Input/Input";
import { addToLocalStorageObj, getFromLocalStorageObj } from "../../../../helpers/helpers";

const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.value, isValid: action.value.includes("@") };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
    }
    return { value: "", isValid: false };
};

const nameReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.value, isValid: action.value.trim().length > 6 };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: "", isValid: false };
};

const ModalHireMeForm = (props) => {
    //2) Проверять данные
    //3) Отобразить кнопку (добавить класс)
    //1) Собрать данные и хранить их в localStorage
    // при закрытии окна если не отправили форму
    // 1.1 при открытии показывать пользователю

    /* const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState(""); */
    // const [emailIsValid, setEmailIsValid] = useState("");
    // const [nameIsValid, setNameIsValid] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
    const [formIsValid, setFormIsValid] = useState("");

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: getFromLocalStorageObj('hireMeForm', "email"),
        isValid: null,
    });
    const [nameState, dispatchName] = useReducer(nameReducer, {
        value: getFromLocalStorageObj('hireMeForm', "name"),
        isValid: null,
    });

    const { isValid: emailIsValid} = emailState;
    const { isValid: nameIsValid} = nameState;

    
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
    }, [emailIsValid, nameIsValid ]);

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
        addToLocalStorageObj('hireMeForm', "description", enteredDescription)
    };

    const validateNameHandler = (e) => {
        //setNameIsValid(enteredName.trim().length > 6)
        dispatchName({ type: "INPUT_BLUR" });
        localStorage.setItem('hireMeForm', JSON.stringify({name: nameState.value}))
        addToLocalStorageObj('hireMeForm', "name", nameState.value)
    };

    const validateEmailHandler = (e) => {
        // setEmailIsValid(emailState.isValid)
        dispatchEmail({ type: "INPUT_BLUR" });
        addToLocalStorageObj('hireMeForm', "email", emailState.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();
        localStorage.removeItem("hireMeForm")
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
                isValid={nameState.isValid}
                onChange={nameChangeHandler}
                onBlur={validateNameHandler}
            />

            <Input
                value={emailState.value}
                label="Name"
                name="email"
                type="email"
                id="input-email"
                placeholder="Address e-mail"
                isValid={emailState.isValid}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
            />

            <Input
                // value={requestState.value}
                name="messages"
                type="textarea"
                id="input-text"
                placeholder="Request"
                onChange={descriptionChangeHandler}
            />

            <button
                id="btn-form"
                className={`${formIsValid ? "btn light" : "btn btn_hide"} position_right`}
                type="submit"
            >
                Send
            </button>
        </form>
    );
};

export default ModalHireMeForm;
