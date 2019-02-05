import React, { Component } from 'react';


class SearchBar extends Component {
  handleSearch = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return(
      <input type="text" className="form-control form-search"
      onChange={this.handleSearch} defaultValue="bon" />
    );
  }
}

export default SearchBar;
