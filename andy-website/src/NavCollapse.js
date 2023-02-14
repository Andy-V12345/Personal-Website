import React from "react";
import { FaBars } from 'react-icons/fa';

function NavCollapse({showNav, hideNav, isShown}) {

    const [scrolled, setScrolled] = React.useState(() => false)
    const [hovered, setHover] = React.useState(() => false)
    const [opened, setOpen] = React.useState(false)

    
    function hideCollapse() {
        var scrolledY = window.scrollY
        if (scrolledY >= window.innerHeight) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
            hideNav()
        }
    }


    window.addEventListener('scroll', hideCollapse)


    return (
        <div className={scrolled ? 'collapsed' : 'collapsed hide'}>
            <h1>
                <FaBars onClick={isShown ? hideNav : showNav} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={hovered ? 'bars hover' : 'bars'} />
            </h1>
        </div>
    )
}

export default NavCollapse