import React,{useState} from 'react'
import './skills.css'   
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
        category: "Backend Technologies",
        skills: ["Node Js", "Express Js"],
      },
    {
      category: "Web Development",
      skills: ["React JS","HTML", "CSS", "JavaScript","JQuery"],
    },
    {
        category: "Real-time Communication",
        skills: ["Socket.io", "WebRTC"],
      },
    {
        category: "CSS Frameworks",
        skills: ["Bootstrap","Material UI","Tailwind CSS"],
      },
    {
      category: "Android Development",
      skills: ["React Native"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
  ];
function Skills(){
    const [activeSkill, setActiveSkill] = useState(null);

    const handleSkillHover = (index) => {
      setActiveSkill(index);
    };
  
  return (
    <div className="skills">
    {skillsData.map((skills, index) => (
      <div
        className='skills__container'
        key={index}
        onMouseOver={() => handleSkillHover(index)}
        onMouseOut={() => handleSkillHover(null)}
      >
        <div className="skill-box">{skills.category}</div>
        <div className='skills-each'>
{
            skills.skills.map((skill, index) => (
               <div className='skill-name' key={skill+'-'+index}> 
               <li>{skill}</li> 
                </div>
            ))
}

        </div>
      </div>
    ))}
  </div>
  )
}

export default Skills



