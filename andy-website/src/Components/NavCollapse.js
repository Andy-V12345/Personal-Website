import React from "react";
import { FaBars } from 'react-icons/fa';
import './css/App.css';
import './css/NavCollapse.css'
import { motion } from 'framer-motion';

function NavCollapse({hideNavCollapse, showNav, hideNav, isNavVisible, isPhoneNav}) {
   

    const showPhoneNav = () => {
        hideNavCollapse()
        showNav()
    }


    return (
        <motion.div initial={{opacity: 0, left: -100}} animate={{opacity: 1, left: 25}} transition={{type: 'spring', duration: 0.4, delay: 0}} className='top-2 sm:top-7 md:top-7 lg:top-7 collapsed'>
            <h1 className="text-lg sm:text-2xl lg:text-3xl">
                {isPhoneNav ? 
                <FaBars onClick={showPhoneNav} className="bars"></FaBars>
                :
                <FaBars onClick={isNavVisible ? hideNav : showNav} className="bars" />
                }
            </h1>
        </motion.div>
    )
}

export default NavCollapse