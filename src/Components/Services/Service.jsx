import { useNavigate } from "react-router-dom";
const Service = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      className="service_list_container"
      onClick={() => navigate(`/service/${data.id}`)}
    >
      <span></span>
      <img src={data?.img} alt={data.description} />
      <h2>{data.name}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default Service;
