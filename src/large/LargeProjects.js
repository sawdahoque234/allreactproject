import React from "react";

const LargeProjects = (props) => {
  const { name, img,  live } = props.largeproject;
  console.log(props);

  return (
    <div className="col-md-4 col-12">
   <a href={live}>
      <div class="card mt-3 mb-5">
        <img class="card-img-top" data-aos="zoom-in"
            data-aos-duration="500" src={img} alt="" />
          <h5 class="card-title">{name}</h5>
        
      </div>
   </a>
    </div>
  );
};

export default LargeProjects;
