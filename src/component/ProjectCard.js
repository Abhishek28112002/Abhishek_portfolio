import React from 'react'
import Github from '../assets/skills/github-icon.svg'
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
        <div style={{marginTop:'-5px',float:'right'}}>
          { item.githublink &&  <a href={item.githublink} target="_blank" ><img src={Github}  width="30px" style={{backgroundColor:'white',borderRadius:'10px',padding:'1px'}} /></a>}
           { item.livelink && <a href={item.livelink} target="_blank">live link</a>}
        </div>
        </div>
    </div>
  )
}

export default ProjectCard