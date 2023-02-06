import React from "react";
import Location from "../Components/AboutUs/Location";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import ServiceComp from "../Components/Services/ServiceComp";
import chef from "../assets/chef.webp";
import guard from "../assets/guards.jpg";
import clean from "../assets/clean.jpg";
import babysiter from "../assets/babysiter.webp";
import driver from "../assets/driver.webp";
import nurse from "../assets/clean-_2_.webp";
import WhatsAppComp from "../Components/whatsAppComp/WhatsAppComp";

const servicesArray = [
  {
    id: 1,
    name: "توفير عمالة",
    description:
      "توفير عامل/عاملة بخبرات عالية - خادمات-شغالات من الفلبين-اوغندا-كينيا-اندونيسيا وغيرها ",
    img: babysiter,
  },
  {
    id: 2,
    name: "توفير عمال نظافة",
    description: "توفير عامل او عاملة نظافة لديهم خبرة كبيرة بهذا المجال",
    img: clean,
  },
  {
    id: 3,
    name: "توفير حراس",
    description:
      "كما نوفر حراس مبني ومزارع  لحديقة المنزل وغيرها من المهن الاخري بخبرة عالية وضمان",
    img: guard,
  },
  {
    id: 4,
    name: "توفير سائق",
    description:
      " نوفر لك نخبة من افضل السائقين لديهم خبرة في القيادة داخل المملكة من مختلف الجنسيات",
    img: driver,
  },
  {
    id: 5,
    name: "توفير طباخين",
    description:
      "وكذلك نوفر طباخين وطباخات للأحتياجات المنزلية المختلفة لديهم خبرة في مجال الطبخ بكافة انواعه",
    img: chef,
  },
  {
    id: 6,
    name: "توفير ممرضين",
    description:
      "كما ونوفر ايضا ممرضين وممرضات لديهم خبرة. مع امكانية الطلب حسب الحالة المرضية",
    img: nurse,
  },
];
const ServicePage = () => {
  return (
    <>
      <Navbar />
      <Location page={"الخدمات "} />

      {servicesArray.map((item, index) =>
        index % 2 !== 0 ? (
          <ServiceComp
            data={item}
            key={item.id}
            bgClass="background_grey"
            imgDir="right"
            container_class="service_comp_container_right"
            inner_class="service_comp_details_holder_right"
          />
        ) : (
          <ServiceComp
            data={item}
            key={item.id}
            bgClass="background_white"
            imgDir="left"
            container_class="service_comp_container_left"
            inner_class="service_comp_details_holder_left"
          />
        )
      )}
      <Footer />
      <WhatsAppComp />
    </>
  );
};

export default ServicePage;
