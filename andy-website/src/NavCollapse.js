import React from "react";
import { FaBars } from 'react-icons/fa';

function NavCollapse({showNav}) {

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
            showNav()
        }
    }


    window.addEventListener('scroll', hideNavbar)


    return (
        <div className={scrolled ? 'collapsed' : 'collapsed hide'}>
            <h1>
                <FaBars onClick={showNav} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={hovered ? 'bars hover' : 'bars'} />
            </h1>
        </div>
    )
}

export default NavCollapse