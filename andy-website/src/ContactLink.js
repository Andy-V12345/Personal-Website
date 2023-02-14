import './App.css';
import React from 'react';
import { motion } from 'framer-motion';

function ContactLink({link, children}) {
    
    const [state, setState] = React.useState(() => '')


    return (
        <motion.div initial={{x: 200, opacity: 0}} whileInView={{x: 0, opacity: 1}} className='contact-link'>
            <span onMouseEnter={() => setState('hover')} onMouseLeave={() => setState('')} id={state} className='link-container'>
                <a href={link} target='_blank'>{children}</a>
            </span>
        </motion.div>
    )
}

export default ContactLink