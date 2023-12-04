import React, { useState } from "react";
import s from "./WorkCreator.module.scss";

import { ReactComponent as PlusImage } from "../../../images/plus.svg";

const WorkCreator = ({
    category,
    date,
    name,
    cardImage,
    onCardClick
}) => {

    return (
        <div className={s.work}
            onClick={() => onCardClick()}
        >
            <div className={s.work__image}>
                <PlusImage className={s.work__image_plus} />
            </div>
        </div>
    );
};

export default WorkCreator;
