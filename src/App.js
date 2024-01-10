import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight)

  useEffect(() => {
    const resizeRation = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };
    window.addEventListener("resize", resizeRation)
    return () => {
      window.removeEventListener("resize", resizeRation);
    };
  }, [ratio])

  return /*ratio < 2 ? */(
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Experience />
      <Contact />
      <Toaster />
      <Footer />
    </>
  )
  // : (<em id="customMessage">Please Change the Screen Ratio to View!</em>)
}

export default App;
