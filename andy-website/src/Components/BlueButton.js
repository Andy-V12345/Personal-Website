import React from 'react'
import './css/App.css';

function BlueButton({link, children}) {
    return (
        <button className="blueButton py-2 px-4 md:py-3 md:px-5">
            <a className='buttonLink text-sm md:text-base' href={link} target='_blank'>{children}</a>
        </button>
    )
}

export default BlueButton