import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar />
        </div>
        <div className="right-scene">
          <GifList />
        </div>
      </div>
      )
  }
}

export default App;
