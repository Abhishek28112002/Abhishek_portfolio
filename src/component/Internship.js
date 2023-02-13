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
 description:`Contributed to the development of the front-end web interface utilizing HTML, CSS, JavaScript, jQuery, and the Tailwind framework, resulting in a platform with over 10,000 live users. Worked closely with team members through the use of version control systems such as Git to streamline modifications and delegate tasks effectively. Implemented a JavaScript solution to schedule daily updates to the Workshop WA link at 11 AM each morning.`,
 companylogo:`${Workskillslogo}`,
 skills:"HTML, CSS, JavaScript, jQuery"
  },
  {
    companyname:"Better Talk IND",
    role:"Android Developer",
    duration:" Aug 4 2022",
    description:` Developed front-end for cross-platform mobile applications on iOS and Android using React Native framework
    Expertise in Redux-toolkit for managing local updates and asynchronous requests
    Implemented email-based OTP verification and utilized JWT for token generation and bcrypt for password hashing
    Proficient in using Android Studio for development and visualization of the application on both iOS and Android platforms.`,
    companylogo:`${Bettertalk}`,
    skills:'Node, Express, MongoDB, React Native'
  },{
  companyname:"TwinIot",
  role:"Backend Developer",
  duration:"Feb 16 2022",
  description:`Hosted back-end on Amazon Web Services (AWS) using Lambda functions, DynamoDB, and S3 bucket
  Designed and implemented efficient chat messaging protocols using socket technology
  Utilized NoSQL database MongoDB to track user information and ensure data accuracy and security`,
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