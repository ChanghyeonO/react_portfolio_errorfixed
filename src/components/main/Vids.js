import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState, useRef } from "react";

function Vids() {
    return (
        <main id="vids" className='myScroll'>
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={
                    {
                        clickable: true,
                    }
                }
                spaceBetween={60}
                navigation={true}
                loop={true}
                slidesPerView={3}
                centeredSlides={true}
            >
                <SwiperSlide><div className="inner"></div></SwiperSlide>
                <SwiperSlide><div className="inner"></div></SwiperSlide>
                <SwiperSlide><div className="inner"></div></SwiperSlide>
                <SwiperSlide><div className="inner"></div></SwiperSlide>
                <SwiperSlide><div className="inner"></div></SwiperSlide>
            </Swiper>
            {/* <video src={process.env.PUBLIC_URL + '/img/sky.mp4'} loop autoPlay muted></video> */}
        </main>
    );
}
export default Vids;