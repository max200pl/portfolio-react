import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import HelloImg from "../../assets/images/header/hello.svg";
import PortfolioImg from "../../assets/images/header/portfolio.svg";
import AboutImg from "../../assets/images/header/about.svg";
import ContactImg from "../../assets/images/header/contact.svg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";

const dataNavLink = (isAuth, logOutUserHandler) => [
    {
        name: "Hello",
        to: "/",
        alt: "base page",
        iconUrl: HelloImg,
    },
    {
        name: "About me",
        to: "/about",
        alt: "about me",
        iconUrl: AboutImg,
    },
    {
        name: "Gallery photos",
        to: "/gallery",
        alt: "my works photos",
        iconUrl: PortfolioImg,
    },
    {
        name: isAuth ? "LogOut" : "LogIn",
        to: isAuth ? "/" : "/auth/login",
        alt: "authorization",
        iconUrl: AboutImg,
    }
]

const Header = (props) => {
    const userCtx = useContext(UserContext);
    // console.log(userCtx.isAuth, "userCtx.isAuth", userCtx.user, "userCtx.user")
    const [user, setUser] = useState();
    const [isAuth, setIsAuth] = useState();

    useEffect(() => {
        setUser(userCtx.user);
        setIsAuth(userCtx.isAuth);
    }, [
        userCtx.isAuth,
        userCtx.user,
    ])


    return (
        <div className="container">
            {user &&
                <div className={s.auth_info}>
                    <img src={user.avatarUrl} alt="avatar" className={s.auth_info__avatar} />
                    <div className={s.auth_info__data}>
                        <span>You: </span>
                        {user.name ?
                            <span>{user.name}</span>
                            : <>
                                <span>{user.firstName} </span>
                                <span>{user.lastName}</span>
                            </>
                        }
                    </div>
                </div>
            }

            <header className={s.header}>
                <div className={s.container}>
                    <nav className={s.nav} id="nav">
                        {dataNavLink(isAuth, userCtx.logOutUser).map((data, id) => {
                            return (
                                <NavLink key={id}
                                    className={({ isActive }) => isActive ? s.nav__link_active : s.nav__link}
                                    to={data.to}
                                    target={data.target}
                                    rel={data.rel}
                                    onClick={() => {
                                        data.name === "LogOut" &&
                                            userCtx.logOutUser()
                                    }}
                                >
                                    <img className={s.nav__img} src={data.iconUrl} alt={data.alt}></img>
                                    <span>{data.name}</span>
                                </NavLink>
                            )
                        })
                        }

                        {/*  <a className={s.nav__link} href="https://github.com/max200pl" target="_blank" rel="noreferrer">
                            <img className={s.nav__img} src={GithubImg} alt="link github" />
                            <span>My github</span>
                        </a> */}
                        <button className={s.nav__link + " " + s.nav__link_btn} >
                            <img className={s.nav__img} src={ContactImg} alt="contact me"></img>
                            <span>Contact me</span>
                        </button>
                    </nav>
                </div>
            </header >
        </div >
    )
}


export default Header;
