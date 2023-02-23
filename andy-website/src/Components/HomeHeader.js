import React from "react";
import Typical from "react-typical";
import './css/Home.css';

function HomeHeader() {

    return (
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
            <Typical steps={[`Hello, I'm Andy!`, 3000]}/>
        </h1>
    )
}

export default HomeHeader;