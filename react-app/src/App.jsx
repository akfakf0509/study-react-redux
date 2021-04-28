import React, { Component } from "react";
import "./App.css";
import AddNumberRoot from "./Components/AddNumberRoot";
import DisplayNumberRoot from "./Components/DisplayNumberRoot";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot
          onClick={(size) => {
            this.setState({ number: this.state.number + size });
          }}
        />
        <DisplayNumberRoot number={this.state.number} />
      </div>
    );
  }
}

export default App;
