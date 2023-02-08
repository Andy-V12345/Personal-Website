import './App.css';
import logo from './logo.svg';
import React from 'react';

function Navbar({isFixed}) {

    const headers = [
        "Home",
        "About Me",
        "My Skills",
        "My Projects",
        "Contact"
    ]


    return(
        <div className={isFixed ? 'navbar fixed' : 'navbar'}>
            <ul className='links'>
                {headers.map((header) => (
                    <li key={header}>
                        <a href={`#${header}`}>
                            <strong>{header}</strong>
                        </a>
                    </li>
                ))}
            </ul>
            {isFixed ? null : <img className='logo' src={logo} alt='logo' />}
        </div>
    )
    
}


export default Navbar;