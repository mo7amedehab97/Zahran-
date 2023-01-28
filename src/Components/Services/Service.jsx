import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Service = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,

        transition: { duration: 0.9, bounce: 0.9 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        scale: 1.1,
      });
    }
  }, [inView]);
  return (
    <motion.div
      className="service_list_container"
      ref={ref}
      animate={animation}
    >
      <span></span>
      <img src={data?.img} alt="service image description" loading="lazy" />
      <h2>{data.name}</h2>
      <p>{data.description}</p>
    </motion.div>
  );
};

export default Service;
