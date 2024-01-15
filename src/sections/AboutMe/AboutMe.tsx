import React from 'react'

import './AboutMe.scss'

const AboutMe = () => {
  return (
    <div className='aboutme'>
        <div className='aboutme__header'>
            <p>About me</p>
        <h2>Developer</h2>
        </div>
        <div className='aboutme__content'>
            <div className='aboutme__content--left'>
                <img src='/public/Theme.JPG' alt='img' height={100}></img>
            </div>
            <div className='aboutme__content--right'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa amet dolor officia voluptatem perferendis quo fugiat impedit dolorum doloremque, doloribus sed commodi a exercitationem eveniet voluptates fuga similique quibusdam?</p>
                <p> My goals</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe