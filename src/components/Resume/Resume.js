import ResumeListWorks from "./ResumeListWorks";
import s from "./Resume.scss";

const Resume = () => {
    return (
        <div className={s.resume}>
            <div className={s.resume_header}>
                <img className={s.resume_header__img} src="images/modal/modal-resume/photo.jpg" alt="" />
                <div className={s.resume_header__text}>
                    <div className={s.resume_header__title}>Maksym Poskannyi</div>
                    <p className={s.resume_header__subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odio
                        dolores vel, unde quo veniam totam natus cum vero neque pariatur.</p>
                </div>
                <div className={s.resume_header__info}>
                    <div className={s.resume_header__email}>
                        <span>Email:</span>
                        <span>max2000pl@gmail.com</span>
                    </div>
                    <div className={s.resume_header__phone}>
                        <span>Phone:</span>
                        <span>+380508669945</span>
                    </div>
                </div>
            </div>
            <h1 className={s.resume__title_section}>Experience</h1>

            <ResumeListWorks />
        </div>
    )
}

export default Resume