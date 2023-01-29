import Title from "../Title/Title";
import "./index.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import Review from "./Review";
import person1 from "../../assets/person1.webp";
import person2 from "../../assets/person2.webp";
import person3 from "../../assets/person3.webp";
import person4 from "../../assets/person4.webp";

const quotes = [
  {
    name: "د . سعيد سراج",
    desc: "مكتب زهران مكانك المثالي لأيجاد العمالة المنزلية ",
    img: person1,
    job: "محاضر بجامعة الرياض",
  },
  {
    name: "عمر عواد",
    desc: "دائما يقومون بعمل جيد وبالوقت المحدد, انا سعيد بالتعامل معهم ",
    img: person4,
    job: "رجل اعمال ",
  },
  {
    name: "ريم ",
    desc: "خدمات ممتازة سرعة بالرد وناس ذوق اكيد ساتعامل معهم ثانيا ",
    img: person2,
    job: "فاشون بلوجر",
  },
  {
    name: "بدر الراجحي",
    desc: "لا يوجد تعقيدات من بداية طلب الخدم للدفع مقابلها ارشحهم لمساعدتك باستقدام العمالة",
    img: person3,
    job: "مدير تقني ",
  },
];
const WhatTheySay = () => {
  return (
    <section className="what_say_container">
      <Title title={"ماذا قالوا عنا"} />
      <div className="reviews_list">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {quotes.length &&
            quotes.map((quote) => (
              <SwiperSlide key={quote.desc}>
                <Review data={quote} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhatTheySay;
