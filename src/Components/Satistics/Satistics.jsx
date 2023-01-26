import Title from "../Title/Title";
import Counter from "./Counter";
import "./index.css";
const satisticsData = [
  {
    id: 1,
    from: 0,
    to: 70,
    name: "العروض",
  },
  {
    id: 2,
    from: 0,
    to: 12,
    name: "خدمات مختلفة",
  },
  {
    id: 3,
    from: 0,
    to: 7,
    name: "مكتب نشط",
  },
  {
    id: 4,
    from: 0,
    to: 16,
    name: "جنسية ",
  },
];
const Satistics = () => {
  return (
    <section className="satistics_container">
    <Title title="الأحصائيات" />
      <div className="satistics_holder_list">
        {satisticsData.map((item) => {
          return (
            <div className="satistics_comp" key={item.id}>
              <Counter from={item.from} to={item.to} />
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Satistics;
