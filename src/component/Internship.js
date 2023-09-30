import React from 'react'
import InternshipCard from './InternshipCard';
import Workskillslogo from "../assets/workskillslogo.jpg"
import Twiniot from "../assets/Syntheimlogo.jpg"
import Bettertalk from "../assets/bettertallogo.jpg"
import './Internship.css'
function Internship() {
  const data=[
//     {
//     companyname:"Trainity",
//  role:"Full Stack Developer",
//  duration:"Sep 10 2022 - Dec 10 2022 ",
//  description:`Contributed to the development of the front-end web interface utilizing HTML, CSS, JavaScript, jQuery, and the Tailwind framework, resulting in a platform with over 10,000 live users. Worked closely with team members through the use of version control systems such as Git to streamline modifications and delegate tasks effectively. Implemented a JavaScript solution to schedule daily updates to the Workshop WA link at 11 AM each morning.`,
//  companylogo:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABIUlEQVR4AWPw3N9W4rm/5ZvH/pb/9MWtv4D2ljCAGHBB+uNvDCDGQOKh4YBRB4w6IOjE5P+xZ+eThCNPTf/vtr+ZYgeADdn5/OL/3//+kIRXPjn932ZfI3UcsAvoAFLBqqdn/lvta6COA3Y8O///x5+fcPzzz+///xB2gdhQOQRe8fgkdULAHegAryO9/z2P9YOxOxBnnlsAtOQX3AEffn3973NiMkgejp0Odf5329dM/VzgBsRpx6ehOODtj8//LQ60YlM/Qhww6oBRB4w6YNQB7358+W9JLwe4A3H80Yn/L7658//q2/tgfOLl9f8O9HEAooJy2t/03xGKnYEYKDbaJiQLjzoA2DtupX/PGJGjfjF4HGgtHYgeMsjjngdbSgBdwatHWTvOkgAAAABJRU5ErkJggg==`,
//  skills:"JavaScript, jQuery, HTML, CSS"
//   }
//     ,
{
 companyname:"WorkSkills",
 role:"Frontend Developer",
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
      { data.map((item,index)=>(
<InternshipCard  item={item} />
))}
    </div>
  )
}

export default Internship