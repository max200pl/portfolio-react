import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import HelloImg from "../../assets/images/header/hello.svg";
import PortfolioImg from "../../assets/images/header/portfolio.svg";
import AboutImg from "../../assets/images/header/about.svg";
/* import GithubImg from "../../assets/images/header/github.svg"; */
import ContactImg from "../../assets/images/header/contact.svg";


let dataNavLink = [
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
        name: "LogIN",
        to: "/form",
        alt: "Form",
        iconUrl: AboutImg,
    }
]

const Header = (props) => {
    return (
        <div className="container">
            <header className={s.header}>
                <div id="header__container" className={s.container}>
                    <nav className={s.nav} id="nav">
                        {dataNavLink.map((data, id) => {
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
