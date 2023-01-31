import "./index.css";
import Logo1 from "../../assets/Group 96.svg";
import burgerIcon from "../../assets/burger_menu.svg";
import cancel from "../../assets/cancel.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);

  return (
    <nav>
      <div className="logo_holder">
        <button onClick={() => navigate("/")}>
          <img src={Logo1} alt="website logo image" />
        </button>
      </div>
      <div className={active ? `nav_list true_1` : "nav_list false_1"}>
        <button
          onClick={() => {
            setActive(!active);
            navigate("/");
          }}
        >
          الرئيسية
        </button>
        <button
          onClick={() => {
            setActive(!active);

            navigate("/services");
          }}
        >
          خدماتنا
        </button>
        <button
          onClick={() => {
            setActive(!active);
            navigate("/about");
          }}
        >
          من نحن
        </button>
        <button
          onClick={() => {
            setActive(!active);
            navigate("/offers");
          }}
        >
          العروض
        </button>
        <div className="nav_contact_btn1">
          <a
            onClick={() => {
              setActive(!active);
            }}
          >
            تواصل معنا
          </a>
        </div>
      </div>
      <div className="nav_contact_btn">
        <a href="#"> تواصل معنا </a>
      </div>
      <div className="nav_burger_icon">
        {active ? (
          <img
            src={burgerIcon}
            alt="Burger menu Icon "
            onClick={() => setActive(!active)}
          />
        ) : (
          <img
            src={cancel}
            alt="cancel menu Icon "
            onClick={() => setActive(!active)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
