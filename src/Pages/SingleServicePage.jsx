import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import chef from "../assets/chef.webp";
import guard from "../assets/guards.webp";
import clean from "../assets/clean.webp";
import babysiter from "../assets/babysiter.webp";
import driver from "../assets/driver.webp";
import nurse from "../assets/clean-_2_.webp";
import ServiceComp from "../Components/Services/ServiceComp";
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
const SingleServicePage = () => {
  let { id } = useParams();
  const singleServiceObj = servicesArray.find((data) => id == data.id);
  return (
    <div>
      <Navbar />
      <ServiceComp
        data={singleServiceObj}
        bgClass="background_white"
        imgDir="right"
        container_class="service_comp_container_right"
        inner_class="service_comp_details_holder_right"
      />

      <Footer />
    </div>
  );
};

export default SingleServicePage;
