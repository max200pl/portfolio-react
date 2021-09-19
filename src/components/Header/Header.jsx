import React from "react";
import { Link } from "react-router-dom";

import s from "./Header.module.scss";
import HelloImg from "../../img/header/hello.svg";
import PortfolioImg from "../../img/header/portfolio.svg";
import AboutImg from "../../img/header/about.svg";
import GithubImg from "../../img/header/github.svg";
import ContactImg from "../../img/header/contact.svg";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div id="header__container" className={s.container}>
        <nav className={s.nav} id="nav">
          <Link className={s.nav__link} to="/">
            <img className={s.nav__img} src={HelloImg} alt="scrollup"></img>
            <span>Hello</span>
          </Link>
          <Link className={s.nav__link} to="/portfolio">
            <img
              className={s.nav__img}
              src={PortfolioImg}
              alt="my works portfolio"
            ></img>
            <span>Portfolio</span>
          </Link>
          <Link className={s.nav__link} to="/about">
            <img className={s.nav__img} src={AboutImg} alt="about me "></img>
            <span>About me</span>
          </Link>
          <Link
            className={s.nav__link}
            rel="noreferrer"
            to="https://github.com/max200pl"
            target="_blank"
          >
            <img className={s.nav__img} src={GithubImg} alt="link github"></img>
            <span>My github</span>
          </Link>
          <button
            className={s.nav__link + " " + s.nav__link_btn}
            data-modal="#modal_hire-me"
          >
            <img className={s.nav__img} src={ContactImg} alt="contact me"></img>
            <span>Contact me</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
