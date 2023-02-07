import React from "react";
const SlideComp = ({ data }) => {
  return (
    <div className="slide_container">
      <img src={data.img} alt={data.description} />
      <div className="slide_details">
        <h1>{data.title}</h1>
        <p> {data.description}</p>
        <a href="http://wa.me/+966570222064" target="_blank">
          اطلب الخدمة الان
        </a>
      </div>
    </div>
  );
};

export default SlideComp;
