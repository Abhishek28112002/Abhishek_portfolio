import ListGroup from "react-bootstrap/ListGroup";
import ProjctCard from "./ProjectCard";
import "./project.css";
import React, { useState } from "react";
function Projects() {
  const data = [
    {
      title: "SECURING NEURAL NETWORK EXECUTION THROUGH PARALLELIZATION",
      description:
        "I found near-optimal solutions using heuristic algorithms to change time complexity from exponential to polynomial.Devising task schedule algorithm for heterogeneous systems.I also developed understanding in python scripting, implemented data structures to come up with better algorithms",
      githublink:
        "https://github.com/Abhishek28112002/Securing-Neural-Network-Execution-through-Assisted--Parallelization",
      Skills: "C++, Data structure and Algorithms, Python",
    },

    {
      title: "SPACE DATA SCIENCE AUTO CLASSIFIER FOR  KEPLARS TCE",
      description:
        "Expertly designed and implemented a machine learning model using Python, showcasing a strong understanding of the programming language and its applications in the field of artificial intelligence. Utilized Node.js to efficiently handle user inputs from the front-end, demonstrating proficient skills in full-stack development. Achieved a significant accuracy rate of 70% on the model, demonstrating a strong ability to deliver effective and reliable results.",
      githublink: "https://github.com/Abhishek28112002/Space_Data_Science-",
      Skills: "Node, Javascript, HTML, CSS, Python",
    },
    {
      title: "DOJU Android App",
      description: `This app will help law enforcement person regarding absconding accused, arrest warrant, permanent warrant, Searching and shorting of criminal's name, father's name,along with other identifying things can be done.This app have automatic location filter feature, consumers can add their comment on any case , can add record to watch latter. `,
      livelink:
        "https://play.google.com/store/apps/details?id=com.abhishekmittal.AwesomeProject4",
      Skills: " AWS, Node, Express, React-Native, Redux-Toolkit",
    },
    {
      title: "Stringar Social Web Application",
      description:
        "Designed and developed a cutting-edge social chat and gaming application, stringar, utilizing the latest web development technologies such as React, JavaScript, HTML, CSS, and Tailwind. Demonstrated exceptional skills in full-stack web development and delivered a highly functional and visually appealing product. The result of this project showcases my ability to bring ideas to life, effectively combining design and technical skills to create a seamless user experience for the end-users.",
      githublink: "https://github.com/Abhishek28112002/Social-Wb-Application",
      Skills: "React , Redux-toolkit, Javascript, HTML, CSS",
      livelink: "https://social-wb-application.vercel.app",
    },
    {
      title: "Wordle Game",
      description:
        "Cloned the popular Wordle game using React JS, resulting in a fully functional and dynamic application with a database of over 10,000 words and the ability to add new words on a daily basis. The application contains all the features of the original Wordle game, and has been successfully hosted, demonstrating strong skills in React JS development and the ability to deliver high-quality and engaging web applications.",
      livelink: "http://abhiwordle.netlify.app",
      Skills: "React js, Javascript",
    },
    {
      title: "TO-DO List",
      description:
        "Developed a highly functional and user-friendly To-Do list application using React, featuring key capabilities such as adding, deleting, and searching tasks. Utilized local storage to ensure that data can be easily retrieved, demonstrating a strong understanding of web development principles and an ability to deliver practical and efficient solutions.",
      livelink: "https://abhitodo.netlify.app",
      Skills: "React , JavaScript, Localstorage",
    },
    {
      title:'Finding SFC using Machine Learning',
      description:
        "I conducted a simulation using Ansys Workbench to analyze the stress concentration distribution within a bending beam. Additionally, I developed a linear regression model in Python, utilizing libraries such as pandas, Scikit-Learn, and NumPy for model training. The model was trained with a dataset containing over 900 simulations, incorporating the use of high-performance computing (HCP). This rigorous training process resulted in an impressive model accuracy of 97%.",
        githublink: "https://github.com/Abhishek28112002/Simulated-a-model-using-ansys-workbench-to-find-stress-concentartion-distribution-in-a-bending-beam",
      Skills: "Machine learning, Deep Learning, Python, Ansys ",
    }
  ];
  const [visibledata, setvisibledata] = useState(data[0]);

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between" }}
      className="project"
    >
      <div style={{ display: "flex",flexDirection:'column', cursor: "pointer",borderRadius: '8px',justifyContent:'space-between',
border: '1px solid #DCDCDC'}} className="items">
  {data.map((item,index)=>(
<div onClick={() => setvisibledata(item)}
            className="project_bar">{item.title}</div>

  ))}
       
      </div>
      <div style={{ display: "flex" }} className="items">
        <ProjctCard item={visibledata} />
      </div>
    </div>
  );
}

export default Projects;
