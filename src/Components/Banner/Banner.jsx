import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import Slide1 from "../../assets/slider1.jpg";
import Slide2 from "../../assets/slider2.jpg";
import Slide3 from "../../assets/slider3.jpg";
import Slide4 from "../../assets/slider4.jpg";
import Slide5 from "../../assets/slider5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideComp from "./SlideComp";
import "./index.css";
const bannerSlides = [
  {
    id: 1,
    title: "خدمة الاستقدام ",
    description: "هنا وصف للخدمة المقدمة من طرفنا ",
    img: Slide1,
  },
  {
    id: 2,
    title: "خدمة الاستقدام ",
    description: "هنا وصف للخدمة المقدمة من طرفنا ",
    img: Slide2,
  },
  {
    id: 3,
    title: "خدمة الاستقدام ",
    description: "هنا وصف للخدمة المقدمة من طرفنا ",
    img: Slide3,
  },
  {
    id: 4,
    title: "خدمة الاستقدام ",
    description: "هنا وصف للخدمة المقدمة من طرفنا ",
    img: Slide4,
  },
  {
    id: 5,
    title: "خدمة الاستقدام ",
    description: "هنا وصف للخدمة المقدمة من طرفنا ",
    img: Slide5,
  },
];

const Banner = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{ delay: 6000 }}
        navigation
        pagination={{ clickable: true }}
        className="swiper_container"
      >
        {bannerSlides?.map((item) => {
          return (
            <SwiperSlide key={item.id} className="swiper_holder">
              <SlideComp data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;
