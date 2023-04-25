import { Swiper, SwiperSlide } from "swiper/react"
import {  Autoplay, EffectCube, Pagination, EffectFade } from "swiper"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import C from "./WorkItemSwiper.module.scss";

export default function WorkItemSwiper(props: {images:string[]}) {
  return (
    <>
      <Swiper
        effect={"fade"}
        fadeEffect= {{
          crossFade: true
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        pagination={true}
        modules={[Autoplay, EffectFade, Pagination]}
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
