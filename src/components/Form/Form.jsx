import React from 'react'
import s from './Intro.module.scss'

export default function Form() {
    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <form className={s.form} onSubmit={submitHandler}>
            <input
                className={s.form__email}
                type="email"
                name="email"
                id=""
                placeholder="Your email"
            />
            <input
                className={s.form__password}
                type="password"
                name="password"
                id=""
                placeholder="Your password"
            />
            <input type="submit" />
        </form>
    );
}
