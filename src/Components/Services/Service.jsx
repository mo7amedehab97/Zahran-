import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
const Service = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  const navigate = useNavigate();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);
  return (
    <motion.div
      className="service_list_container"
      ref={ref}
      animate={animation}
      onClick={() => navigate(`/service/${data.id}`)}
    >
      <span></span>
      <img src={data?.img} alt={data.description} />
      <h2>{data.name}</h2>
      <p>{data.description}</p>
    </motion.div>
  );
};

export default Service;
