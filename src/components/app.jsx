import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import GifList from './gif_list.jsx';
import Gif from './gif.jsx';

const GIPHY_API_KEY = 'Pvw63B6n65rbmi1fbjUayTaHwRx4QD6f';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: '2kTHFfGYZDiYgmsSrd'
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true }).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
        this.setState({
          gifs: res.data
        });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
      )
  }
}

export default App;
