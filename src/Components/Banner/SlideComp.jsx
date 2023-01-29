import React from "react";
const SlideComp = ({ data }) => {
  return (
    <div className="slide_container">
      <img src={data.img} alt="" />
      <div className="slide_details">
        <h1>{data.title}</h1>
        <p> {data.description}</p>
        <a href="#">اطلب الخدمة الان</a>
      </div>
    </div>
  );
};

export default SlideComp;
