import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Internship.css'
function InternshipCard({item,show}) {
 

  return (
    <Card  style={{borderRadius:'20px',boxShadow:'1px 1px  white'}} className="internship_card" >
        <div style={{display:'flex'}}>
      <Card.Img style={{margin:'10px',width:'50px',border:'10px',background:'white'}} height="40%" src={item.companylogo} />
      <div style={{marginLeft:'10px',marginTop:'10px'}}>
      <Card.Title>{item.companyname}</Card.Title>
        <Card.Title style={{color:'crimson'}}>{item.role}</Card.Title>
        <h6>{item.duration}</h6>
        </div>
        </div>
      <Card.Body  style={{display:show}}>
       
        <Card.Text>
         {item.description}
        </Card.Text>
      
      </Card.Body>
      <h6 style={{color:'crimson',padding:'1rem'}}>
        Skills: {item.skills}
       </h6>
    </Card>
  );
}
export default InternshipCard