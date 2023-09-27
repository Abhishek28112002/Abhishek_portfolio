import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Internship.css'
function InternshipCard({item}) {
  const [show,setShow]=React.useState('none')

  return (
    <Card  style={{borderRadius:'20px',width:'100%',boxShadow:'1px 1px  white'}} className="internship_card" onMouseEnter={()=>setShow('block')} onMouseLeave={()=>setShow('none')}>
        <div style={{display:'flex'}}>
      <Card.Img style={{margin:'10px',width:'100px'}} height="40%" src={item.companylogo} />
      <div style={{marginLeft:'10px',marginTop:'10px'}}>
      <Card.Title>{item.companyname}</Card.Title>
        <Card.Title style={{color:'crimson'}}>{item.role}</Card.Title>
        <h6>{item.duration}</h6>
        </div>
        </div>
      <Card.Body  >
       
        <Card.Text>
         {item.description}
        </Card.Text>
       <h6 style={{color:'crimson'}}>
        {item.skills}
       </h6>
      </Card.Body>
    </Card>
  );
}
export default InternshipCard