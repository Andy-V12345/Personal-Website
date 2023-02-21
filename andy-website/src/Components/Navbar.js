import './css/App.css';
import './css/Navbar.css';
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaTimes } from 'react-icons/fa';


function Navbar({isFixed, hideNav, isPhoneNav}) {

    const headers = [
        "Home",
        "About Me",
        "My Skills",
        "My Projects",
        "Contact"
    ]

    React.useEffect(() => {
        console.log(isPhoneNav)
    }, [isPhoneNav])

    if (isFixed) {
        if (isPhoneNav) {
            return (
                <motion.div 
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: '50vh'}}
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
                        <ul className='links px-3 py-3 sm:px-4 sm:py-5'>
                            {headers.map((header) => (
                                <li key={header}>
                                    <a className='text-xs px-3 py-7 sm:text-sm sm:px-5 md:text-base lg:text-lg' href={`#${header}`} onClick={hideNav}>
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
                    <ul className='links px-3 py-3 sm:px-4 sm:py-5'>
                        {headers.map((header) => (
                            <li key={header}>
                                <a className='text-xs px-3 py-7 sm:text-sm sm:px-5 md:text-base lg:text-lg' href={`#${header}`}>
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