import './App.css';
import React from 'react';

function ContactLink({link, children}) {
    
    const [state, setState] = React.useState(() => '')


    return (
        <div className='contact-link'>
            <span onMouseEnter={() => setState('hover')} onMouseLeave={() => setState('')} id={state} className='link-container'>
                <a href={link} target='_blank'>{children}</a>
            </span>
        </div>
    )
}

export default ContactLink