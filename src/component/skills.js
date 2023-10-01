import React, { useState } from "react";
import "./skills.css";
const skillsData = [
  {
    category: "Programming Languages",
    skills: ["C", "C++", "Python"],
  },
  {
    category: "Cloud Services",
    skills: ["Amazon Web Services", "Google Cloud Platform"],
  },
  {
    category: "Problem Solving",
    skills: ["Data Structure & Algorithm Analysis"],
  },
  {
    category: "CSS Frameworks",
    skills: ["Bootstrap", "Material UI", "Tailwind CSS"],
  },
  
  {
    category: "Web Development",
    skills: ["ReactJS", "JavaScript", "JQuery","HTML", "CSS"],
  },
  {
    category: "Real-time Communication",
    skills: ["Socket.io", "WebRTC"],
  },
  {
    category: "Backend Technologies",
    skills: ["Node Js", "Express Js"],
  },
  {
    category: "Android Development",
    skills: ["React Native"],
  },
  {
    category: "Databases",
    skills: ["PostgresSQL", "MongoDB"],
  },
];
function Skills() {
  const [activeSkill, setActiveSkill] = useState("none");

  const handleSkillHover = (style) => {
    setActiveSkill(style);
  };

  return (
    <div
      className="skills"
      onMouseOver={() => handleSkillHover("flex")}
      onMouseOut={() => handleSkillHover("none")}
    >
      {skillsData.map((skills, index) => (
        <div className="skills__container" key={index}>
          <div className="skill-box">{skills.category}</div>
          <div className="skills-each" style={{ display: activeSkill }}>
            {skills.skills.map((skill, index) => (
              <li key={skill + "-" + index}><span className="span"> {skill}</span></li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
