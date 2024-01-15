import React from 'react'
import NavBar from './components/NavBar/NavBar'
import AboutMe from './sections/AboutMe/AboutMe'
import Home from './sections/Home/Home'

import './styles/App.scss'
import TechStack from './sections/TechStack/TechStack'
import Project from './sections/Project/Project'

const App = () => {
  return (
    <div className='theme'>
        <NavBar />
        <Home />
        <AboutMe />
        <TechStack />
        <Project 
          left={true} 
          name='library' desc='oaisjdoiasjdioasjdoasjiodjiasodj asdlkjaslkdjasd asdasdasd aosdjoasidjioasdjoiasjdasjd'
          sourceLink='https://example.com'
          demoLink='https://example.com'
        />
        <Project 
          left={false} 
          name='hihi' desc='oaisjdoiasjdioasjdoasjiodjiasodj asdlkjaslkdjasd asdasdasd aosdjoasidjioasdjoiasjdasjd'
          sourceLink='https://example.com'
          demoLink='https://example.com'
        />
    </div>
  )
}

export default App