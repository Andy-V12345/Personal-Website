import React from 'react'
import './css/App.css';
import { motion } from 'framer-motion';
import './css/SkillBox.css';

function SkillBox({children, title}) {
    return (
        <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{type: "spring", delay: 0, duration: 0.4}} className='skillbox w-3/5 py-6 px-6 space-y-2 lg:space-y-3 sm:py-5 sm:px-5 sm:w-3/5 xl:w-1/2'>
            <h2 className='font-bold text-base  md:text-lg xl:text-xl'>{title}</h2>
            <hr></hr>
            <p className='text-sm md:text-base xl:text-lg'>{children}</p>
        </motion.div>
    )
}

export default SkillBox;