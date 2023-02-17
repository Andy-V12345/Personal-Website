import React from "react";
import './css/ProjectDescriptionBackground.css';

function ProjectDescriptionBackground({visible, close}) {
    return (
        <div onClick={close} className={visible ? 'background-container' : 'hidden'}></div>
    )
}

export default ProjectDescriptionBackground;