import React from "react";

export class Playlist extends React.Component {
  render() {
    return (
      <div class="Playlist">
        <input value="New Playlist" />

        <button class="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
