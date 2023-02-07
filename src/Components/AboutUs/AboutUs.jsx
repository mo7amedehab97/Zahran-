import "./index.css";
import Thinks from "../../assets/thinks.png";
import whatsApp from "../../assets/whatsapp.svg";
const AboutUs = () => {
  return (
    <section className="about_us_container">
      <div className="about_us_inner_container">
        <h1>هل تعبت وانت تبحث عن عاملة منزلية ؟ </h1>
        <p>
          شركة زهران الرائدة في مجال العمالة المنزلية وفرت لك افضل العاملات
          المنزلية في المملكة. من خلال الموقع الالكتروني الان خصومات حصرية على
          الخادمات بالساعة والشهر
        </p>
        <div className="whatsapp_holder">
          <h3> زهران خيارك الافضل </h3>
          <a href="http://wa.me/+966570222064" target="_blank">
            <img src={whatsApp} alt="زر تواصل مع زهران واتس اب" />
          </a>
        </div>
      </div>
      <div className="about_us_img_holder">
        <img
          src={Thinks}
          alt="شخص محتار باختيار المكتب الافضل الا وهو مكتب زهران"
        />
      </div>
    </section>
  );
};

export default AboutUs;
