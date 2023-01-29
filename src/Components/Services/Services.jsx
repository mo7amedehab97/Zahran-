import Title from "../Title/Title";
import "./index.css";
import Service from "./Service";
import chef from "../../assets/chef.webp";
import guard from "../../assets/guards.webp";
import clean from "../../assets/clean.webp";
import babysiter from "../../assets/babysiter.webp";
import driver from "../../assets/driver.webp";
import nurse from "../../assets/clean-_2_.webp";

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
const Services = () => {
  return (
    <section className="services_container" id="services">
      <Title title="خدماتنا" />

      <div className="service_container_lists">
        {servicesArray?.map((item) => (
          <Service data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
