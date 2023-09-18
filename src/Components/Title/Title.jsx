import React from 'react'
import "./Title.scss";

const Title = ({name}) => {
  return (
    <div className='outer'>
        <div className='style'></div>
        <p>{name}</p>
    </div>
  )
}

export default Title