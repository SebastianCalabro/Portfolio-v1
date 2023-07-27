import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Home from "./components/Home/Home.jsx";
import Technologies from "./components/Technologies/Technologies.jsx"
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About.jsx";

const anchors = ["Home","About", "Technologies", "Projects", "Contact"];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["","","" ]}
    
    render={({ state, fullpageApi }) => {

      return (
        <div>
          <Home className="section"/>
          <About className="section"/>
          <Technologies className="section"/>
          <Projects className="section"/>
          <Contact className="section"/>
        </div>
      );
    }}
  />
);
export default App;