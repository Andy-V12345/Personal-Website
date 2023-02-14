import React from "react";
import './App.css';
import BlueButton from "./BlueButton";
import {FaTimes} from "react-icons/fa";



function ProjectDescription({id, visible, onShow, title, children, link, image}) {
    const [state, setState] = React.useState(() => 'FaTimes')

    const handleClick = React.useCallback(() => {
        onShow(id)
         
    }, [onShow]) 
     
    return (
        <div onClick={handleClick} className={visible[id] ? 'background-container' : 'hidden'}>
            <div className={visible[id] ? 'project-description-container' : 'hidden'}>
                <img className="project-image" src={image} alt='image' />
                <div className='description-container'>
                    <h3 onClick={handleClick} onMouseEnter={() => setState('FaTimes hover')} onMouseLeave={() => setState('FaTimes')}><FaTimes className={state}/></h3>
                    <h3>{title}</h3>
                    <p>
                        {children}
                    </p>
                    <BlueButton link={link}>Project Repo</BlueButton>
                </div>
            </div>
        </div>
  
    )
}

export default ProjectDescription;