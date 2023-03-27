import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css";
const Home = () => {
  return (
    <div className='home'>
        <div className='about'>
        <h2> Hi, Myself Mohd Savej</h2>
        <div className='prompt'>
            <p>
                A software Developer with a passion for learning and creating 
            </p>
        <LinkedInIcon/>
        <EmailIcon/>
        <GithubIcon/>
        </div>
 </div>
 <div className='skills'>
    <h2> Skills</h2>
    <ol className='list'>
        <li className='item'>
            <h2>
             Front-End   
            </h2>
            <span> ReactJs,Redux,HTML,CSS,TAILWIND,BOOTSTRAP,MATERIAL-UI</span>
        </li>
        <li className='item'>
            <h2>
             Back-End   
            </h2>
            <span>NodeJs,MongoDB,ExpressJs,MySQL </span>
        </li>
        <li className='item'>
            <h2>
             Languages   
            </h2>
            <span>C++,JavaScript,Python,C,</span>
        </li>
    </ol>
 </div>
    </div>
  )
}

export default Home