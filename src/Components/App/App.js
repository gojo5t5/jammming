import React from "react";
import "./App.css";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <div className="App-playlist"></div>
        </div>
      </div>
    );
  }
}
