import React from "react";
import Typical from "react-typical";
import './css/App.css';
import './css/Contacts.css'
import useIsVisible from "./IsVisible";

function ContactHeader() {

    const ref = React.useRef()
    const isVisible = useIsVisible(ref)

    return (
        <h1 className='contactHeader w-full font-bold text-xl md:w-1/2 sm:text-3xl xl:text-4xl' ref={ref}>
            {"Available for "}
            {isVisible ? <Typical className='special-color contactHeader' steps={['Summer Internships', 3000]}/> : ''}
        </h1>
    )
}

export default ContactHeader;