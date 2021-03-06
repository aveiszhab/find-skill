import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Skills from "./Skills";
import AddSkills from "./AddSkills";

import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Skills} />
        <Route exact path="/add-skills" component={AddSkills} />
      </Switch>
    </div>
  );
}

export default App;
