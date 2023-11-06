import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
   
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    
    const handleResizeWidth = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

    useEffect(() => {
        console.log('resize called useEffect')
        window.addEventListener('resize', handleResizeWidth)
    
        // return () => {
        //     console.log('resize called remove event')
        //     window.removeEventListener('resize',handleResizeWidth)
        // }
    }, [])

    return {  windowSize }
}

export default useWindowSize