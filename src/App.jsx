// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import SingleServicePage from "./Pages/SingleServicePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/service/:id" element={<SingleServicePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
