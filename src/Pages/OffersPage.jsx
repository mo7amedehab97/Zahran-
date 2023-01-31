import React from "react";
import Location from "../Components/AboutUs/Location";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Offers from "../Components/Offers/Offers";

const OffersPage = () => {
  return (
    <>
      <Navbar />
      <Location page={"العروض "} />
      <Offers />
      <Footer />
    </>
  );
};

export default OffersPage;
