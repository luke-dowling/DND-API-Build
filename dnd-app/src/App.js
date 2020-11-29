import React, { Component } from "react";
import Spells from "./Components/Spells";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Display DND data</h1>
        <Spells />
      </div>
    );
  }
}

export default App;
