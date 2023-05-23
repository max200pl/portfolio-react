import s from "./ModalSeeMyResumeActionBar.module.scss"

const ModalSeeMyResumeActionBar = (props) => {
    return (
        <div className={s.resume_action_bar}>
            <button onClick={props.handlePrint} className={s.resume_action_bar__button}>Print</button>
            <button onClick={props.openHireMeModal} className={s.resume_action_bar__button}>Hire me</button>
            <button onClick={props.handleSavePDF} className={s.resume_action_bar__button}>Download PDF</button>
        </div>
    )
}

export default ModalSeeMyResumeActionBar