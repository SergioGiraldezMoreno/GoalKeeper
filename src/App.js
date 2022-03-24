import React, { useLayoutEffect, useState } from "react"
import LandPageHeader from "./components/LandPageHeader"
import LandPageOurMethods from "./components/LandPageOurMethods";
import LandPageOurTeam from "./components/LandPageOurTeam";


const App = () => {
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
      <div className="App">
        <LandPageHeader isExpanded={isOnTopOfPage} />
        <LandPageOurMethods />
        <LandPageOurTeam />
      </div>
  );
}

export default App;
