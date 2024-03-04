import s from "./AuthForm.module.scss";

export const ErrorMessage = (error: { message: string; }) => (
    <div className={s.errors_message}>
        <div className={s.circle_alert}>
            <svg
                className={s.circle_alert__svg}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>circle-alert</title>
                <g clip-path="url(#clip0_18594_55963)">
                    <path
                        d="M16.0002 9.4814V15.9999M16.0002 22.5184H16.0165M30.6668 15.9999C30.6668 17.926 30.2875 19.8332 29.5504 21.6126C28.8133 23.392 27.733 25.0089 26.3711 26.3708C25.0091 27.7327 23.3923 28.8131 21.6129 29.5502C19.8334 30.2872 17.9262 30.6666 16.0002 30.6666C14.0741 30.6666 12.1669 30.2872 10.3875 29.5502C8.60803 28.8131 6.99119 27.7327 5.62926 26.3708C4.26734 25.0089 3.187 23.392 2.44993 21.6126C1.71286 19.8332 1.3335 17.926 1.3335 15.9999C1.3335 12.1101 2.87873 8.37955 5.62926 5.62902C8.3798 2.87849 12.1103 1.33325 16.0002 1.33325C19.89 1.33325 23.6205 2.87849 26.3711 5.62902C29.1216 8.37955 30.6668 12.1101 30.6668 15.9999Z"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </g>
                <defs>
                    <clipPath id="clip0_18594_55963">
                        <rect width="32" height="32"></rect>
                    </clipPath>
                </defs>
            </svg>
        </div>
        <div className={s.errors_message__title}>
            <span className=" css-pc5hh0">Error</span>
        </div>
        <div className={s.errors_message__description}>
            <span className={s.errors_message__description_text}>
                {error.message ?? "Something went wrong. Please try again later."}
            </span>
        </div>
    </div>
);
