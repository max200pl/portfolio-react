
import s from "./WorkAdd.module.scss";

import { ReactComponent as PlusImage } from "../../../../../assets/images/plus.svg";

const WorkAdd = ({
    onCardClick
}) => {

    return (
        <div className={s.work_add}
            onClick={() => onCardClick()}
        >
            <div className={s.work_add__image}>
                <PlusImage className={s.work_add__image_plus} />
            </div>
        </div>
    );
};

export default WorkAdd;
