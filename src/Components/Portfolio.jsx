/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Career Essential in Software Development by Microsoft 🎉",
    description:
      "Understood about the career Essential in doftware development and working in that path to achevie my Goal.",
    url: "https://www.linkedin.com/learning/certificates/86c04a50962006ed100c64e30cbc59b4d8ba16ee197d4f0646ee045d6853542c",
  },
  {
    title: "Front-End Software Engineering Job Simulation",
    description:
      "A beautyfull experience about the front-end job simulation and understood how to code in the real time industry",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Skyscanner/km4rw7dihDr3etqom_Skyscanner_uBBsMj28wqT66TzAE_1728824548854_completion_certificate.pdf",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/viswavardhanchary/viswa2",
  },
  {
    title: "Javascript Learning 10 project in 10 Days",
    description:
      "Success Fully completed 10 projects in 10 days with the help of udemy and understood the basics of javascript and learned the advanced topics.",
    url: "https://www.udemy.com/certificate/UC-d92a1ac7-ee6d-43f8-a65e-d40a773ff2c7/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
