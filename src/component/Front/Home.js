import React from 'react'
import './Home.css';

import file from './Abhishek_resume.pdf'
import { init } from "ityped";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useRef,useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import img2 from './Images/abhi12.jpg';
import p1 from './Images/CALCULTOR.png';

import p3 from './Images/TIC-TOA.png'
import p4 from './Images/TODO.jpg';
import p5 from './Images/wordle.jpg';
import p6 from './Images/WEATHER.jpg';
import p7 from './Images/C-Algorithm.png'
import p8 from './Images/space.jpg';
function Home() {
    const[user,setuser]=useState({
        name:"",email:"",subject:"",message:""
    })
    const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 500,
      backSpeed:100,
      loop:true,
      strings: ["Student" ,"Full Stack Developer","Android Developer", "Software Engineer"],
    });

  }, []);
  let text ,value
  const handlinput=(e)=>{
    text=e.target.name;
    value=e.target.value;
    setuser({...user,[text]:value});
    console.log(user);
  }

  
  const postdata=async(e)=>{
e.prventdefault();
console.log(user);
fetch('http://localhost:5000/users', {
    method: 'POST',
    // We convert the React state to JSON and send it as the POST body
    headers: { 'Content-Type': 'application/json' },
    body: user
  }).then(function(response) {
    console.log(response)
    return response.json();
  });

  }
  
    return (
        <div>
      <Navbar collapseOnSelect expand="lg" bg="white" sticky="top" style={{boxShadow:'1px 1px rgb(245, 240, 240)',fontSize:'1.124em',fontWeight:'bold',padding:'6px'}} >
      <Container>
        <Navbar.Brand href="#home" style={{fontSize:'40px'}} >Abhishek</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">Experience</Nav.Link>
            <Nav.Link href="#teams">My Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link eventKey={2} href="#contact">
             Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
           

            <section className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Hello, my name is</div>
                        <div className="text-2">Abhishek Mittal</div>
                        <div className="text-3">And I'm a <span ref={textRef}></span></div>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title">About me</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src={img2} alt=""></img>
                        </div>
                        <div className="column right">
                            <div className="text">I'm abhishek Mittal  <span >Nice to meet you.</span></div>
                            <p> I am persuing BTech from iit dharwad in mechanical 
                                department.</p>
                                
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
                            <a href={file} target="_blank" rel="noreferrer">Download CV</a>
                        </div>
                    </div>
                </div>
            </section>
            
            
            <div>
                <section className="skills" id="skills">
                    <div className="max-width">
                        <h2 className="title">My skills</h2>
                        <div className="skills-content">
                            <div className="column left">
                                <div className="text">My creative skills & experiences.</div>
                                <p>
            Expert in front-end development including technologies like
            <span className="tech-tag">React , React Native</span>,
            <span className="tech-tag">HTML5</span>,
            <span className="tech-tag">CSS3</span>,
            <span className="tech-tag">JavaScript</span>,
            <span className="tech-tag">Bootstrap</span>
            <span className="tech-tag">TypeScript</span> ,etc.
            <br></br>
            <br></br>
            Expert in Back-end development,Database including technologies like
            <span className="tech-tag">Node Js , Express js ,MongoDB, etc.</span>
            
            <br></br>
            <br></br>
            Expert in Software development including technologies like
            <span className="tech-tag">C++ , Java </span>,
            <span className="tech-tag">Data Structure </span>,
            <span className="tech-tag">Algorithm</span>,
            <span className="tech-tag">Pyhton</span>,
            <span className="tech-tag">My Sql</span>, etc.
          </p>
          <p>I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.
          </p>
                                <a href="#">Read more</a>
                            </div>
                            <div className="column right">
                            <div className="bars">
                            <div className="bars">
                                    <div className="info">
                                        <span>C++</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="line c"></div>
                                </div>
                                <div className="bars">
                                    <div className="info">
                                        <span>Data structure</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="line ds"></div>
                                </div>
                                <div className="bars">
                                    <div className="info">
                                        <span>Algorithm</span>
                                        <span>60%</span>
                                    </div>
                                    <div className="line algo"></div>
                                </div>
                               
                                    <div className="info">
                                        <span>Java</span>
                                        <span>60%</span>
                                    </div>
                                    <div className="line css"></div>
                                </div>
                                
                                
                                <div className="bars">
                                    <div className="info">
                                        <span>JavaScript</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="line js"></div>
                                </div>
                                <div className="bars">
                                    <div className="info">
                                        <span>React , React Native</span>
                                        <span>70%</span>
                                    </div>
                                    <div className="line react"></div>
                                </div>
                                <div className="bars">
                                    <div className="info">
                                        <span>Node Js , Express Js</span>
                                        <span>70%</span>
                                    </div>
                                    <div className="line Node"></div>
                                </div>
                                <div className="bars">
                                    <div className="info">
                                        <span>MySQL</span>
                                        <span>60%</span>
                                    </div>
                                    <div className="line mysql"></div>
                                </div>
                               
                                <div className="bars">
                                    <div className="info">
                                        <span>Python</span>
                                        <span>60%</span>
                                    </div>
                                    <div className="line python"></div>
                                </div>
                                <div className="bars">
                                    <div className="info">
                                        <span>HTML</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="line html"></div>
                                </div>
                                <div className="bars">
                                    <div className="info">
                                        <span>CSS</span>
                                        <span>60%</span>
                                    </div>
                                    <div className="line css"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="teams" id="teams">
        <div className="max-width">
            <h2 className="title" style={{color:'crimson'}}>My Projects</h2>
            <Carousel>
            <Carousel.Item>
    <img
      className="d-block w-100 cardimg"
      src={p7}
      alt="First slide"
style={{size:'20px'}}
    />
    <Carousel.Caption>
      <h3>SECURING NEURAL NETWORK EXECUTION
THROUGH PARALLELIZATION</h3>
     <a href="https://github.com/Abhishek28112002/Securing-Neural-Network-Execution-through-Assisted--Parallelization"  rel="noreferrer" target="_blank"><p>Click on it to see it</p></a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 cardimg"
      src={p8}
      alt="First slide"
style={{size:'20px'}}
    />
    <Carousel.Caption>
      <h3>SPACE DATA SCIENCE AUTO CLASSIFIER FOR
KEPLARS TCE</h3>
     <a href="https://github.com/Abhishek28112002/Space_Data_Science-"  rel="noreferrer"target="_blank"><p>Click on it to see it</p></a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 cardimg"
      src={p1}
      alt="First slide"
style={{size:'20px'}}
    />
    <Carousel.Caption>
      <h3>Calculator</h3>
     <a href="https://abhishcalculator.netlify.app/"  rel="noreferrer"target="_blank"><p>Click on it to see it</p></a>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100 cardimg"
      src={p3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Tic-Tac-Toe game</h3>
      <a href="https://abhitictoe.netlify.app/" rel="noreferrer" target="_blank"><p>Click on it to see it</p></a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 cardimg"
      src={p4}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>To-Do List</h3>
      <a href="https://abhitodo.netlify.app"  rel="noreferrer"target="_blank"><p>Click on it to see it</p></a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 cardimg"
      src={p5}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Wordle Clone</h3>
      <a href="http://abhiwordle.netlify.app" rel="noreferrer" target="_blank"><p>Click on it to see it</p></a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 cardimg"
      src={p6}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Weather App</h3>
      <a href="http://abhiweather28.netlify.app" rel="noreferrer" target="_blank"><p>Click on it to see it</p></a>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>
    </section>
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contact me</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <div className="text">Get in Touch</div>
                            <p> I am interested in software development, web development opportunities or any other opportunity similer to my interest. However, if you have other request or
            question, don’t hesitate to contact me using below details
            either.</p>
                            <div className="icons">
                                <div className="row">
                                    <i className="fas fa-user"></i>
                                    <div className="info">
                                        <div className="head">Name</div>
                                        <div className="sub-title">Abhishek Mittal
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="info">
                                        <div className="head">Address</div>
                                        <div className="sub-title">sawai madhopur,Rajasthan,India</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope"></i>
                                    <div className="info">
                                        <div className="head">Email</div>
                                        <div className="sub-title"><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSKkVJwqkLSgbrVWNlJbtlVdtCDxTrfPvGgtJGsGxZlWtJXxtxflpJpjbjMtQqGHwMKRqjWW" target="_blank">200030003@iitdh.ac.in</a></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope"></i>
                                    <div className="info">
                                        <div className="head">Linkedin :  <a href="https://www.linkedin.com/in/abhishek-mittal-979726203/" target="_blank">Linkedin</a></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope"></i>
                                    <div className="info">
                                        <div className="head">Contact No</div>
                                        <div className="sub-title">+91 9509495157</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope"></i>
                                    <div className="info">
                                        <div className="head">INSTAGRAM :  <a href="https://www.instagram.com/abhishekmittal2002/" target="_blank">Instagram Id</a></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text">Message me</div>
                            <form method="post" action="/"  >
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" name="name" onChange={handlinput} placeholder="Name" valuerequired></input>
                                    </div>
                                    <div className="field email">
                                        <input type="email"  name="email"   onChange={handlinput} placeholder="Email" required></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <input type="text" name="subject"  onChange={handlinput} placeholder="Subject" required></input>
                                </div>
                                <div className="field textarea">
                                    <textarea cols="30" rows="10"  onChange={handlinput} name="message" placeholder="Message.." required></textarea>
                                </div>
                                <div className="button-area">
                                    <button type="submit" onClick={postdata}>Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <span>Created By Abhishek mittal | <span className="far fa-copyright"></span> 2020 All rights reserved.</span>
            </footer>
        </div>
    )
}
export default Home