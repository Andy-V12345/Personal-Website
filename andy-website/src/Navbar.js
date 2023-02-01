import './App.css';
import logo from './logo.svg';
import React from 'react';

function Navbar() {
    const activeStates = [
        {'name': 'Home', 'isActive': true},
        {'name': 'About Me', 'isActive': false},
        {'name': 'My Skills', 'isActive': false},
        {'name': 'My Projects', 'isActive': false},
        {'name': 'Contacts', 'isActive': false}
    ]


    const [actives, setActive] = React.useState(activeStates)
    const [scrolled, setScrolled] = React.useState(false)

    function changeStates(index) {
        for (let i = 0; i < activeStates.length; i++) {
            if (i != index) {
                activeStates[i].isActive = false
            }
            else {
                activeStates[i].isActive = true
            }
        }
        setActive(activeStates)
    }

    function setFixed() {
        var scrolledY = window.scrollY
        if (scrolledY > 425) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }

        var sectionIndex = Math.floor(scrolledY / window.innerHeight)
        changeStates(sectionIndex)

    }

    window.addEventListener("scroll", setFixed)


    return(
        <div className={scrolled ? 'navbar fixed' : 'navbar'}>
            <ul className='links'>
                {actives.map((active, index) => (
                    <li key={active.name}>
                        <a href={`#${active.name}`} onClick={() => changeStates(index)} className={active.isActive ? 'active' : ''}>
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