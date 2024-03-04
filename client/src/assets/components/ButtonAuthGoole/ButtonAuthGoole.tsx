import { useGoogleLogin } from "@react-oauth/google";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import { UserContext } from "../../../context/user-context";
import { getAuthGoole, TypeActionAuth } from '../../api/auth.api';
import s from "./ButtonAuthGoole.module.scss";
import { ErrorMessage } from "../../../forms/AuthForm/ErrorMessage";
import { SetStateAction } from "../../interfaces/interfaces.helpers";

const ButtonAuthGoole = ({ typeAction }: { typeAction: TypeActionAuth }) => {
    const navigate = useNavigate();
    const userCtx = useContext(UserContext);
    const [showError, setError] = useState<{ message: "string" }>();


    const googleLoginHandler = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            try {
                const authGooleResponse = await getAuthGoole(typeAction, codeResponse);
                if (authGooleResponse.user === undefined) {
                    throw new Error("User not found");
                }
                userCtx.authUser(authGooleResponse.user);
                navigate("/");
            } catch (error) {
                const { response } = error as { response: { data: { message: string } } };
                setError(response.data as SetStateAction<{ message: "string"; } | undefined>);
                console.log(error);
            }
        },
        onError: (error) => console.log("Login with Goole Failed:", error),
    });

    return (
        <>
            {
                showError && <ErrorMessage message={showError.message} />
            }

            <GoogleLoginButton
                className={`${s["form_control"]} ${s["form_control__login"]}`}
                onClick={() => googleLoginHandler()}
                text={"Google"}
                align="center"
            />
        </>
    );
};

export default ButtonAuthGoole;
