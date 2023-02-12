import React from 'react'
import InternshipCard from './InternshipCard';
import Workskillslogo from "../assets/workskillslogo.jpg"
import Twiniot from "../assets/Syntheimlogo.jpg"
import Bettertalk from "../assets/bettertallogo.jpg"
import './Internship.css'
function Internship() {
  const data=[
    {
 companyname:"WorkSkills",
 role:"FrontEnd Developer",
 duration:" Dec 4 2022",
 description:`Assisted in development of the front end of Web using HTML, CSS, JavaScript, jQuery and the Tailwind framework. which have 10,000+ live users .Collaborated with team members using version control systems such as Git to organize modifications and assign tasks..Wrote JavaScript code to schedule the program to execute automatically at 11 AM every morning to update Workshop WA link.`,
 companylogo:`${Workskillslogo}`,
 skills:"HTML, CSS, JavaScript, jQuery"
  },
  {
    companyname:"Better Talk IND",
    role:"Android Developer",
    duration:" Aug 4 2022",
    description:` Assisted in development of the front end of a mobile application for iOS/Android using React Native framework.
     Worked with Redux-toolkit and handled local updates and async requests.
     Implemented OTP verification using email and Used JWT for generating token, brcypt for hash password .
     Utilized Android Studio as a development environment in order to visualize the application in both iOS and Android.`,
    companylogo:`${Bettertalk}`,
    skills:'Node, Express, MongoDB, React Native'
  },{
  companyname:"TwinIot",
  role:"Backend Developer",
  duration:"Feb 16 2022",
  description:`Hosted back-end on AWS using Lambda function, DynamoDB, S3 bucket
  . Developed and tested various protocols for sending chat message more efficiently using socket.
  . Used NoSQL database MongoDB for tracking users informatio`,
  companylogo:`${Twiniot}`,
  skills:'AWS, Node, Express, Socket, WebRTC, MongoDB'
  }
]

  return (
    <div className="intenrship">
<InternshipCard  item={data[0]} style={{widht:'31%'}}/>
<InternshipCard  item={data[1]}  style={{widht:'31%'}}/>
<InternshipCard  item={data[2]}  style={{widht:'31%'}}/>
    </div>
  )
}

export default Internship