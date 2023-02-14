import './App.css';
import logo from './logo.svg';
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
                <div className='navbar fixed'>
                    <ul className='links'>
                        {headers.map((header) => (
                            <li key={header}>
                                <a href={`#${header}`} onClick={hideNav}>
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
                <div className='navbar'>
                    <ul className='links'>
                        {headers.map((header) => (
                            <li key={header}>
                                <a href={`#${header}`}>
                                    <strong>{header}</strong>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <motion.h1 initial={{color: "white"}} whileHover={{color: "black"}}>
                        <a href='https://github.com/Andy-V12345' target='_blank'><FaGithub /></a>
                    </motion.h1>
                    <motion.h1 initial={{color: "white"}} whileHover={{color: "black"}} className="linkedInIcon">
                        <a href='https://www.linkedin.com/in/andyvu2026/' target='_blank'><FaLinkedinIn /></a>
                    </motion.h1>
                </div>
            </motion.div>
        )
    }
    
}


export default Navbar;