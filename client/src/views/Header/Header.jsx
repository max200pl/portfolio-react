import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import s from "./Header.module.scss";
import HelloImg from "../../images/header/hello.svg";
import PortfolioImg from "../../images/header/portfolio.svg";
import AboutImg from "../../images/header/about.svg";
/* import GithubImg from "../../images/header/github.svg"; */
import ContactImg from "../../images/header/contact.svg";
import AuthContext from "../../store/auth-context";

let dataNavLink = [
    {
        name: "Hello",
        to: "/",
        alt: "base page",
        iconUrl: HelloImg,
    },
    {
        name: "Portfolio",
        to: "/portfolio",
        alt: "my works portfolio",
        iconUrl: PortfolioImg,
    },
    {
        name: "About me",
        to: "/about",
        alt: "about me",
        iconUrl: AboutImg,
    },
    {
        name: "LogIN",
        to: "/form",
        alt: "Form",
        iconUrl: AboutImg,
    }
]

const Header = (props) => {
    const ctx = useContext(AuthContext);

    return (
        <div className="container">
            <header className={s.header}>
                <div id="header__container" className={s.container}>
                    <nav className={s.nav} id="nav">
                        {dataNavLink.map((data, id) => {
                            if (ctx.isLoggedIn && data.name === "LogIN") {
                                  data.name = "LogOUT" 
                            }
                            return ( 
                                <NavLink key={id}
                                    className={({ isActive }) => isActive ? s.nav__link_active : s.nav__link}
                                    to={data.to}
                                    target={data.target}
                                    rel={data.rel}
                                >
                                    <img className={s.nav__img} src={data.iconUrl} alt={data.alt}></img>
                                    <span>{data.name}</span>
                                </NavLink>
                            )
                        })
                        }

                        {/* <a className={s.nav__link} href="https://github.com/max200pl" target="_blank" rel="noreferrer">
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
