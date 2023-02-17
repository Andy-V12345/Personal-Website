import React from "react";
import Typical from "react-typical";
import './css/App.css';

function SkillsHeader() {

    return (
        <h1>
            <Typical steps={['My Skills', 3000]}/>
        </h1>
    )
}

export default SkillsHeader;