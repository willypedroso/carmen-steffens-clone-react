import { useEffect, useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Register from "./components/layout/Register";
import Suggestions from "./components/layout/Suggestions";

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
      <Suggestions/>
      <Register/>
      <Footer mobile={isMobile}/>
    </div>
  );
}

export default App;