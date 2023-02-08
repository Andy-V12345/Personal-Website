import React from "react";
import Typical from "react-typical";
import './App.css'
import useIsVisible from "./IsVisible";

function SkillsHeader() {

    const ref = React.useRef()
    const isVisible = useIsVisible(ref)

    return (
        <h1 ref={ref}>
            {isVisible ? <Typical steps={['My Skills', 3000]}/> : <Typical steps={['', 3000]}/>}
        </h1>
    )
}

export default SkillsHeader;