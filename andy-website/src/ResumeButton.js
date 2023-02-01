import React from 'react'
import './App.css'

function ResumeButton() {
    const [buttonState, setButtonState] = React.useState(() => 'resume')

    return (
        <button onMouseEnter={() => setButtonState('resume-hover')} 
                onMouseLeave={() => setButtonState('resume')} 
                className={buttonState}>
            My Resume
            {/* <a href="../Resume.pdf" type='application/pdf' target='_blank'>My Resume</a> */}
        </button>
    )
}

export default ResumeButton