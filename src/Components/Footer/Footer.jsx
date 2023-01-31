import "./index.css";
import Logo from "../../assets/Group 96.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer_details">
        <img src={Logo} alt="website logo image" />
        <p>
          زهران لخدمات استقدام العمالة ترحب بطلباتكم وأستفساراتكم اضغط الان علي
          اطلب خدمة لطلب خدمة او الاستفسار عن خدمة
        </p>
      </div>
      <div className="footer_contact">
        <a href="http://wa.me/+966598750176" target="_blank">
          تواصل معنا
        </a>
      </div>
    </footer>
  );
};

export default Footer;
