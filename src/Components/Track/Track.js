import React from "react";
import "./Track.css";

export class Track extends React.Component {
  renderAction() {
    return <button className="Track-action">isRemoval ? '-' : '+'</button>;
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3></h3>
          <p></p>
        </div>
        <button className="Track-action"></button>
      </div>
    );
  }
}
