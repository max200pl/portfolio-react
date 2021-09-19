import React from "react";
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
          <a className={s.nav__link} href="#hello">
            <img className={s.nav__img} src={HelloImg} alt="scrollup"></img>
            <span>Hello</span>
          </a>
          <a className={s.nav__link} href="#portfolio">
            <img
              className={s.nav__img}
              src={PortfolioImg}
              alt="scroll to portfolio"
            ></img>
            <span>Portfolio</span>
          </a>
          <a className={s.nav__link} href="#about">
            <img
              className={s.nav__img}
              src={AboutImg}
              alt="scroll to About me "
            ></img>
            <span>About me</span>
          </a>
          <a
            className={s.nav__link}
            rel="noreferrer"
            href="https://github.com/max200pl"
            target="_blank"
          >
            <img className={s.nav__img} src={GithubImg} alt="link github"></img>
            <span>My github</span>
          </a>
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
