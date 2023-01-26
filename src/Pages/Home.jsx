import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Navbar";
import Agreement from "../Components/Parallax/Agreement";
import ParallaxComp from "../Components/Parallax/ParallaxComp";
import Services from "../Components/Services/Services";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import OrderService from "../Components/Parallax/OrderService";
import RecrutmentSteps from "../Components/Parallax/RecrutmentSteps";
import Satistics from "../Components/Satistics/Satistics";
import Footer from "../Components/Footer/Footer";
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
      <Footer />
    </>
  );
};

export default Home;
