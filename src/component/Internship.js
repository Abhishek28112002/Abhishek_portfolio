import React,{useState} from 'react'
import InternshipCard from './InternshipCard';
import Workskillslogo from "../assets/workskillslogo.jpg"
import Twiniot from "../assets/Syntheimlogo.jpg"
import Bettertalk from "../assets/bettertallogo.jpg"
import './Internship.css'
function Internship() {
  const [show, hide] = useState('none')

  const data=[
    {
    companyname:"Trainity",
 role:"Full Stack Developer Intern",
 duration:"June 1 2023 - Persent",
 description:'I took the lead in creating a dynamic Admin Panel website that empowers managers to oversee employee progress. This website featured a streak-based design, allowing employees to submit tasks, track their progress, and compete on leaderboards.To enhance data management and user experience, I utilized AWS pre-signed URLs for local image hosting. This optimization ensured that the platform ran smoothly and efficiently.Additionally, I integrated Google authentication, offering users a seamless and secure sign-in process. This not only improved user accessibility but also enhanced data privacy, ensuring the safety of sensitive information.',
 companylogo:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABIUlEQVR4AWPw3N9W4rm/5ZvH/pb/9MWtv4D2ljCAGHBB+uNvDCDGQOKh4YBRB4w6IOjE5P+xZ+eThCNPTf/vtr+ZYgeADdn5/OL/3//+kIRXPjn932ZfI3UcsAvoAFLBqqdn/lvta6COA3Y8O///x5+fcPzzz+///xB2gdhQOQRe8fgkdULAHegAryO9/z2P9YOxOxBnnlsAtOQX3AEffn3973NiMkgejp0Odf5329dM/VzgBsRpx6ehOODtj8//LQ60YlM/Qhww6oBRB4w6YNQB7358+W9JLwe4A3H80Yn/L7658//q2/tgfOLl9f8O9HEAooJy2t/03xGKnYEYKDbaJiQLjzoA2DtupX/PGJGjfjF4HGgtHYgeMsjjngdbSgBdwatHWTvOkgAAAABJRU5ErkJggg==`,
 skills:"NodeJs, MongoDB, Bootstrap, ReactJs, Embedded Javascript, jQuery "
  }
    ,
    {
      companyname:"IIT Dharwad",
   role:"Research Intern",
   duration:"May 10 2022 - July 10 2022",
   description:`I spearheaded a research project with significant impact, focusing on enhancing computer task management. We innovated by developing four novel scheduling methods, substantially improving task efficiency. Our findings were documented and successfully published in a prominent computer design conference. A noteworthy achievement was simplifying complex problems with clever strategies, demonstrating our expertise in optimizing solutions. Additionally, we honed our skills in Python programming, employing it to create more efficient data structures and smarter algorithms, further showcasing our ability to enhance system performance.`,
   companylogo:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAMAAADhRa4NAAAAP1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC6E+JdAAAAFXRSTlMATl0OLf8YItgofYzJ57U5oUQGcGhgoUpoAAABI0lEQVR4AY3PB4LEIAgF0A8KGI2jRO9/1k2yffqzd8EVYjwUIgARAFFxj0laskixJPH+DSIrasVFxHBXkgJVZEm4pWtNgAJntdbVbo9LAxaRCES5d4lIxfH+BagiuNKzIkkNLkJbkoQw+nUElXyVYpZlJU8iij/yGJN7Mpw0deYxMn6R7NIojB2XucqO8QePvN9RigOtnPLEHwHYWq5p+obZZZ0RgOJGTEJFLgGPTZGIxwKwbOHs3NJWWh+eW89jFDVc24IGsxCCRtO9+b32sJ2wpy/hrA44BDMnXZiYiLSpLUEXs99btPQyZ8kljz459zK8c+kNb9mmMxmTj8bmNJzdqXnk7M2JAuDupM1bc1dXo7bz4S3yQk4blkM86z8d+5n4AFnmDsTLM5lkAAAAAElFTkSuQmCC`,
   skills:"C++, Data structure and Algorithms, Python"
    }
      ,
      {
        companyname:"Stringar",
     role:"Frontend Developer Intern",
     duration:"June 26 2022- Aug 26 2022",
     description:`I created a social web application called "Stringar" using technologies like React JS, JavaScript, HTML, and CSS. I made sure the app looked great and worked well by improving the user interface with tools like Tailwind and Bootstrap. This means the app not only functions smoothly but also looks attractive and adjusts to different screen sizes. I combined my design and technical skills to create an app that's all about giving users a great experience. The app includes features such as user login and signup, a chat system, quiz functionality, profile editing, notifications, and the ability to join rooms. I designed and built the front-end for all of these features, creating a complete and engaging platform for users to enjoy.`,
     companylogo:`https://media.licdn.com/dms/image/D4D03AQHMF023o0yhzg/profile-displayphoto-shrink_400_400/0/1663480315459?e=1701907200&v=beta&t=0MAqgnUaPKUnwyj0o0eB3Z_3GCmPPKTbPC_TFelohw0`,
     skills:"React, JavaScript, jQuery, HTML, CSS, Tailwind, Bootstrap"
      }
        ,
{
 companyname:"WorkSkills",
 role:"Frontend Developer Intern",
 duration:"Sep 10 2022 - Dec 10 2022 ",
 description:`Contributed to the development of the front-end web interface utilizing HTML, CSS, JavaScript, jQuery, and the Tailwind framework, resulting in a platform with over 10,000 live users. Worked closely with team members through the use of version control systems such as Git to streamline modifications and delegate tasks effectively. Implemented a JavaScript solution to schedule daily updates to the Workshop WA link at 11 AM each morning.`,
 companylogo:`${Workskillslogo}`,
 skills:"JavaScript, jQuery, HTML, CSS, Bootsrtrap"
  },
  {
    companyname:"Better Talk IND",
    role:"Android Developer Intern" ,
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

    <div className="intenrship" onMouseEnter={()=>hide('block')} onMouseLeave={()=>hide('none')}>
      { data.map((item,index)=>(
<InternshipCard  item={item} show={show} />
))}
    </div>
  )
}

export default Internship