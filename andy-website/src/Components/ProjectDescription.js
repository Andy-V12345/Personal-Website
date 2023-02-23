import React from "react";
import './css/App.css';
import './css/ProjectDescription.css';
import BlueButton from "./BlueButton";
import {FaTimes} from "react-icons/fa";

  

function ProjectDescription({isPhone, visible, close, title, children, link, image}) {
    if (isPhone) {
        return (
            <div className={visible ? 'project-description-container w-11/12 h-1/3' : 'hidden'}>
                <div className='description-container phone'>
                    <h3 onClick={close} className='text-xl'><FaTimes className='FaTimes right-5 top-5'/></h3>
                    <h3 className="font-bold text-xl mt-5 w-3/4">{title}</h3>
                    <p className="text-xs mb-5 mt-3">
                        {children}
                    </p>
                    <BlueButton link={link}>Project Repo</BlueButton>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={visible ? 'project-description-container w-11/12 h-1/2 sm:w-3/4 md:w-3/5 lg:h-3/5' : 'hidden'}>
                <img className="project-image" src={image} alt='image' />
                <div className='description-container'>
                    <h3 onClick={close} className='text-xl lg:text-2xl'><FaTimes className='FaTimes right-5 top-5'/></h3>
                    <h3 className="font-bold text-xl lg:text-2xl mt-5 w-3/4 sm:w-full">{title}</h3>
                    <p className="text-xs mb-5 mt-3 lg:text-base">
                        {children}
                    </p>
                    <BlueButton link={link}>Project Repo</BlueButton>
                </div>
            </div>
    
        ) 
    }
}
export default ProjectDescription;