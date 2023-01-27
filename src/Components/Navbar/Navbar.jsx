import "./index.css";
import Logo1 from "../../assets/Group 96.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="logo_holder">
        <Link to="/">
          <img src={Logo1} alt="website logo image" />
        </Link>
      </div>
      <div className="nav_list">
        <Link to="/">الرئيسية</Link>
        <a href="#services">خدماتنا</a>
        <Link to="about">من نحن</Link>
        <a href="#"> العروض</a>
      </div>
      <div className="nav_contact_btn">
        <a href="#"> تواصل معنا </a>
      </div>
    </nav>
  );
};

export default Navbar;
