import "./serviceComp.css";
import chef from "../../assets/chef.webp";
const ServiceComp = ({
  data,
  bgClass,
  imgDir,
  container_class,
  inner_class,
}) => {
  return (
    <article className={`${bgClass} ${container_class}`}>
      <div className={`${inner_class} `}>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <div className="link_service_comp">
        <a href="http://wa.me/+966598750176" target="_blank">
        تواصل معنا الان</a>
        </div>
      </div>
      <div className={`service_comp_img_holder ${imgDir}`}>
        <img src={data.img} alt={data.description} />
      </div>
    </article>
  );
};

export default ServiceComp;
