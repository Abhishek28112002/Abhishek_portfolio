import ListGroup from 'react-bootstrap/ListGroup';
import ProjctCard from './ProjectCard'
import './project.css';
import React,{useState} from 'react'
function Projects() {
const data=[{
    title:"SECURING NEURAL NETWORK EXECUTION THROUGH PARALLELIZATION",
    description:"I found near-optimal solutions using heuristic algorithms to change time complexity from exponential to polynomial.Devising task schedule algorithm for heterogeneous systems.I also developed understanding in python scripting, implemented data structures to come up with better algorithms",
    githublink:"https://github.com/Abhishek28112002/Securing-Neural-Network-Execution-through-Assisted--Parallelization",
    Skills:"C++, Data structure and Algorithms, Python"
},

{
    title:"SPACE DATA SCIENCE AUTO CLASSIFIER FOR  KEPLARS TCE",
    description:"We have made a machine learning model using python. Implemented Node js for keeping users input from frontend. The accuracy of our model ws 70%",
    githublink:"https://github.com/Abhishek28112002/Space_Data_Science-",
    Skills:"Node, Javascript, HTML, CSS, Python"
},
{
    title:"DOJU Android App",
    description:`This app will help law enforcement person regarding absconding accused, arrest warrant, permanent warrant, Searching and shorting of criminal's name, father's name,along with other identifying things can be done.This app have automatic location filter feature, consumers can add their comment on any case , can add record to watch latter. `,
    livelink:"https://play.google.com/store/apps/details?id=com.abhishekmittal.AwesomeProject4",
    Skills:" AWS, Node, Express, React-Native, Redux-Toolkit"
}
,
{
    title:"Stringar Social Web Application",
    description:"I have desgined stringar for social chat and gaming application. Implemented React, javascript, HTML, CSS, tailwind .",
    githublink:"https://github.com/stringarapp/core",
    Skills:"React , Redux-toolkit, Javascript, HTML, CSS"
}
,
{
    title:"Wordle Game",
    description:"I have cloned Wordle game in react js. It contains of 10000 words and new word come every new day. This have all the features of Wordle Game. You can see it i have hosted already",
    livelink:"http://abhiwordle.netlify.app",
    Skills:"React js, Javascript"
}
,
{
    title:"TO-DO List",
    description:"To-Do list is desgined in React. It contains of delete , add, searching features. I have also used localstorage so that data can be retrieved easily",
    livelink:"https://abhitodo.netlify.app",
    Skills:"React , JavaScript, Localstorage"
}

]
const [visibledata,setvisibledata]=useState(data[0]);



  return (
    <div style={{display:'flex',justifyContent: 'space-between'
    }} className='project'>
        <div style={{display:'flex' , cursor:'pointer'}} className='items'>
    <ListGroup>
      <ListGroup.Item onClick={()=>setvisibledata(data[0])}>SECURING NEURAL NETWORK EXECUTION
THROUGH PARALLELIZATION</ListGroup.Item>
<ListGroup.Item onClick={()=>setvisibledata(data[1])}>SPACE DATA SCIENCE AUTO CLASSIFIER FOR
KEPLARS TCE</ListGroup.Item>
      <ListGroup.Item onClick={()=>setvisibledata(data[2])}>DOJU Android App</ListGroup.Item>
      <ListGroup.Item onClick={()=>setvisibledata(data[3])}>Stringar Social Web Application</ListGroup.Item>
      <ListGroup.Item onClick={()=>setvisibledata(data[4])}>Wordle Game</ListGroup.Item>
      <ListGroup.Item onClick={()=>setvisibledata(data[5])}>TO-DO List</ListGroup.Item>
    </ListGroup>
    </div >
    <div style={{display:'flex'}} className='items'>
<ProjctCard  item={visibledata}/>
    </div>
    </div>
  );
}

export default Projects
