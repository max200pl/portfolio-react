import React, { useEffect, useRef } from 'react'
import s from "./WorkModalSlider.scss"
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/zoom";
import 'swiper/css/effect-fade';
import ImageLazyLoad from '../../../../components/ImageLazyLoad/ImageLazyLoad';
import { getUrlWorkImage } from '../../../../helpers/helpers';

export const WorkModalSlider = ({ images }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            onSlideChange={() => { }}
            onSwiper={(swiper) => { }}
            zoom={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style={{
                "--swiper-navigation-color": "#10AEDF",
                "--swiper-pagination-color": "#10AEDF",
            }}
        >
            {images &&
                images.map((image, id) => {
                    const URL_IMG = getUrlWorkImage(image.name)

                    return <SwiperSlide key={id} className={s.work_slide}>
                        <div className="swiper-zoom-container">
                            <ImageLazyLoad blurHash={image.blurHash} name={image.name} url={URL_IMG} />
                        </div>
                    </SwiperSlide>
                })
            }
        </Swiper>
    );

};