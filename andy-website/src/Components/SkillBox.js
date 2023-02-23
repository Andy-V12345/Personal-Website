import React from 'react'
import './css/App.css';
import { motion } from 'framer-motion';
import './css/SkillBox.css';

function SkillBox({children, title}) {
    return (
        <div className='skillbox w-4/5 py-4 px-3 space-y-2 lg:space-y-3 md:py-5 md:px-5 md:w-3/5 xl:w-1/2'>
            <h2 className='font-bold text-sm md:text-lg xl:text-xl'>{title}</h2>
            <hr></hr>
            <p className='text-xs md:text-base xl:text-lg'>{children}</p>
        </div>
    )
}

export default SkillBox;