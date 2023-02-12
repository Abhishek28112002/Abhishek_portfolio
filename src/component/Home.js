import React from "react";
import "./Home.css";
import Projects from "./Projects";
import file from "../assets/Abhishek_resume.pdf";
import { init } from "ityped";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useRef, useState } from "react";
import img2 from "../assets/Images/abhi12.jpg";
import Linkdin from "../assets/linkedin.svg";
import Gmail from "../assets/gmail.svg";
import Insta from "../assets/instagram.svg";
import Internship from './Internship'
function Home() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 500,
      backSpeed: 100,
      loop: true,
      strings: [
        "Student",
        "Full Stack Developer",
        "Android Developer",
        "Software Developer",
      ],
    });
  }, []);
  let text, value;
  const handlinput = (e) => {
    text = e.target.name;
    value = e.target.value;
    setuser({ ...user, [text]: value });
    console.log(user);
  };

  const postdata = async (e) => {
    e.prventdefault();
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      headers: { "Content-Type": "application/json" },
      body: user,
    }).then(function (response) {
      console.log(response);
      return response.json();
    });
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        sticky="top"
        style={{
          boxShadow: "1px 1px rgb(245, 240, 240)",
          fontSize: "1.124em",
          fontWeight: "bold",
          padding: "6px",
        }}
      >
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: "40px" }}>
            Abhishek
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#internship">Experience</Nav.Link>
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
            <div className="text-3">
              And I'm a <span ref={textRef}></span>
            </div>
          </div>
        </div>
      </section>
<section className="internship" id="internship">
        <div className="max-width">
          <h2 className="title">My Experience</h2>
          <div className="about-content">
            <Internship></Internship>
          </div>
          </div>
</section>
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img src={img2} alt="" style={{ borderRadius: "50px" }}></img>
            </div>
            <div className="column right">
              <div className="text">
                I'm abhishek Mittal <span>Nice to meet you.</span>
              </div>
              <p>
                {" "}
                I am persuing BTech from iit dharwad in mechanical department.
              </p>

              <p>
                I'm very ambitious Software developer looking for a role in
                established IT company with the opportunity to work with the
                latest technologies on challenging and diverse projects.
              </p>
              <p align="LEFT">
                I'm quietly confident, naturally curious, and perpetually
                working on improving my chops one design problem at a time.
              </p>
              <a href={file} target="_blank" rel="noreferrer">
                Download CV
              </a>
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
                  Expert in Back-end development,Database including technologies
                  like
                  <span className="tech-tag">
                    AWS, Node Js , Express js ,MongoDB, etc.
                  </span>
                  <br></br>
                  <br></br>
                  Expert in Software development including technologies like
                  <span className="tech-tag">C++ , Java </span>,
                  <span className="tech-tag">Data Structure </span>,
                  <span className="tech-tag">Algorithm</span>,
                  <span className="tech-tag">Pyhton</span>,
                  <span className="tech-tag">My Sql</span>, etc.
                </p>
                <p>
                  I’m not a designer but I have a good sense of aesthetics, and
                  experience in responsive, mobile-first web design. I put
                  special effort into optimizing my code and providing the best
                  user experience. I would love to give you any kind of support
                  also after the project's completion. I guarantee a commitment
                  during work on your project.
                </p>
                <a href="#">Read more</a>
              </div>
              <div
                className="column right"
                style={{
                  backgroundColor: "black",
                  borderRadius: "10px",
                  color: "silver",
                  padding: "5px 10px",
                  TextAlign: "center",
                }}
              >
                <div className="bars">
                  <div className="info">
                    <span>C, C++, Python, Java</span>
                  </div>
                  <div className="line c"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Data structure & Algorithm Analysis</span>
                  </div>
                  <div className="line ds"></div>
                </div>

                <div className="bars">
                  <div className="info">
                    <span>HTML, CSS, JavaScript</span>
                  </div>
                  <div className="line js"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>React JS , React Native</span>
                  </div>
                  <div className="line react"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Node Js , Express Js</span>
                  </div>
                  <div className="line Node"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Socket.io, WebRTC</span>
                  </div>
                  <div className="line Node"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>AWS, Lambda function, DynamoDB, S3</span>
                  </div>
                  <div className="line Node"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>MySQL, MongoDB</span>
                  </div>
                  <div className="line mysql"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="teams" id="teams">
        <div className="max-width">
          <h2 className="title" >
            My Projects
          </h2>
          <Projects />
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>
                {" "}
                I am interested in software development, web development
                opportunities or any other opportunity similer to my interest.
                However, if you have other request or question, don’t hesitate
                to contact me using below details either.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                  gap: "10px",
                }}
              >
                <div className="head">
                  <a
                    href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSKkVJwqkLSgbrVWNlJbtlVdtCDxTrfPvGgtJGsGxZlWtJXxtxflpJpjbjMtQqGHwMKRqjWW"
                    target="_blank"
                  >
                    <img width="30px" src={Gmail} />
                  </a>
                </div>

                <div className="head">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/abhishek-mittal-979726203/"
                    target="_blank"
                  >
                    <img width="30px" src={Linkdin} />
                  </a>
                </div>

                <div className="head">
                  <a
                    href="https://www.instagram.com/abhishekmittal2002/"
                    target="_blank"
                  >
                    <img width="30px" src={Insta} />
                  </a>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message me</div>
              <form method="post" action="/">
                <div className="fields">
                  <div className="field name">
                    <input
                      type="text"
                      name="name"
                      onChange={handlinput}
                      placeholder="Name"
                      valuerequired
                    ></input>
                  </div>
                  <div className="field email">
                    <input
                      type="email"
                      name="email"
                      onChange={handlinput}
                      placeholder="Email"
                      required
                    ></input>
                  </div>
                </div>
                <div className="field">
                  <input
                    type="text"
                    name="subject"
                    onChange={handlinput}
                    placeholder="Subject"
                    required
                  ></input>
                </div>
                <div className="field textarea">
                  <textarea
                    cols="30"
                    rows="10"
                    onChange={handlinput}
                    name="message"
                    placeholder="Message.."
                    required
                  ></textarea>
                </div>
                <div className="button-area">
                  <button type="submit" onClick={postdata}>
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <span>
          Created By Abhishek mittal |{" "}
          <span className="far fa-copyright"></span> 2020 All rights reserved.
        </span>
      </footer>
    </div>
  );
}
export default Home;