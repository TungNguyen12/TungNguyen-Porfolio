import React from 'react'
import TechList from './TechList/TechList'

const TechStack = () => {
  return (
    <div className='techstack'>
        <div className='techstack__header'>
            <p>My tech stack</p>
            <h2>Technologies I use</h2>
        </div>

        <TechList techData={[
            {img: '/html.png', name: 'HTML'},
            {img: '/scss.png', name: 'scss'},
            
    
    ]} />
         
    </div>
  )
}

export default TechStack