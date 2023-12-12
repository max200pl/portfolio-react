import { Blurhash } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import s from "./ImageLazyLoad.module.scss";
import { useState } from "react";
import Loader from "../Loader/Loader";

export default function ImageLazyLoad({ url = '', name = '', mixin = '', blurHash = undefined }) {
    const [isLoaded, setLoaded] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
    };

    return (
        <div className={s.img} mixin={mixin}>
            <LazyLoadImage
                className={s.img__lazy_load}
                key={name}
                src={url}
                width={"100%"}
                height={"100%"}
                onLoad={handleLoad}
            />

            {!isLoaded &&
                <Loader />
            }

            {(!isLoaded && blurHash) && (
                <Blurhash
                    className={s.img__blurHash}
                    hash={blurHash}
                    width={"100%"}
                    height={"100%"}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            )}
        </div>
    );
}
