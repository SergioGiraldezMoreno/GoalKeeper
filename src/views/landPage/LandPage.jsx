import React, { useLayoutEffect, useState } from "react"
import LandPageHeader from "./components/LandPageHeader"
import LandPageOurMethods from "./components/LandPageOurMethods";
import LandPageOurTeam from "./components/LandPageOurTeam"; 


const LandPage = () => {
    const [isOnTopOfPage, setIsOnTopOfPage] = useState(true)

    useLayoutEffect(() => {
        const onScrollEvent = event => {
        setIsOnTopOfPage(window.pageYOffset === 0)
        }
        window.addEventListener('scroll', onScrollEvent)

        return () => {
        window.removeEventListener('scroll', onScrollEvent)
        }
    }, [])

    
    return (
        <>         
        <LandPageHeader isExpanded={isOnTopOfPage} />
        <LandPageOurMethods />
        <LandPageOurTeam />
        </>
    )
}

export default LandPage