import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GithubLoginButton } from "react-social-login-buttons";
import { UserContext } from "../../../context/user-context";
import { TypeActionAuth, getAuthGitHub } from "../../api/auth.api";
import s from "./ButtonAuthGitHub.module.scss";
import { ErrorMessage } from "../../../forms/AuthForm/ErrorMessage";
import { SetStateAction } from "../../interfaces/interfaces.helpers";

const GITHUB_CLIENT_ID = "d54cbcb0435f980b2bf1";

const ButtonAuthGitHub = ({ typeAction }: { typeAction: TypeActionAuth }) => {
    const navigate = useNavigate();
    const userCtx = useContext(UserContext);
    const [showError, setError] = useState<{ message: "string" }>();

    const getAuthCode = () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get("code");
    }

    const githubLoginHandler = async () => {
        window.location.assign("https://github.com/login/oauth/authorize?client_id=" + GITHUB_CLIENT_ID);
    };

    useEffect(() => {
        const code = getAuthCode();
        if (code) {
            getAuthGitHub("login", { code })
                .then((authGitHubResponse) => {
                    console.log("authGitHubResponse", authGitHubResponse);
                    userCtx.authUser(authGitHubResponse.user);
                    navigate("/");
                })
                .catch((error) => {
                    const { response } = error as { response: { data: { message: string } } };
                    setError(response.data as SetStateAction<{ message: "string"; } | undefined>);
                    console.log(error);
                })
        }
    }, [navigate, userCtx]);

    return (<>
        {
            showError && <ErrorMessage message={showError.message} />
        }
        <GithubLoginButton text="GitHub" className={`${s["form_control"]} ${s["form_control__login"]}`} onClick={githubLoginHandler} align="center" />
    </>
    );
};

export default ButtonAuthGitHub;
