import React from "react";
import "./index.css";
const stepsData = [
  {
    id: 1,
    name: "افضل عمالة موجودة بالمملكة  ",
    description:
      "نحرص  علي توفير افضل الخادمات والسائقين والممرضين والخدمات وجميع العمال والعاملات من المهن المختلفة ",
  },
  {
    id: 2,
    name: "تجديد العقود",
    description: "نقوم بتجديد عقود العمالة وتسهيل الاجرائات القانونية",
  },
  {
    id: 3,
    name: "تدريب العمالة",
    description: "ندرب العمالة لضمان حصولكم علي افضل جودة ممكنة للخدمة المقدمة",
  },
];
const RecrutmentSteps = () => {
  return (
    <div className="recrutments_steps">
      {stepsData.map((step) => {
        return (
          <div className="steps_holder" key={step.id}>
            <h2>{step.name}</h2>
            <p>{step.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RecrutmentSteps;
