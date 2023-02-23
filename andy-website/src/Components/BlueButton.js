import React from 'react'
import './css/App.css';

function BlueButton({link, children}) {
    const [buttonState, setButtonState] = React.useState(() => 'blueButton')

    return (
        <button onMouseEnter={() => setButtonState('blueButton-hover')} 
                onMouseLeave={() => setButtonState('blueButton')} 
                className={buttonState}>
            <a className='buttonLink text-sm sm:text-base' href={link} target='_blank'>{children}</a>
        </button>
    )
}

export default BlueButton