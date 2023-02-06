import React from "react";
import Typical from "react-typical";
import './App.css'
import useIsVisible from "./IsVisible";

function ContactHeader() {

    const ref = React.useRef()
    const isVisible = useIsVisible(ref)

    return (
        <h1 className='contactHeader' ref={ref}>
            Available for {` `}
            {isVisible ? <Typical className='special-color contactHeader' steps={['Summer Internship', 3000]}/> : ''}
        </h1>
    )
}

export default ContactHeader;