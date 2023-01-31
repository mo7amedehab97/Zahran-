import "./index.css";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Title = ({ title }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, bounce: 0.9},
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: -50,
      });
    }
  }, [inView]);
  return (
    <motion.div
      ref={ref}
      animate={animation}
      style={{ overflow: "hidden" }}
      className="title_container"
    >
      <h1>{title}</h1>
    </motion.div>
  );
};

export default Title;
