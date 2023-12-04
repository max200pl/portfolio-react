import React, { useState } from "react";
import s from "./WorkCreator.module.scss";

import { ReactComponent as PlusImage } from "../../../images/plus.svg";

const WorkCreator = ({
    onCardClick
}) => {

    return (
        <div className={s.work_creator}
            onClick={() => onCardClick()}
        >
            <div className={s.work_creator__image}>
                <PlusImage className={s.work_creator__image_plus} />
            </div>
        </div>
    );
};

export default WorkCreator;
