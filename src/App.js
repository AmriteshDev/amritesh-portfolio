import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <Experience />
      <Contact />
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
