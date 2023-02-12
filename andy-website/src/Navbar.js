import './App.css';
import logo from './logo.svg';
import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import { motion } from 'framer-motion';

function Navbar({isFixed}) {

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


    return(
        
        <motion.div
            animate={{y: 30}}
        >
            <div className={isFixed ? 'navbar fixed' : 'navbar'}>
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
       
    )
    
}


export default Navbar;