import './css/App.css';
import './css/ProjectBox.css';
import React from 'react';

function ProjectBox({image, title, children, onShow}) {
    const [state, setState] = React.useState(() => '')
     
    
    return (
        <div onClick={onShow} onMouseEnter={() => setState('hover')} onMouseLeave={() => setState('')} id={state} className='projectbox'>
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