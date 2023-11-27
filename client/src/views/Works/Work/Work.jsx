import React from "react";

import s from "./Work.module.scss";

const Work = ({
    name,
    category,
    date,
    img
}) => {
    const image = require(`../../../images/modal/modal-works-slider/photo-Portfolio/${img}`).default;
    return (
        <div className={s.work}
            // onClick={() => props.openModal(work)}
            onClick={() => { }}
        >
            <img className={s.work__img} src={image} alt="work" />
            <div className={s.work__content}>
                <div className={s.work__cat}>category: {category}</div>
                <div className={s.work__title}>
                    {name}
                    <time className={s.work__date}>{date}</time>
                </div>
            </div>
        </div>
    );
};

export default Work;
