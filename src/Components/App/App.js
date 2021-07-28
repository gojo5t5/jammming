import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";
import "./App.css";
import { TrackList } from "../TrackList/TrackList";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "n", artist: "a", album: "a", id: 1 },
        { name: "m", artist: "b", album: "b", id: 2 },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist"></div>
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist />
        </div>
      </div>
    );
  }
}
