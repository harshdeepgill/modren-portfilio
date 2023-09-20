import React from 'react'
import "./TechStack.scss"
import Title from '../Title/Title'

const TechStack = () => {
  return (
    <div className='main-tech'>
        <div className='text-tech'>
            <Title name={"Tech Stack"}/>
            {/* <p>Tech Stack</p>
            <div></div> */}
        </div>
        <div className='logo-tech'>
            <div className='inner-logo-tech'>
                <div>
                <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2FHTML.png?alt=media&token=19185323-50a5-4c36-9d29-a5a7d1fd6e66' alt='HTML'/>
                </div>
                <div>
                <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2F1.png?alt=media&token=f02f6e0f-5e2c-426e-a9b1-36e27c862b04' alt='CSS'/>
                </div>
            </div>
            <div className='inner-logo-tech'>
                <div>
                <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2F8.png?alt=media&token=04254467-278d-4bc1-872d-3b097f4bd1b2' alt='JS'/>
                </div>
                <div>
                <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2F7.png?alt=media&token=dd3d5d21-a19a-4bf3-a8ee-deca4183f892' alt='TypeScript'/>
                </div>
            </div>
            <div className='inner-logo-tech'>
                <div>
                <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2F4.png?alt=media&token=39a342e8-fc7b-46a2-98a6-43dc129f79b0' alt='React'/>
                </div>
                <div>
                <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2F9.png?alt=media&token=8d97fd4a-8ccb-4bde-b8a1-7f2c3fd1dce9' alt='Redux'/>
                </div>
            </div>
            <div className='inner-logo-tech'>
                <div>
                <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2F2.png?alt=media&token=5a156672-ab3f-4d2e-86f6-0231d9e346a3' alt='Node.js'/>
                </div>
                <div>
                <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2F3.png?alt=media&token=21afa5f6-809c-4e0f-a053-7f6bff8bd522' alt='MongoDB'/>
                </div>
            </div>
            <div className='inner-logo-tech'>
                <div>
                <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2F5.png?alt=media&token=9313337f-ffef-4bf8-b46d-0c111cf9411b' alt='Sass'/>
                </div>
                <div>
                <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2F11.png?alt=media&token=b61678ab-b656-4766-a106-9929cda579d4' alt='Tailwind'/>
                </div>
            </div>
            <div className='inner-logo-tech'>
                <div>
                <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2F6.png?alt=media&token=de717092-bbad-480d-9c08-db03c2aa2c25' alt='Chakra UI'/>
                </div>
                <div>
                <img src='https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Resources%2F10.png?alt=media&token=44057f18-8f8a-489e-976b-66762e5161db' alt='MUI'/>
                </div>
            </div>
          </div>
    </div>
  )
}

export default TechStack