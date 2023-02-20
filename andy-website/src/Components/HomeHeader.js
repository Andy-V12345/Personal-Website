import React from "react";
import Typical from "react-typical";
import './css/Home.css';

function HomeHeader() {

    return (
        <h1 className='font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
            <Typical steps={[`Hello, I'm Andy!`, 3000]}/>
        </h1>
    )
}

export default HomeHeader;