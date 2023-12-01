import React, { useState } from "react";
import s from "./Work.module.scss";
import { Blurhash } from "react-blurhash";

import {
    LazyLoadImage,
} from "react-lazy-load-image-component";
import { getFolderName, getImageName, getYear } from "../../../helpers/helpers";


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

    const [isLoaded, setLoaded] = useState(false);


    const handleLoad = () => {
        setLoaded(true);
    };


    return (
        <div className={s.work}
            onClick={() => onCardClick()}
        >
            <div className={s.work__img_wrapper}>
                <LazyLoadImage
                    className={s.work__img}
                    key={cardImage.name}
                    src={urlImage}
                    width={"100%"}
                    height={"100%"}
                    onLoad={handleLoad}
                />

                {!isLoaded &&
                    <Blurhash
                        className={s.work__img_blurHash}
                        hash={cardImage.blurHash}
                        width={"100%"}
                        height={234}
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                    />
                }
            </div>

            {/* <img src={cardImage.blurHash} alt="work" /> */}
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
