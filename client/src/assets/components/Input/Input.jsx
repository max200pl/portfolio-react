import s from "./Input.module.scss"

/* const errorMessages = {
    length : "At least 3 characters required!",
    format : "Your email address must be in the format of name@domain.com",
    empty: "Please specify your name"
} */

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
        value,
        //errorType,
    } = props;

    return (
        <div className={`${s.form__group} ${isValid ? '' : s.invalid}`}>
            <label className={s.form__label} htmlFor="input-name">
                {label}
            </label>

            {(type === "text" || type === "email") &&
                <input
                    value={value}
                    className={s.form__input}
                    name={name}
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    required
                />
            }

            {/*  <label id="input-name-error" className="error" htmlFor="input-name">
                {errorMessages[errorType]}
            </label> */}

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
