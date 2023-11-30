import React, { useLayoutEffect, useState } from "react";
import moment from "moment";
import s from "./Work.module.scss";
import { Blurhash } from "react-blurhash";

import {
    LazyLoadImage,
} from "react-lazy-load-image-component";
import { getFolderName, getImageName } from "../../../helpers/helpers";


const Work = ({
    category,
    date,
    name,
    cardImage,
    onOpenModal
}) => {

    const imageName = getImageName(cardImage.name)
    const folderName = getFolderName(cardImage.name)
    const urlImage = `http://localhost:8000/works/image?project=${folderName}&name=${imageName}`;

    const [isLoaded, setLoaded] = useState(false);
    const [isLoadStarted, setLoadStarted] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
    };

    const handleLoadStarted = () => {
        setLoadStarted(true);
    };

    useLayoutEffect(() => {
        handleLoadStarted(false)
    }, [isLoaded])


    return (
        <div className={s.work}
            onClick={() => onOpenModal(true)}
        >
            <div className={s.work__img_wrapper}>
                <LazyLoadImage
                    className={s.work__img}
                    key={cardImage.name}
                    src={urlImage}
                    width={"100%"}
                    height={"100%"}
                    onLoad={handleLoad}
                    beforeLoad={handleLoadStarted}
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
                    <time className={s.work__date}>{moment(date).format("yyyy")}</time>
                </div>
            </div>
        </div>
    );
};

export default Work;
