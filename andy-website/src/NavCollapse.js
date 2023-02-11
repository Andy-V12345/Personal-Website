import React from "react";
import { FaBars } from 'react-icons/fa';
import Navbar from "./Navbar";
import { slideInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from '@react-spring/web'

function NavCollapse() {

    const [scrolled, setScrolled] = React.useState(() => false)
    const [hovered, setHover] = React.useState(() => false)
    const [opened, setOpen] = React.useState(false)

    
    function hideNavbar() {
        var scrolledY = window.scrollY
        if (scrolledY >= window.innerHeight) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }

    function handleClick() {
        if (opened) {
            setOpen(false)
        }
        else {
            setOpen(true)
        }
    }

    window.addEventListener('scroll', hideNavbar)


    return (
        <div className={scrolled ? 'collapsed' : 'collapsed hide'}>
            <h1>
                <FaBars onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={hovered ? 'bars hover' : 'bars'} />
            </h1>
        </div>
    )
}

export default NavCollapse