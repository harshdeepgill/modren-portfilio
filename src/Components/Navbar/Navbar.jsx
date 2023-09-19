import React, { useRef } from 'react'
import "./Navbar.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = ({currTab, handleNavlinkScroll}) => {

  return (
    <div className='main'>
        <div className='social inner'> 
          <a><GitHubIcon/></a>
          <a><LinkedInIcon/></a>
        </div>

        <div className='links inner'>
          <div>
            <p onClick={()=>{handleNavlinkScroll(0)}}>Home</p>
            <div className={`${currTab == 0 && "active"} line home`}></div>
          </div>
          <div>
            <p onClick={()=>{handleNavlinkScroll(1)}}>About</p>
            <div className={`${currTab == 1 && "active"} line about`}></div>
          </div>
          <div>
            <p onClick={()=>{handleNavlinkScroll(2)}}>Skills</p>
            <div className={`${currTab == 2 && "active"} line skills`}></div>
          </div>
          <div>
            <p onClick={()=>{handleNavlinkScroll(3)}}>Projects</p>
            <div className={`${currTab == 3 && "active"} line projects`}></div>
          </div>
          <div>
            <p onClick={()=>{handleNavlinkScroll(4)}}>Statstics</p>
            <div className={`${currTab == 4 && "active"} line statstics`}></div>
          </div>
          <div>
            <p onClick={()=>{handleNavlinkScroll(5)}}>Contact</p>
            <div className={`${currTab == 5 && "active"} line contact`}></div>
          </div>
        </div>

        <div className='initials inner'>
          <h1>H.G.</h1>
        </div>
    
    </div>
  )
}

export default Navbar