import React from "react";
import Location from "../Components/AboutUs/Location";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import ServiceComp from "../Components/Services/ServiceComp";
import chef from "../assets/chef.jpg";
import guard from "../assets/guards.jpg";
import clean from "../assets/clean.jpg";
import babysiter from "../assets/babysiter.jpg";
import driver from "../assets/driver.jpg";
import nurse from "../assets/clean (2).jpg";

const servicesArray = [
  {
    id: 1,
    name: "أستقدام عمالة",
    description:
      "أستقدام عامل/عاملة بخبرات عالية - خادمات-شغالات من الفلبين-اوغندا-كينيا-بنقبلديش وغيرها ",
    img: babysiter,
  },
  {
    id: 2,
    name: "أستقدام عمال نظافة",
    description: "أستقدام عامل او عاملة نظافة لديهم خبرة كبيرة بهذا المجال",
    img: clean,
  },
  {
    id: 3,
    name: "أستقدام حراس",
    description:
      "كما نوفر حراس مبني ومزارع  لحديقة المنزل وغيرها من المهن الاخري بخبرة عالية وضمان",
    img: guard,
  },
  {
    id: 4,
    name: "أستقدام سائق",
    description:
      " نوفر لك نخبة من افضل السائقين لديهم خبرة في القيادة داخل المملكة من مختلف الجنسيات",
    img: driver,
  },
  {
    id: 5,
    name: "أستقدام طباخين",
    description:
      "وكذلك نوفر طباخين وطباخات للأحتياجات المنزلية المختلفة لديهم خبرة في مجال الطبخ بكافة انواعه",
    img: chef,
  },
  {
    id: 6,
    name: "أستقدام ممرضين",
    description:
      "كما ونوفر ايضا ممرضين وممرضات لديهم خبرة. مع امكانية الطلب حسب الحالة المرضية",
    img: nurse,
  },
];
const ServicePage = () => {
  return (
    <section className="about_page_container">
      <Navbar />
      <Location page={"الخدمات "} />

      {servicesArray.map((item, index) =>
        index % 2 !== 0 ? (
          <ServiceComp data={item}  bgClass="background_grey" imgDir="right"  container_class='service_comp_container_right' inner_class='service_comp_details_holder_right'/>
        ) : (
          <ServiceComp data={item}  bgClass="background_white" imgDir="left" container_class='service_comp_container_left' inner_class='service_comp_details_holder_left'/>
        )
      )}
      <Footer />
    </section>
  );
};

export default ServicePage;
