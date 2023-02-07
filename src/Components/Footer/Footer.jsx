import "./index.css";
import Logo from "../../assets/Group 96.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer_details">
        <img src={Logo} alt="  لوجو موقع زهران لتوفير العاملات المنزليات" />
        <p>
          زهران الرائدة في مجال العمالة المنزلية وفرت لك افضل العاملات المنزلية
          في المملكة ترحب بطلباتكم وأستفساراتكم اضغط الان علي تواصل الان لطلب
          خدمة او الاستفسار عن خدمة
        </p>
      </div>
      <div className="footer_contact">
        <a href="http://wa.me/+966570222064" target="_blank">
          تواصل معنا
        </a>
        <p>
          <span>اتصل بنا : </span> 966570222064+
        </p>
      </div>
    </footer>
  );
};

export default Footer;
