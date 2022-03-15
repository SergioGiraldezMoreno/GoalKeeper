import React, { useEffect, useState } from "react"
import LandPageHeader from "./components/LandPageHeader"
import LandPageOurMethods from "./components/LandPageOurMethods";

const App = () => {
  const [isOnTopOfPage, setIsOnTopOfPage] = useState
  (true)
  useEffect(() => {
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
    </div>
  );
}

export default App;
