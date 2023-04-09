import { useState } from "react";
import "./App.css";
import Footer from "../componets/home/Footer";
import Navbar from "../componets/home/Navbar";
import Section from "../componets/home/Section";
import AboutSection from "../componets/home/AboutSection";
import SkillSection from "../componets/home/SkillSection";
import ProjectMiniSection from "../componets/ProjectMiniSection";
import Projectdiv from "../componets/home/Projectdiv";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Navbar />
        <Section />
        <AboutSection />
        <Projectdiv />
        {/* <ProjectMiniSection /> */}
        <SkillSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
