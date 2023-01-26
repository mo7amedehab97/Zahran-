import React from "react";
import "./index.css";
const stepsData = [
  {
    id: 1,
    name: "تسفير العمالة",
    description: "نقوم بتسفير العمالة حتي تقوم بعملها علي اكمل وجه",
  },
  {
    id: 2,
    name: "تجديد العقود",
    description: "نقوم بتجديد عقود العمالة وتسهيل الاجؤاءات القانونية",
  },
  {
    id: 3,
    name: "تدريب العمالة",
    description: "ندرب العمالة لضمان حصولكم علي افضل جودة ممكنة للخدمة المقدمة",
  },
  {
    id: 4,
    name: "اصدار الاقامة",
    description: "نقوم بمساعدتكم لاصدار الاقامات للمالة بافضل الطرق الممكنة",
  },
];
const RecrutmentSteps = () => {
  return <div className="recrutments_steps">{stepsData.map((step)=>{
    return <div className="steps_holder" key={step.id}>
    <h2>{step.name}</h2>
    <p>{step.description}</p>
    </div>
  })
    
  }</div>;
};

export default RecrutmentSteps;
