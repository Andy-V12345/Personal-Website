import React from "react"

function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = React.useState(false)

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => 
            setIntersecting(entry.isIntersecting)
        )

        observer.observe(ref.current)
        return () => {
            observer.disconnect()
        }

    }, [ref])

    return isIntersecting

}

export default useIsVisible