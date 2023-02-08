import React from "react";
import { FaBars } from 'react-icons/fa';
import Navbar from "./Navbar";
import { slideInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';


function NavCollapse() {

    const slideAnimation = keyframes`${slideInDown}`

    const SlideDown = styled.div`animation: 1s ${slideAnimation}`;

    const [scrolled, setScrolled] = React.useState(() => false)
    const [hovered, setHover] = React.useState(() => false)
    const [opened, setOpen] = React.useState(false)

    function setFixed() {
        var scrolledY = window.scrollY
        if (scrolledY >= window.innerHeight) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
            setOpen(false)
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
 
    window.addEventListener("scroll", setFixed)

    return (
        <div className={scrolled ? 'collapsed' : 'collapsed hide'}>
            {opened ? <Navbar className={opened ? '' : 'nav hidden'} isFixed={true}/> : null}
            <h1>
                <FaBars onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={hovered ? 'bars hover' : 'bars'} />
            </h1>
        </div>
    )
}

export default NavCollapse