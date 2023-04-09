import { useState } from "react";
import "./App.css";
import Footer from "../componets/home/Footer";
import Navbar from "../componets/home/Navbar";
import Section from "../componets/home/Section";
import AboutSection from "../componets/home/AboutSection";
import SkillSection from "../componets/home/SkillSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Navbar />
        <Section />
        <AboutSection />
        <SkillSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
