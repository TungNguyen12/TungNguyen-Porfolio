import React from 'react'
import './Project.scss'
export type projectData = {
    left: boolean
    name: string,
    desc: string,
    demoLink: string,
    sourceLink: string
}

const Project = ({left,name,desc,demoLink,sourceLink}: projectData) => {
    if (left)
        return (
            <div className='project'>
                <div className='project__header'>
                    <h2>{name}</h2>
                </div>
                <div className='project__content'>
                    <div className='project__content--left'>
                        <img src='../../public/Theme.JPG' alt='img' height={100}></img>
                    </div>
                    <div className='project__content--right'>
                        <p>{desc}</p>
                        <a href={demoLink}>{demoLink}</a>
                        <a href={sourceLink}>{sourceLink}</a>
                    </div>
                </div>
            </div>
        )
    else return (
        <div className='project'>
            <div className='project__header'>
                <h2>{name}</h2>
            </div>
            <div className='project__content'>
                <div className='project__content--left'>
                    <p>{desc}</p>
                    <a href={demoLink}>{demoLink}</a>
                    <a href={sourceLink}>{sourceLink}</a>
                </div>
                <div className='project__content--right'>
                    <img src='/public/Theme.JPG' alt='img' height={100}></img>
                </div>
            </div>
        </div>
    ) 
}

export default Project