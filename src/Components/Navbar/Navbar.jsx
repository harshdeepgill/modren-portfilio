import React, { useRef } from 'react'
import "./Navbar.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = ({slider}) => {

  const currTab = useRef(0);

  const handleScroll = (val) =>{
    if(currTab.current > val){
      slider.scrollLeft -= (currTab.current-val)*(window.innerWidth)
    }else if(currTab.current < val){
      slider.scrollLeft -= (currTab.current-val)*(window.innerWidth)
    }
    
    const activeLines = document.getElementsByClassName("line");
    activeLines[currTab.current].classList.toggle("active");
    activeLines[val].classList.toggle("active");

    currTab.current = val;
  } 

  return (
    <div className='main'>
        <div className='social inner'> 
          <a><GitHubIcon/></a>
          <a><LinkedInIcon/></a>
        </div>

        <div className='links inner'>
          <div>
            <p onClick={()=>{handleScroll(0)}}>Home</p>
            <div className='active line home'></div>
          </div>
          <div>
            <p onClick={()=>{handleScroll(1)}}>About</p>
            <div className='line about'></div>
          </div>
          <div>
            <p onClick={()=>{handleScroll(2)}}>Skills</p>
            <div className='line skills'></div>
          </div>
          <div>
            <p onClick={()=>{handleScroll(3)}}>Projects</p>
            <div className='line projects'></div>
          </div>
          <div>
            <p onClick={()=>{handleScroll(4)}}>Statstics</p>
            <div className='line statstics'></div>
          </div>
          <div>
            <p onClick={()=>{handleScroll(5)}}>Contact</p>
            <div className='line contact'></div>
          </div>
        </div>

        <div className='initials inner'>
          <h1>H.G.</h1>
        </div>
    
    </div>
  )
}

export default Navbar