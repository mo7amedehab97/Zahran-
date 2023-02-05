import { Parallax } from "react-parallax";
import "./index.css";
const ParallaxComp = ({ image, paraComp }) => (
  <Parallax
    bgImage={image}
    bgImageAlt="خلفية موقع زهرات لتوفير العاملات المنزليات "
    className="parallax_container"
    strength={800}
  >
    {paraComp}
  </Parallax>
);


export default ParallaxComp