import React, { useState, useEffect } from 'react';
import s from "./ModalHireMeForm.module.scss";

const ModalHireMeForm = () => {
 
    //2) Валидировать данные 
    //3) Отобразить кнопку (добавить класс)
       //1) Собрать данные и хранить их в localStorage 
        // при закрытии окна если не отправили форму 
       // 1.1 при открытии показывать пользователю 
    
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [formIsValid, setFormIsValid] = useState('');

    useEffect(()=>{
        setFormIsValid ( //когда компонента первый раз отрендерилась 
            enteredEmail.includes('@') && enteredName.trim().length > 6
       )
    }, [enteredEmail, enteredName])
    
    const emailChangeHandler = (e) => {
       setEnteredEmail(e.target.value);
    } 

    const nameChangeHandler = (e) => {
       setEnteredName(e.target.value);
    } 

    const descriptionChangeHandler = (e) => {
        setEnteredDescription(e.target.value);
    } 

    const submitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form className={s.form} onSubmit={submitHandler}>
           {/*  <input type="hidden" name="project_name" value="Portfolio" />
            <input
                type="hidden"
                name="admin_email"
                value="max2000pl@gmail.com"
            />
            <input type="hidden" name="form_subject" value="Заявка с формы" /> */}
            <div className={s.form__group}>
                <label className={s.form__label} for="input-name">
                    Name
                </label>
                <input
                    className={s.form__input}
                    name="name"
                    type="text"
                    id="input-name"
                    placeholder="What's your name?"
                    onChange={nameChangeHandler}
                    onBlur={nameChangeHandler}
                    required
                />
            </div>

            <div className={s.form__group}>
                <label className={s.form__label} for="input-email">
                    Address e-mail
                </label>
                <input
                    className={s.form__input}
                    name="email"
                    type="email"
                    id="input-email"
                    placeholder="Address e-mail"
                    required
                    onChange={emailChangeHandler}
                    onBlur={emailChangeHandler}
                />
            </div>

            <div className={s.form__group}>
                <label className={s.form__label} for="input-text">
                    Request
                </label>
                <textarea
                    onChange={descriptionChangeHandler}
                    className={s.form__textarea}
                    name="messages"
                    id="input-text"
                    type="text"
                ></textarea>
            </div>
            <button id="btn-form" class="btn btn__hide" type="submit">
                Send
            </button>
        </form>
    )
}

export default ModalHireMeForm