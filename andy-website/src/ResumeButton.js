import React from 'react'
import './App.css'

function ResumeButton() {
    const [buttonState, setButtonState] = React.useState(() => 'resume')

    return (
        <button onMouseEnter={() => setButtonState('resume-hover')} 
                onMouseLeave={() => setButtonState('resume')} 
                className={buttonState}>
            <a className='resumeLink' href="https://drive.google.com/file/d/1ZehCmz5QhYUrA66p4JbZd5qGr-Wjb5Wd/view?usp=sharing" target='_blank'>My Resume</a>
        </button>
    )
}

export default ResumeButton