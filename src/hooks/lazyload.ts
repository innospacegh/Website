import React from "react"
const THRESHOLD = 0

export default function useInViewPort() {
    const nodeRef = React.useRef(null)
    const observerRef = React.useRef(null)
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(() => {
        observerRef.current = new IntersectionObserver(
            entries => {
                setIsVisible(entries[0].isIntersecting)
            },
            { threshold: THRESHOLD }
        )

        observerRef.current.observe(nodeRef.current)

        return () => {
            observerRef.current.disconnect()
        }
    }, [])

    React.useEffect(() => {
        if (isVisible) {
            observerRef.current.disconnect()
        }
    }, [isVisible])

    return [nodeRef, isVisible]
}
