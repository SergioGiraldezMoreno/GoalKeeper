import React, { useLayoutEffect, useState } from "react"
import LandPageHeader from "./components/LandPageHeader"
import LandPageOurMethods from "./components/LandPageOurMethods";
import LandPageOurTeam from "./components/LandPageOurTeam";
import { AuthenticationProvider } from "./firebase/authentication";



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
    <AuthenticationProvider>
      <div className="App">
        <LandPageHeader isExpanded={isOnTopOfPage} />
        <LandPageOurMethods />
        <LandPageOurTeam />
      </div>
    </AuthenticationProvider>
  );
}

export default App;
