import "./index.css";
import Logo1 from "../../assets/Group 96.svg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="logo_holder">
        <button onClick={() => navigate("/")}>
          <img src={Logo1} alt="website logo image" />
        </button>
      </div>
      <div className="nav_list">
        <button onClick={() => navigate("/")}>الرئيسية</button>
        <button onClick={() => navigate("/services")}>خدماتنا</button>
        <button onClick={() => navigate("/about")}>من نحن</button>
        <button href="#"> العروض</button>
      </div>
      <div className="nav_contact_btn">
        <a href="#"> تواصل معنا </a>
      </div>
    </nav>
  );
};

export default Navbar;
