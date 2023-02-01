import React from 'react'
import './App.css';

function SkillBox({children, title}) {
    return (
        <div className='skillbox'>
            <h2>{title}</h2>
            <hr></hr>
            <p>{children}</p>
        </div>
    )
}

export default SkillBox;