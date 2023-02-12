import React from "react";
import Typical from "react-typical";
import './App.css'
import useIsVisible from "./IsVisible";

function HomeHeader() {

    const ref = React.useRef()
    const isVisible = useIsVisible(ref)

    return (
        <h1 ref={ref}>
            {/* {isVisible ? <Typical steps={[`Hello, I'm Andy!`, 3000]}/> : <Typical steps={['', 3000]}/>} */}
            <Typical steps={[`Hello, I'm Andy!`, 3000]}/>
        </h1>
    )
}

export default HomeHeader;