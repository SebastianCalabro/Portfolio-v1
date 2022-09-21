import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Home from "./components/Home/Home.jsx";
import Tecnologies from "./components/Tecnologies/Tecnologies.jsx"
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const anchors = ["Home", "Tecnologies", "Projects", "Contact"];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["","","" ]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <Home className="section"/>
          <Tecnologies className="section"/>
          <Projects className="section"/>
          <Contact className="section"/>
        </div>
      );
    }}
  />
);
export default App;