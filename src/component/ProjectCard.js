import React from 'react'
import Github from '../assets/skills/github-icon.svg'
import 'boxicons'

function ProjectCard({item}) {
  return (
    <div style={{backgroundColor:"black",color:'white',padding:'10px',borderRadius:'10px',marginLeft:'4px',width:'100%'}}>
        <div style={{textAlign:"center"}}>
            <h5>{item.title}</h5>
        </div>
        <div>
           {`${item.description}`}
        </div>
        <br></br>
        <div style={{display: 'flex'}}>
        <div style={{display:'flex'}}>
            <h5 style={{color:"crimson",marginRight:"10px"}}>Skills:   </h5>
            <p>{item.Skills}</p>
        </div>
        <div style={{marginLeft:'10px'}}>
          { item.githublink &&  <a href={item.githublink} target="_blank" ><i  width="40px" style={{backgroundColor:'white',borderRadius:'10px',padding:'1px',color:'crimson'}} class='bx bxl-github bx-spin bx-flip-horizontal bx-sm'  ></i> </a>}
          </div>
          <div style={{marginLeft:'10px'}}>
           { item.livelink && <a href={item.livelink} target="_blank" style={{textDecoration: 'none'}} ><i style={{backgroundColor:'white',borderRadius:'10px',padding:'1px',color:'crimson'}} size={30} class='bx bx-package bx-spin bx-flip-horizontal bx-sm' ></i></a>}
        </div>
        </div>
    </div>
  )
}

export default ProjectCard;