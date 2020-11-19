import React, { Component } from "react";
import AddUser from "./Components/AddUser";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the basic game!</h1>
        <AddUser />
      </div>
    );
  }
}

export default App;
