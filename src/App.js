import HorizontalScroll from "react-scroll-horizontal";
import "./App.scss"
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import Home from "./Pages/Home";


function App() { 

  const [slider, setSlider] = useState(null);
  const [currTab,setCurrTab] = useState(0);


  useEffect(()=>{
    setSlider(document.getElementById("slider"))
  },[])

  const hanldeWheel = (e)=>{
    if(!e.deltaY){
      return
    }
    if(e.deltaY>0){
      if(currTab == 5){
        return
      }
      slider.scrollLeft = (currTab+1)*window.innerWidth;
      setCurrTab(prev => prev+1)
    }
    else if(e.deltaY<0){
      if(currTab == 0){
        return
      }
      slider.scrollLeft = (currTab-1)*window.innerWidth;
      setCurrTab(prev => prev-1)
    }
    
    // console.log(e)
    // e.currentTarget.scrollLeft += (e.deltaY + e.deltaX)*10;
  }

  const handleNavlinkScroll = (val) =>{
    slider.scrollLeft = val*window.innerWidth
    setCurrTab(val)
  } 


  return (
    <div className="App">
      <Navbar handleNavlinkScroll={handleNavlinkScroll} currTab={currTab} slider={slider}/>
      <div onWheel={hanldeWheel} id="slider">
        <div className='wrapper'>
          <Home/>
        </div>
        <div className='wrapper'>
          <h1>Hello World About</h1>
        </div>
        <div className='wrapper'>
          <h1>Hello World Skills</h1>
        </div>
        <div className='wrapper'>
          <h1>Hello World Project</h1>
        </div>
        <div className='wrapper'>
          <h1>Hello World Statstics</h1>
        </div>
        <div className='wrapper'>
          <h1>Hello World Contact</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
