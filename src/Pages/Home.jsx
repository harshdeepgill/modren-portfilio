import React from 'react'
import Title from '../Components/Title/Title';
import "./Home.scss"
import TechStack from '../Components/TechStack/TechStack';

const Home = () => {
  return (
    <div className='main-home'>
      <div className='bg-text-home'><h1>Harshdeep Gill.</h1></div>
      <div className='outer-home'>
        <div className='text-home'>
          <Title name="hello"/>
          <h1>Full<span>-</span>Stack Web Developer</h1>
          <p>Hi, I'm <span>Harshdeep Gill.</span> A passionate Full-Stack Web Developer based in Chandigarh, India.</p>
        </div>
        <div className='image-home'>
          <div className='animated-div'></div>
        </div>
      </div>
      <TechStack/>
    </div>
  )
}

export default Home