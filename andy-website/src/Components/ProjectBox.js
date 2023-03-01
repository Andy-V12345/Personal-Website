import './css/App.css';
import './css/ProjectBox.css';
import React from 'react';

function ProjectBox({image, title, children, onShow}) {
    const [state, setState] = React.useState(() => '')
     
    
    return (
        <div onClick={onShow} 
            onMouseEnter={() => setState('hover')} 
            onMouseLeave={() => setState('')} 
            id={state} 
            className='projectbox w-10/12 px-0 md:w-4/5 lg:w-3/4'
        >
            <div className='img-container'>
                <img src={image} alt='project image' />
            </div>
            <div className='info-container space-y-1 px-2 my-3'>
                <h2 className='font-bold text-sm md:text-base lg:text-xl'>{title}</h2>
                <hr></hr>
                <p className='text-xs md:text-sm lg:text-lg'>{children}</p>
            </div>
        </div>
    )
}
 
export default ProjectBox