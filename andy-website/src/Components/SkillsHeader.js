import React from "react";
import Typical from "react-typical";
import './css/App.css';
import useIsVisible from "./IsVisible";

function SkillsHeader() {

    const ref = React.useRef()

    return (
        <h1 ref={ref}>
            <Typical steps={['My Skills', 3000]}/>
        </h1>
    )
}

export default SkillsHeader;