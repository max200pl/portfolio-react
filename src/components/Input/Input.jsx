import React from "react";
import s from "./Input.module.scss"

const Input = (props) => {
    const {
        id,
        label,
        name,
        isValid,
        type,
        placeholder,
        onChange,
        onBlur,
        value
    } = props;

    return (
        <div className={`${s.form__group} ${isValid === false ? s.invalid : ''}`}>
            <label   className={s.form__label} for="input-name">
                {label}
            </label>

            {(type === "text" || type === "email") &&
                <input
                    value={value}
                    className={s.form__input}
                    name={name}
                    type={type}
                    id={id}
                    placeholder={placeholder} // "What's your name?"
                    onChange={onChange}
                    onBlur={onBlur}
                    required
                />
            }

            {type === "textarea" &&
                <textarea
                    value={value}
                    onChange={onChange}
                    className={s.form__textarea}
                    name="messages"
                    id="input-text"
                    type="text"
                ></textarea>
            }
        </div>
    );
};

export default Input;
