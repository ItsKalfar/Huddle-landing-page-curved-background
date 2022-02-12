import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
