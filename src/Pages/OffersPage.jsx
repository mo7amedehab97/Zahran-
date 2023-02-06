import React from "react";
import Location from "../Components/AboutUs/Location";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Offers from "../Components/Offers/Offers";
import WhatsAppComp from "../Components/whatsAppComp/WhatsAppComp";

const OffersPage = () => {
  return (
    <>
      <Navbar />
      <Location page={"العروض "} />
      <Offers />
      <Footer />
      <WhatsAppComp />
    </>
  );
};

export default OffersPage;
