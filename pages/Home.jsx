import React from "react";
import Navbar from "../componets/home/Navbar";
import Section from "../componets/home/Section";
import AboutSection from "../componets/home/AboutSection";
import Projectdiv from "../componets/home/Projectdiv";
import SkillSection from "../componets/home/SkillSection";
import Footer from "../componets/home/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <AboutSection />
      <Projectdiv />
      <SkillSection />
      <Footer />
    </div>
  );
};

export default Home;
