import React from 'react'
import './App.css'

function BlueButton({link, children}) {
    const [buttonState, setButtonState] = React.useState(() => 'blueButton')

    return (
        <button onMouseEnter={() => setButtonState('blueButton-hover')} 
                onMouseLeave={() => setButtonState('blueButton')} 
                className={buttonState}>
            <a className='buttonLink' href={link} target='_blank'>{children}</a>
        </button>
    )
}

export default BlueButton