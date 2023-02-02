import './App.css';
import React from 'react';

function ProjectBox({image, title, children}) {
    const [state, setState] = React.useState(() => '')
    

    return (
        <div onMouseEnter={() => setState('hover')} onMouseLeave={() => setState('')} id={state} className='projectbox'>
            <div className='img-container'>
                <img src={image} alt='project image' />
            </div>
            <h2>{title}</h2>
            <hr></hr>
            <p>{children}</p>
        </div>
    )
}

export default ProjectBox