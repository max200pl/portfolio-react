
import s from "./ProgressBar.module.scss";

const ProgressBar = (props) => {
    const {
        text,
        precentFill,
        color,
    } = props

    const applyTech = {
        width: `${precentFill}%`,
    };

    return (
        <div color={color} className={s.progress_bar}>
            <span style={applyTech} className={s.progress_bar__filler}></span>
            <span className={s.progress_bar__text}>{text}</span>
        </div>
    );
}

export default ProgressBar