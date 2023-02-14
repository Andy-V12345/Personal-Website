import React from 'react'
import './App.css';
import { motion } from 'framer-motion';

function SkillBox({children, title}) {
    return (
        <motion.div initial={{opacity: 0, x: -500}} whileInView={{opacity: 1, x: 0}} transition={{type: "spring", delay: 0, duration: 0.4}}>
            <div className='skillbox'>
                <h2>{title}</h2>
                <hr></hr>
                <p>{children}</p>
            </div>
        </motion.div>
    )
}

export default SkillBox;