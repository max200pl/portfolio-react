import s from "./ModalSeeMyResumeActionBar.module.scss"

const ModalSeeMyResumeActionBar = (props) => {
    return (
        <div className={s.resume_action_bar}>
            <button onClick={props.onClick} className={s.resume_action_bar__button}>1</button>
            <button onClick={props.onClick} className={s.resume_action_bar__button}>1</button>
            <button onClick={props.onClick} className={s.resume_action_bar__button}>1</button>
        </div>
    )
}

export default ModalSeeMyResumeActionBar