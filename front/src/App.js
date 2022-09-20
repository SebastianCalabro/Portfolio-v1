import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Home from "./components/Home/Home.jsx";
import Tecnologies from "./components/Tecnologies/Tecnologies.jsx"

const anchors = ["firstPage", "secondPage", "thirdPage"];

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
          <div className="section"><h3>Section 3</h3></div>
        </div>
      );
    }}
  />
);
export default App;