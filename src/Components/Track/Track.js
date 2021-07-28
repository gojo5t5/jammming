import React from "react";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import "./Track.css";

class Track extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind("addTrack", "removeTrack");
  }

  renderAction() {
    if (this.props.onAdd) {
      return (
        <button className="Track-action" onClick={this.addTrack}>
          +
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    }
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
