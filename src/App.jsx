import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../pages/Home";
import Project from "../pages/Project";
import Achivements from "../pages/Achivements";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/achivements" element={<Achivements />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
