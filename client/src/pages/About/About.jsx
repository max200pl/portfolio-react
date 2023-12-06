
import s from "./About.module.scss";

//import aboutPhoto from "../../img/About__me/about__photo.png";

const About = () => {
    return (
        <section className={s.about}>
            <div className="container">
                <div className={s.about__inner}>
                    <div className={s.about__content}>
                        <h3 className={s.about__title}>About me</h3>
                        <h2 className={s.about__subTitle}>Who Am I ?</h2>

                        <div className={s.about__text}>
                            <p>
                                Hello! My name is Maksym. I'm a front-end developer.
                            </p>
                            <p>
                                I have a complete higher education in the technical direction.
                            </p>
                            <p>
                                I have experience both in outsourcing companies and in one large product company Avanquest.
                            </p>
                            <p>I specialize in developing visual web and desktop applications.</p>
                            <p>
                                I use the React library to develop dynamic applications because I think it’s the most convenient one.
                            </p>
                            <p>
                                This technology also allowed to develop desktop application interfaces using the Sciter.js framework.
                            </p>
                            <p>
                                In the future I want to become a Engineer developer.
                            </p>

                            <p>
                                My main goal is self-improvement and I see my professional growth in the IT industry.
                            </p>
                        </div>

                        <button className="btn">Hire Me</button>
                        <button className="btn">See My Resume</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
