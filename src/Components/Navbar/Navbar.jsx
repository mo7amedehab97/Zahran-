import "./index.css";
import Logo1 from "../../assets/Group 96.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="logo_holder">
        <img src={Logo1} alt="website logo image" />
      </div>
      <div className="nav_list">
        <a href="#">الرئيسية</a>
        <a href="#services">خدماتنا</a>
        <a href="#about">من نحن</a>
        <a href="#"> العروض</a>
      </div>
      <div className="nav_contact_btn">
        <a href="#"> تواصل معنا </a>
      </div>
    </nav>
  );
};

export default Navbar;
