import useInput from "../../hooks/use-input";


const inNotEmpty = value => value.trim() !== "";
const isEmail = value => value.includes("@");


const SimpleInput = () => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(inNotEmpty);

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(isEmail)

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        resetNameInput()
        resetEmailInput()
    };

    const nameInputClasses = nameInputHasError
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailInputHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={submitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name"></label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError && <p>Name is must not be empty</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email"></label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && <p>Name is must not be empty</p>}
            </div>

            <button disabled={!formIsValid}>Submit</button>
        </form>
    );
};

export default SimpleInput;
