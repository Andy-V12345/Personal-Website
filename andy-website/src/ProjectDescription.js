import React from "react";
import './App.css';
import BlueButton from "./BlueButton";
import {FaTimes} from "react-icons/fa";


function ProjectDescription() {
    const [state, setState] = React.useState(() => 'FaTimes')
    
    return (
        
        <div className='project-description-container'>
            <img className="project-image" src='poker.png' alt='image' />
            <div className='description-container'>
                <h3 onMouseEnter={() => setState('FaTimes hover')} onMouseLeave={() => setState('FaTimes')}><FaTimes className={state}/></h3>
                <h3>Poker Simulator</h3>
                <p>
                    Developed a fully functional text-based poker program in python that allows the user to play against 
                    the computer using the terminal. The picture to the left is what the user would see in the middle of a round of poker.
                    I'm currently updating the program to add two more computer players to the game.
                </p>
                <BlueButton link='https://github.com/Andy-V12345/Poker'>Project Repo</BlueButton>
            </div>
        </div>

    )
}

export default ProjectDescription;