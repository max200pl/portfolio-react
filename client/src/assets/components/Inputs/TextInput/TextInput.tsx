import React from "react";
import "./TextInput.scss";

import IconEye from "./Img/eye.svg";

interface TextInputProps {
    label?: string;
    name: string;
    type: string;
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    onChange?: (evt: any) => void;
    passwordButton?: () => void;
    autoComplete?: string;
    readOnly?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
    autoComplete,
    label,
    name,
    type = "text",
    value,
    disabled,
    passwordButton,
    placeholder,
    onChange,
    readOnly,
    ...rest
}) => {

    return (
        <div
            // className={`form_control ${meta.error ? "invalid" : "valid"}`}
            aria-disabled={disabled}>
            <label className="label" htmlFor={name}>{label}</label>
            <input
                readOnly={readOnly}
                className="form_control__input"
                autoComplete={autoComplete}
                id={name}
                type={type}
                disabled={disabled}
                value={value}
                onChange={(evt) => {
                    if (onChange) {
                        onChange(evt);
                    }
                }}
                placeholder={placeholder}
            />
            <span className="animation-bg"></span>

            {/*   {(passwordButton && meta.value) && (
                <div className="action_panel">
                    <button type="button" onClick={passwordButton} className="action_panel__button">
                        <img src={IconEye} alt="Eye button img" />
                    </button>
                </div>
            )} */}

            {/*  <ErrorMessage
                className="form_control__error"
                component="div"
                name={name}
                {...rest}
            /> */}
        </div>
    );
};

export default TextInput;
