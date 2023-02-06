import React, { useState } from "react";
import './App.css';
import Typical from "react-typical";
import useIsVisible from "./IsVisible";

function AboutHeader() {

    const ref = React.useRef()
    const isVisible = useIsVisible(ref)

    return (
        <div className='header'>
            <h1 ref={ref}>
                {isVisible ? <Typical steps={['Who Am I?', 1500, 'Who I Am.', 3000]}/> : ''}
            </h1>
        </div>
    )
}

export default AboutHeader;