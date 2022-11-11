import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

function App() {

  /* Check user screen size */
  const [isMobile, setIsMobile] = useState(false);
  window.addEventListener('resize', () => {
    window.innerWidth < 864 ? setIsMobile(true) : setIsMobile(false);
  });
  useEffect(() => {
    window.innerWidth < 864 ? setIsMobile(true) : setIsMobile(false);
  },[])

  return (
    <div className="flex flex-col">
      <Header mobile={isMobile}/>
      <Main mobile={isMobile}/>
    </div>
  );
}

export default App;