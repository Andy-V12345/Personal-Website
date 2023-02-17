import React from "react";
import Typical from "react-typical";
import './css/Home.css';

function HomeHeader() {

    return (
        <h1>
            <Typical steps={[`Hello, I'm Andy!`, 3000]}/>
        </h1>
    )
}

export default HomeHeader;