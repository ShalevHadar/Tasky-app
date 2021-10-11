import React, { Component } from "react";

import { render } from "react-dom";

class App extends Component {
  constructor() {
    this.state = {
      currentDateTime: Date().toLocaleString(),
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.currentDateTime}</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
