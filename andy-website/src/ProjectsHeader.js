import React from "react";
import Typical from "react-typical";
import './App.css'
import useIsVisible from "./IsVisible";

function ProjectsHeader() {

    const ref = React.useRef()
    const isVisible = useIsVisible(ref)

    return (
        <h1 ref={ref}>
            {isVisible ? <Typical steps={['My Projects', 3000]}/> : ''}
        </h1>
    )
}

export default ProjectsHeader;