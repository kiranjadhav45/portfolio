import { useState } from "react";
import "./App.css";
import Footer from "../componets/home/Footer";
import Navbar from "../componets/home/Navbar";
import Section from "../componets/home/Section";
import AboutSection from "../componets/home/AboutSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Navbar />
        <Section />
        <AboutSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
