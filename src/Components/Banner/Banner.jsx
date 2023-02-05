import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
} from "swiper";
import Slide1 from "../../assets/slider1.webp";
import Slide2 from "../../assets/slider2.webp";
import Slide3 from "../../assets/slider3.webp";
import Slide4 from "../../assets/slider4.webp";
import Slide5 from "../../assets/slider5.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideComp from "./SlideComp";
import "./index.css";
const bannerSlides = [
  {
    id: 1,
    title: "زهران لتوفير العمالة الافضل ",
    description:
      "مع زهران  توفر العمالة  المنزلية  سيكون أسهل بالاضافة الي  خدمات الدعم المتكاملة والضمان سريع التعويض    ",
    img: Slide1,
  },
  {
    id: 2,
    title: " عمالة مختارة بعناية ",
    description:
      "في زهران نختار العمالة وفق أكثر الطرق كفاءةً في استقطاب واختيار العمالة المنزلية ونحرص على أن تكون العمالة مستقرة طوال فترة التعاقد مع عملائنا    ",
    img: Slide2,
  },
  {
    id: 3,
    title: " زهران لتوفير العمالة  ",
    description:
      "  الريادة في توفير العمالة المنزلية المختلفة مثل الخادمات , السائق, الطباخين وغيرها    ",
    img: Slide3,
  },
  {
    id: 4,
    title: " سرعة في الربط مع العملاء    ",
    description:
      "سرعة في توفير العمالة والربط مع العملاء وخلال المُدد المتفق عليها، لتحقيق أقصى درجات الانضباط في تأدية العمالة لمهامها .",
    img: Slide4,
  },
  {
    id: 5,
    title: " دعم مستمر    ",
    description:
      "دعم مستمر طوال فترة تواجد العمالة لدى عملائنا، لتقديم اقصى درجات الدعم والمساندة.",
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
