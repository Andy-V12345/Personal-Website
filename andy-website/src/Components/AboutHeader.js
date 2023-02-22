import Typical from "react-typical";
import useIsVisible from "./IsVisible";
import React from 'react';
import './css/App.css'

function AboutHeader() {

    const ref = React.useRef()
    const isVisible = useIsVisible(ref)

    return (
        <div className='header'>
            <h1 ref={ref} className='font-bold text-2xl sm:text-4xl lg:text-6xl'>
                {isVisible ? <Typical steps={['Who Am I?', 1500, 'Who I Am.', 3000]}/> : ''}
            </h1>
        </div>
    )
}

export default AboutHeader;