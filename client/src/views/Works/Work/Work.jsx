import React, { useState } from "react";
import s from "./Work.module.scss";
import { getFolderName, getImageName, getYear } from "../../../helpers/helpers";
import ImageLazyLoad from "../../../components/ImageLazyLoad/ImageLazyLoad";


const Work = ({
    category,
    date,
    name,
    cardImage,
    onCardClick
}) => {
    const imageName = getImageName(cardImage.name)
    const folderName = getFolderName(cardImage.name)
    const urlImage = `http://localhost:8000/works/image?project=${folderName}&name=${imageName}`;

    return (
        <div className={s.work}
            onClick={() => onCardClick()}
        >
            <div className={s.work__image}>
                <ImageLazyLoad
                    blurHash={cardImage.blurHash}
                    name={cardImage.name}
                    url={urlImage}
                />
            </div>

            <div className={s.work__content}>
                <div className={s.work__cat}>{category}</div>
                <div className={s.work__title}>
                    {name}
                    <time className={s.work__date}>{getYear(date)}</time>
                </div>
            </div>
        </div>
    );
};

export default Work;
