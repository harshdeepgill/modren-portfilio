import React from 'react'
import Title from '../Components/Title/Title';
import "./Home.scss"

const Home = () => {
  return (
    <div className='main-home'>
      <div className='outer-home'>
        <div className='text-home'>
          <Title name="hello"/>
          <h1>Full<span>-</span>Stack Web Developer</h1>
          <p>Hi, I'm <span>Harshdeep Gill.</span> A passionate Full-Stack Web Developer based in Chandigarh, India.</p>
          <div className='logo-home'>
            <div>
              <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2Fhtml_5_e17a3be25f.png?alt=media&token=45484424-b2bd-480b-97ae-c04812e21d6c' alt='HTML'/>
            </div>
            <div>
              <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2Freact_fd582ea59b.png?alt=media&token=4bbafbc8-b9fe-4409-b3b5-569343d0a165' alt='React'/>
            </div>
            <div>
              <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2Fmongodb_8a65496daa.png?alt=media&token=060e64b2-4ce3-4fbd-8767-990e7c3254a7' alt='MongoDB'/>
            </div>
            <div>
              <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2Fjavascript_96690a83df.png?alt=media&token=b73254a2-4878-41fe-a457-dcbe3d0d6c3c' alt='JS'/>
            </div>
            <div>
              <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2Fcss_3_3dbbdc86b6.png?alt=media&token=f808c2ee-2b97-4d53-8b1d-3a92c3c4dadb' alt='CSS'/>
            </div>
            <div>
              <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2Fredux.png?alt=media&token=ea833f55-d791-44ea-8a53-81f00b5b9cf1' alt='Redux'/>
            </div>
            <div>
              <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2Fnodejs_07d5eaa3a7.png?alt=media&token=defcbc94-0755-44e5-a127-dff0acfde1ed' alt='Node.js'/>
            </div>
            <div>
              <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2Fts-logo-256.png?alt=media&token=781254a2-5037-44d2-8442-fb8fe804496b' alt='TypeScript'/>
            </div>
          </div>
        </div>
        <div className='image-home'>
          <div className='animated-div'></div>
        </div>
      </div>
    </div>
  )
}

export default Home