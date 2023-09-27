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
 role:"Full Stack Developer",
 duration:"Sep 10 2022 - Dec 10 2022 ",
 description:`Contributed to the development of the front-end web interface utilizing HTML, CSS, JavaScript, jQuery, and the Tailwind framework, resulting in a platform with over 10,000 live users. Worked closely with team members through the use of version control systems such as Git to streamline modifications and delegate tasks effectively. Implemented a JavaScript solution to schedule daily updates to the Workshop WA link at 11 AM each morning.`,
 companylogo:`${Workskillslogo}`,
 skills:"JavaScript, jQuery, HTML, CSS"
  },
  {
    companyname:"Better Talk IND",
    role:"Android Developer",
    duration:"June 4 2022 - Aug 4 2022",
    description:` Developed front-end for cross-platform mobile applications on iOS and Android using React Native framework
    Expertise in Redux-toolkit for managing local updates and asynchronous requests
    Implemented email-based OTP verification and utilized JWT for token generation and bcrypt for password hashing
    Proficient in using Android Studio for development and visualization of the application on both iOS and Android platforms.`,
    companylogo:`${Bettertalk}`,
    skills:'NodeJs, ExpressJs, MongoDB, React Native'
  },{
  companyname:"TwinIot",
  role:"Backend Developer",
  duration:"Aug 4 2022 - March 4 2023",
  description:`I designed and implemented a chat messaging application using various AWS services such as Lambda functions, DynamoDB, and S3 bucket. I used socket technology to create efficient messaging protocols and integrated WebRTC for better video calling features. To track user information and ensure data accuracy and security, I utilized a NoSQL database, MongoDB. Additionally, I integrated these features with a React Native frontend.`,
  companylogo:`${Twiniot}`,
  skills:'Amazone Web Services, NodeJs, ExpressJs, Socket, WebRTC, MongoDB'
  }
]

  return (
    <div className="intenrship">
<InternshipCard  item={data[0]} />
<InternshipCard  item={data[1]}  />
<InternshipCard  item={data[2]}  />
    </div>
  )
}

export default Internship