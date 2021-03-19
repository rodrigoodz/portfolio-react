import React, { useState } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Description from "./components/Description/Description";
import DropdownMenu from "./components/Header/DropdownMenu";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Tools from "./components/Tools/Tools";
import Footer from "./components/Footer/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex flex-col h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-green-800  ">
        <Header toggle={toggle} isOpen={isOpen} />
        <DropdownMenu isOpen={isOpen} toggle={toggle} />
        <Description />
      </div>
      <AboutMe />
      <Skills />
      <Tools />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
