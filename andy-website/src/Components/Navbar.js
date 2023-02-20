import './css/App.css';
import './css/Navbar.css';
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';


function Navbar({isFixed, hideNav}) {

    const headers = [
        "Home",
        "About Me",
        "My Skills",
        "My Projects",
        "Contact"
    ]

    if (isFixed) {
        return(
            
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ease: 'easeInOut', duration: 0.4}}
            >
                <div className='navbar fixed min-w-full'>
                    <ul className='links px-3 py-3 sm:px-4 sm:py-5'>
                        {headers.map((header) => (
                            <li key={header}>
                                <a className='px-3 py-3 sm:p-5' href={`#${header}`} onClick={hideNav}>
                                    <strong>{header}</strong>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        )
    } else {
        return(

            <motion.div
                initial={{opacity: 0, y: -40}}
                animate={{y: 30, opacity: 1}}
                transition={{ease: 'easeInOut', duration: 0.4}}
            >
                <div className='navbar min-w-full'>
                    <ul className='links px-3 py-3 sm:px-4 sm:py-5'>
                        {headers.map((header) => (
                            <li key={header}>
                                <a className='px-3 py-3 sm:p-5' href={`#${header}`}>
                                    <strong>{header}</strong>
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* <motion.h1 initial={{color: "white"}} whileHover={{color: "black"}}>
                        <a href='https://github.com/Andy-V12345' target='_blank'><FaGithub /></a>
                    </motion.h1>
                    <motion.h1 initial={{color: "white"}} whileHover={{color: "black"}} className="linkedInIcon">
                        <a href='https://www.linkedin.com/in/andyvu2026/' target='_blank'><FaLinkedinIn /></a>
                    </motion.h1> */}
                </div>
            </motion.div>
        )
    }
    
}


export default Navbar;