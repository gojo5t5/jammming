import React from "react";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import "./SearchBar.css";

class SearchBar extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind("search", "handleTermChange");
  }

  search(term) {
    this.props.onSearch(term);
  }

  handleTermChange(event) {
    this.search(event.target.value);
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          onChange={this.handleTermChange}
          placeholder="Enter A Song, Album, or Artist"
        />
        <button>SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
