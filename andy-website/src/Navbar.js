import './App.css';
import logo from './logo.svg';
import React from 'react';

function Navbar() {
    const activeStates = [
        {'name': 'Home', 'isActive': true},
        {'name': 'About Me', 'isActive': false},
        {'name': 'My Skills', 'isActive': false},
        {'name': 'Contacts', 'isActive': false}
    ]
    const [actives, setActive] = React.useState(activeStates)
    const [scrolled, setScrolled] = React.useState(false)

    function changeStates(index) {
        for (let i = 0; i < activeStates.length; i++) {
            if (activeStates[i].isActive) {
                activeStates[i].isActive = false
            }
        }
        activeStates[index].isActive = true;
        setActive(activeStates)
    }

    function setFixed() {
        if (window.scrollY > 425) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }

    window.addEventListener("scroll", setFixed)


    return(
        <div className={scrolled ? 'navbar fixed' : 'navbar'}>
            <ul className='links'>
                {actives.map((active, index) => (
                    <li key={active.name}>
                        <a onClick={() => changeStates(index)} className={active.isActive ? 'active' : ''}>
                            <strong>{active.name}</strong>
                        </a>
                    </li>
                ))}
            </ul>
            <img className='logo' src={logo} alt='logo' />
        </div>
    )
}


export default Navbar;