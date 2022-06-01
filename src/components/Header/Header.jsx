import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Header.module.scss";
import HelloImg from "../../images/header/hello.svg";
import PortfolioImg from "../../images/header/portfolio.svg";
import AboutImg from "../../images/header/about.svg";
import GithubImg from "../../images/header/github.svg";
import ContactImg from "../../images/header/contact.svg";

const Header = (props) => (
	<div className="container">
		<header className={s.header}>
			<div id="header__container" className={s.container}>
				<nav className={s.nav} id="nav">
					<NavLink className={s.nav__link} to="/">
						<img className={s.nav__img} src={HelloImg} alt="scrollup"></img>
						<span>Hello</span>
					</NavLink>
					<NavLink className={s.nav__link} to="/portfolio">
						<img
							className={s.nav__img}
							src={PortfolioImg}
							alt="my works portfolio"
						></img>
						<span>Portfolio</span>
					</NavLink>
					<NavLink className={s.nav__link} to="/about">
						<img className={s.nav__img} src={AboutImg} alt="about me "></img>
						<span>About me</span>
					</NavLink>
					<NavLink
						className={s.nav__link}
						rel="noreferrer"
						to={{ pathname: "https://github.com/max200pl" }}
						target="_blank"
					>
						<img className={s.nav__img} src={GithubImg} alt="link github"></img>
						<span>My github</span>
					</NavLink>
					<button className={s.nav__link + " " + s.nav__link_btn}>
						<img className={s.nav__img} src={ContactImg} alt="contact me"></img>
						<span>Contact me</span>
					</button>
				</nav>
			</div>
		</header>
	</div>
);

export default Header;
