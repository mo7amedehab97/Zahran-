import React from "react";
import AboutUs from "../Components/AboutUs/AboutUs";
import Location from "../Components/AboutUs/Location";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import WhatsAppComp from "../Components/whatsAppComp/WhatsAppComp";

const AboutPage = () => {
  return (
    <section>
      <Navbar />
      <Location page={"من نحن"} />
      <AboutUs />
      <Footer />
      <WhatsAppComp />
    </section>
  );
};

export default AboutPage;
