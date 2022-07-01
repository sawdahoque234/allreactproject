import React from "react";
import Projects from "./Projects";
import nav from '../../img/nav.png'
import a from '../../img/a.png'
import d from '../../img/d.png'
import menu from '../../img/menu.png'
import review from '../../img/review.png'
import r from '../../img/r.png'
import c from '../../img/c.png'
import country from '../../img/country.png'
const ProjectsData = () => {
 
  const projects = [
    {
      name: "Navbar",
      img: nav,
      
      live: "https://tubular-puffpuff-3ab24f.netlify.app/",
    },
    {
      name: "MenuItem",
      img: menu,
      
      live: "https://lustrous-fudge-bd0304.netlify.app/",
    },
    {
      name: "Review Card",
      img: review,
      live: "https://snazzy-buttercream-acaa25.netlify.app/",
    },
    {
      name: "Review Slider",
      img: r,
      live: "https://calm-peony-a7ece7.netlify.app/",
    },
    {
      name: "Review Slider",
      img: a,
      live: "https://resonant-selkie-a020e5.netlify.app/",
    },
    {
      name: "Dark Mode",
      img: d,
      live: "https://resonant-selkie-a020e5.netlify.app/",
    },
   
    {
      name: "Color Generator",
      img: c,
      live: "https://glittering-trifle-2a9f18.netlify.app/",
    },
   
    {
      name: "Country Data",
      img: country,
      live: "https://willowy-nasturtium-f76ad1.netlify.app/",
    },
   
 
  ];
  return (
    <div className="section">
      <div className="container" >
        <h1 className="text-center font-details-b pb-4" style={{fontFamily: 'Updock'}}>Basic Projects</h1>
        <div className="row " data-aos="fade-right" data-aos-duration="1500">
          {projects.map((project) => (
            <Projects project={project}></Projects>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsData;
