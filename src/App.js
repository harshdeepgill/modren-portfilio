import HorizontalScroll from "react-scroll-horizontal";
import "./App.scss"
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Home from "./Pages/Home";


function App() { 

  const [slider, setSlider] = useState(null)


  useEffect(()=>{
    setSlider(document.getElementById("slider"))
  },[])


  return (
    <div className="App">
      <Navbar slider={slider}/>
      <div id="slider">
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
