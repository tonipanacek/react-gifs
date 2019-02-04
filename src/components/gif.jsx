import React, { Component } from 'react';


class Gif extends Component {
  handleClick = () => {
    console.log(event.target)
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/200.gif`;
    return(
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
