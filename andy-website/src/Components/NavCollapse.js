import React from "react";
import { FaBars } from 'react-icons/fa';
import './css/App.css';
import './css/NavCollapse.css'

function NavCollapse({showNav, hideNav, isNavVisible, isPhoneNav}) {

    const [scrolled, setScrolled] = React.useState(() => false)

    
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

    const showPhoneNav = () => {
        setScrolled(false)
        showNav()
    }

    React.useEffect(() => {
        if (isPhoneNav) {
            if (isNavVisible) {
                setScrolled(false)
            }
            else {
                setScrolled(true)
            }
        }
    }, [isNavVisible])


    window.addEventListener('scroll', hideCollapse)


    return (
        <div className={scrolled ? 'top-5 sm:top-7 md:top-7 lg:top-7 collapsed' : 'collapsed hide'}>
            <h1 className="sm:text-2xl lg:text-3xl">
                {isPhoneNav ? 
                <FaBars onClick={showPhoneNav} className="bars"></FaBars>
                :
                <FaBars onClick={isNavVisible ? hideNav : showNav} className="bars" />
                }
            </h1>
        </div>
    )
}

export default NavCollapse