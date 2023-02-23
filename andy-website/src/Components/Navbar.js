import './css/App.css';
import './css/Navbar.css';
import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';


function Navbar({isFixed, hideNav, isPhoneNav}) {

    const headers = [
        "Home",
        "About Me",
        "My Skills",
        "My Projects",
        "Contact"
    ]

    if (isFixed) {
        if (isPhoneNav) {
            return (
                <motion.div 
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: 'fit-content'}}
                    className="phoneNav"
                >
                    <ul>
                        {headers.map((header) => (
                            <li key={header}>
                                <a href={`#${header}`} onClick={hideNav}>
                                    <strong>{header}</strong>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <h1><FaTimes onClick={hideNav} className="FaTime"></FaTimes></h1>
                </motion.div>
            )
        }
        else {
            return(
                
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ease: 'easeInOut', duration: 0.4}}
                >
                    <div className='navbar fixed min-w-full'>
                        <ul className='links md:px-4 md:py-5 md:rounded-lg'>
                            {headers.map((header) => (
                                <li className='mx-0 my-0' key={header}>
                                    <a className='md:px-5 md:text-sm lg:text-base xl:text-xl lg:px-6' href={`#${header}`} onClick={hideNav}>
                                        <strong>{header}</strong>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            )
        }
    } else {
        return(

            <motion.div
                initial={{opacity: 0, y: -40}}
                animate={{y: 30, opacity: 1}}
                transition={{ease: 'easeInOut', duration: 0.4}}
            >
                <div className='navbar min-w-full'>
                    <ul className='links md:px-4 md:py-5 md:rounded-lg'>
                        {headers.map((header) => (
                            <li className='mx-0 my-0' key={header}>
                                <a className='md:px-5 md:text-sm lg:text-base xl:text-xl lg:px-6' href={`#${header}`}>
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