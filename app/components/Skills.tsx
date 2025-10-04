"use client";
import React from "react";
import { FaCode, FaServer, FaPaintBrush, FaComments, FaUsers, FaLightbulb, FaSyncAlt } from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skillsSection" id="skills">
      <h2 className="skillsTitle">Technical Skills</h2>

      <div className="skillsGrid">
        <div className="skillCard">
          <div className="cardHeader">
            <FaCode className="skillIcon" />
            <h3>Frontend Development</h3>
          </div>
          <p className="skillsText">
            HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Responsive Design
          </p>
        </div>

        <div className="skillCard">
          <div className="cardHeader">
            <FaServer className="skillIcon" />
            <h3>Testing & QA</h3>
          </div>
          <p className="skillsText">
            Currently learning tools like Jest, React Testing Library, Postman, and Cypress.
          </p>
        </div>

        <div className="skillCard">
          <div className="cardHeader">
            <FaPaintBrush className="skillIcon" />
            <h3>UI/UX & Tools</h3>
          </div>
          <p className="skillsText">
            Figma, Git, GitHub, VS Code
          </p>
        </div>
      </div>

      <h2 className="skillsTitle" style={{ marginTop: "5rem" }}>Soft Skills</h2>

      <div className="softSkills">
        <div className="softItem"><FaComments /> Communication</div>
        <div className="softItem"><FaUsers /> Teamwork</div>
        <div className="softItem"><FaLightbulb /> Problem Solving</div>
        <div className="softItem"><FaSyncAlt /> Adaptability</div>
      </div>
    </section>
  );
};

export default Skills;
