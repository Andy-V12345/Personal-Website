import React from "react";
import './css/App.css';
import './css/ProjectDescription.css';
import BlueButton from "./BlueButton";
import {FaTimes} from "react-icons/fa";

  

function ProjectDescription({visible, close, title, children, link, image}) {
    const [state, setState] = React.useState(() => 'FaTimes')
    
    return (
        <div className={visible ? 'project-description-container' : 'hidden'}>
            <img className="project-image" src={image} alt='image' />
            <div className='description-container'>
                <h3 onClick={close} onMouseEnter={() => setState('FaTimes hover')} onMouseLeave={() => setState('FaTimes')}><FaTimes className={state}/></h3>
                <h3>{title}</h3>
                <p>
                    {children}
                </p>
                <BlueButton link={link}>Project Repo</BlueButton>
            </div>
        </div>
  
    ) 
}
export default ProjectDescription;