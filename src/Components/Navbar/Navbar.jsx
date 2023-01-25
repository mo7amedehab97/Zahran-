import "./index.css";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo_holder">
        <img src={Logo} alt="website logo image" />
      </div>
      <div className="nav_list">
        <a href="#">الرئيسية</a>
        <a href="#">خدماتنا</a>
        <a href="#about">من نحن</a>
      </div>
      <div className="nav_contact_btn">
        <a href="#"> تواصل معنا </a>
      </div>
    </nav>
  );
};

export default Navbar;
