import React, { useState, useEffect } from 'react';
import Input from '../../../Input/Input';

const ModalHireMeForm = () => {
    //2) Проверять данные 
    //3) Отобразить кнопку (добавить класс)
    //1) Собрать данные и хранить их в localStorage 
    // при закрытии окна если не отправили форму 
    // 1.1 при открытии показывать пользователю 

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [formIsValid, setFormIsValid] = useState('');

    //const {isValid: emailIsValid} = emailState;
    //const {isValid: nameIsValid} = nameState;

    let dataForm = {
        name: enteredName,
        email: enteredEmail,
        request: enteredDescription
    }

    console.log(dataForm)

    useEffect(() => {
        const identifier = setTimeout(() => { //use debouncing

            // eslint-disable-next-line no-undef
            setFormIsValid( //когда компонента первый раз отрендерилась 
                enteredEmail.includes('@') && enteredName.trim().length > 6
            )
        }, 1000)

        return () => {
            //cleanup function before useEffect executes this function next time, 
            //and not ran when first execution
            clearTimeout(identifier);
        };
    }, [enteredEmail, enteredName])

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    }

    const validateNameHandler = (e)=>{
        
    }

    const validateEmailHandler  = (e)=>{
        
    }

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    }
    const descriptionChangeHandler = (e) => {
        // eslint-disable-next-line no-undef
        setEnteredDescription(e.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={submitHandler}>
            {/** NEED FOR SEND */}
            {/*  <input type="hidden" name="project_name" value="Portfolio" />
            <input
                type="hidden"
                name="admin_email"
                value="max2000pl@gmail.com"
            />
            <input type="hidden" name="form_subject" value="Заявка с формы" /> */}

            <Input 
                //value={nameState.value}
                label="Name"
                name="name"
                type="text"
                id="input-name"
                placeholder="What's your name?"
                onChange={nameChangeHandler}
                onBlur={validateNameHandler} 
            />
            <Input 
                 //value={emailState.value}
                 label="Name"
                 name="email"
                 type="email"
                 id="input-email"
                 placeholder="Address e-mail"
                 required
                 //isValid={emailIsValid}
                 onChange={emailChangeHandler}
                 onBlur={validateEmailHandler}
            />

            <Input 
                 // value={requestState.value}
                 name="messages"
                 type="textarea"
                 id="input-text"
                 placeholder="Request"
                 required
                 onChange={descriptionChangeHandler}
            /> 

            <button id="btn-form" class={ `${formIsValid? "btn_hide" : "btn"} position_right` } type="submit">
                Send
            </button>
        </form>
    )
}

export default ModalHireMeForm