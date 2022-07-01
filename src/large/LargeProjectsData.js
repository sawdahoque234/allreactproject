import React from "react";
import d from '../img/dd.png'
import s from '../img/s.png'
import t from '../img/t.png'
import dental from '../img/dental.png'
import LargeProjects from "./LargeProjects";

const LargeProjectsData = () => {
 
  const largeprojects = [
    {
      name: "Dance School",
      img: d,
      live: "https://agitated-bhaskara-e98250.netlify.app/",
    },
    
    {
      name: "Dental Care",
      img: dental,
      live: "https://confident-mclean-a0b196.netlify.app/",
    },
    
    {
      name: "Scootie Shop",
      img: s,
      live: "https://my-scootie-shop.web.app/home",
    },
    {
      name: "Travel Website",
      img: t,
      live: "https://hoqtravel-agent.web.app/home",
    },
    
   
 
  ];
  return (
    <div className="section">
      <div className="container" >
        <h1 className="text-center font-details-b pb-4" style={{fontFamily: 'Updock'}}>Large Projects</h1>
        <div className="row " data-aos="fade-right" data-aos-duration="1500">
          {largeprojects.map((largeproject) => (
            <LargeProjects largeproject={largeproject}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LargeProjectsData;
