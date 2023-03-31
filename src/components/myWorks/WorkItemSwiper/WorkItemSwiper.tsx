import { Swiper, SwiperSlide } from "swiper/react"
import {  Autoplay, EffectCube, Pagination } from "swiper"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import C from "./WorkItemSwiper.module.scss";

export default function WorkItemSwiper(props: {images:string[]}) {
  return (
    <>
      <Swiper
        effect={"cube"}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        pagination={true}
        modules={[Autoplay, EffectCube, Pagination]}
        className={C.swiper}
      >
        {props.images.map((item) => 
          <SwiperSlide key={'SwiperSlide' + item}>
            <img src={item} />
          </SwiperSlide>
        )}
      </Swiper>
    </>
  )
}
