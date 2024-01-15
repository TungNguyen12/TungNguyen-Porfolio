import React from 'react'

import './TechList.scss'


export type TechType = {
    img: string
    name: string
}

const Tech = ({img, name} : TechType) => {
    return (
        <div className='techlogo'>
            <img className='techlogo__img' src={img} alt={name} />
            <p>{name.toUpperCase()}</p>
        </div>
    )
}

const TechList = ({techData} : {techData : TechType[]}) => {
  return (
    <div className='techlist'>
        <h3 className='techlist__title'>Frontend</h3>
        <div className='techlist__list' 
        >
        {techData.map(tech => {
            return (<Tech img={tech.img} name={tech.name} />)
        })}
        </div>
    </div>
  )
}

export default TechList
