import React from "react";

//Importing Sections
import Topbanner from "./Sections/Topbanner/topbanner";
import Objectives from "./Sections/Objectives/objectives";
import Projects from "./Sections/project/projects";
import Skills from "./Sections/Skills/Skills";
import Educaton from "./Sections/Education/educaton";
import Contact from "./Sections/Contact/contact";
import Footer from "./Sections/footer/footer";

function App() {
  return (
    <div className="App">
   
    <Topbanner/>
    <Objectives/>
    <Projects/>
    <Skills/>
    <Educaton/>
    <Contact/>
    <Footer/>

    </div>
  );
}

export default App;
