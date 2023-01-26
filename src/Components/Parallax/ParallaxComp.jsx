import { Parallax } from "react-parallax";
import bg1 from "../../assets/bg1.jpg";
import "./index.css";
const ParallaxComp = ({ image, paraComp }) => (
  <Parallax
    bgImage={image}
    bgImageAlt="the cat"
    className="parallax_container"
    strength={800}
  >
    {paraComp}
  </Parallax>
);


export default ParallaxComp