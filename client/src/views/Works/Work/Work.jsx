import React from "react";
import moment from "moment";
import s from "./Work.module.scss";
import { Blurhash } from "react-blurhash";

import {
    LazyLoadImage,
} from "react-lazy-load-image-component";

const Work = ({
    id,
    category,
    client,
    date,
    name,
    technology,
    cardImage,
    images,
}) => {

    return (
        <div key={id} className={s.work}
            // onClick={() => props.openModal(work)}
            onClick={() => { }}
        >
            {/*   <LazyLoadImage
                key={image.name}
                src={url}
                height={500}
                width={333}
                onLoad={handleLoad}
                beforeLoad={handleLoadStarted}
            /> */}

            {/* {!isLoaded && isLoadStarted && ( */}
            {/*  // <LazyLoadComponent> */}
            <Blurhash
                hash={cardImage.blurHash}
                width={300}
                height={290}
                resolutionX={32}
                resolutionY={32}
                punch={1}
            />
            {/*   // </LazyLoadComponent> */}

            {/* <img src={cardImage.blurHash} alt="work" /> */}
            <div className={s.work__content}>
                <div className={s.work__cat}>category: {category}</div>
                <div className={s.work__title}>
                    {name}
                    <time className={s.work__date}>{moment(date).format("yyyy")}</time>
                </div>
            </div>
        </div>
    );
};

export default Work;
