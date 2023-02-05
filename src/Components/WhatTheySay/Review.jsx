import React from 'react'

const Review = ({data}) => {
  return (
    <article className="review">
    <div className="review_img_container">
        <img src={data.img} alt={data.name} id="person-img" /> 
    </div>
   
    <h4 id="author"> {data.name}</h4>
    <p id="job"> {data.job}</p>
    <p id="info">
    {data.desc}
  </p>
   
    
</article>  )
}

export default Review