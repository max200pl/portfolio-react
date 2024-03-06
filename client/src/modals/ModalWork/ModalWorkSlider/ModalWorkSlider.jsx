import s from "./ModalWorkSlider.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/zoom";
import 'swiper/css/effect-fade';

const ModalWorkSlider = ({ images }) => {
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
            <SwiperSlide className={s.work_slide}>
                <div className="swiper-zoom-container">

                    {/* <ImageLazyLoad blurHash={image.blurHash} name={image.name} url={URL_IMG} /> */}
                </div>
            </SwiperSlide>
            {/* {images &&
                images.map((image, id) => {
                    const URL_IMG = getUrlWorkImage(image.name)

                    return <SwiperSlide key={id} className={s.work_slide}>
                        <div className="swiper-zoom-container">
                            <ImageLazyLoad blurHash={image.blurHash} name={image.name} url={URL_IMG} />
                        </div>
                    </SwiperSlide>
                })
            } */}
        </Swiper>
    );

};

export default ModalWorkSlider