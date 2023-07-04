import React from "react";
import Typical from "react-typical";
import './css/App.css';

function SkillsHeader() {

    return (
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl">
            <Typical steps={['My Skills', 3000]}/>
        </h1>
    )
}

export default SkillsHeader;