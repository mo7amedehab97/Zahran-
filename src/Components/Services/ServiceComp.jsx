import "./serviceComp.css";
import chef from "../../assets/chef.jpg";
const ServiceComp = ({data, bgClass,imgDir,container_class,inner_class}) => {
  return (
    <article className={`${bgClass} ${container_class}`}>
      <div className={`${inner_class} `}>
        <h1>{data.name}</h1>
        <p>
         {data.description}
        </p>
      </div>
      <div className={`service_comp_img_holder ${imgDir}`}>
        <img src={data.img} alt={data.description} />
      </div>
    </article>
  );
};

export default ServiceComp;
