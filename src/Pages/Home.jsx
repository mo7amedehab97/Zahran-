import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Navbar";
import Agreement from "../Components/Parallax/Agreement";
import ParallaxComp from "../Components/Parallax/ParallaxComp";
import Services from "../Components/Services/Services";
import bg1 from "../assets/bg1.webp";
import bg2 from "../assets/bg2.webp";
import OrderService from "../Components/Parallax/OrderService";
import RecrutmentSteps from "../Components/Parallax/RecrutmentSteps";
import Satistics from "../Components/Satistics/Satistics";
import Footer from "../Components/Footer/Footer";
import WhatTheySay from "../Components/WhatTheySay/WhatTheySay";
import WhatsAppComp from "../Components/whatsAppComp/WhatsAppComp";
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <ParallaxComp image={bg1} paraComp={<Agreement />} />
      <OrderService />
      <ParallaxComp image={bg2} paraComp={<RecrutmentSteps />} />
      <Satistics />
      <WhatTheySay />
      <Footer />
      <WhatsAppComp />
    </>
  );
};

export default Home;
