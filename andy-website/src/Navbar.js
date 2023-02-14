import './App.css';
import logo from './logo.svg';
import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import { motion } from 'framer-motion';

function Navbar({isFixed, hideNav}) {

    const headers = [
        "Home",
        "About Me",
        "My Skills",
        "My Projects",
        "Contact"
    ]

    const springs = useSpring({
        from: {x: -5000},
        to: {x: 0},
    })

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
                </div>
            </motion.div>
        )
    }

    

            // <animated.div style={{
            //     ...springs
            //     }}>
            //     <div className={isFixed ? 'navbar fixed' : 'navbar'}>
            //         <ul className='links'>
            //             {headers.map((header) => (
            //                 <li key={header}>
            //                     <a href={`#${header}`}>
            //                         <strong>{header}</strong>
            //                     </a>
            //                 </li>
            //             ))}
            //         </ul>
            //         {isFixed ? null : <img className='logo' src={logo} alt='logo' />}
            //     </div>
            // </animated.div>
    
}


export default Navbar;