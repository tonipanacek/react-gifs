import React, { Component } from 'react';


class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // don't call render if props.id didn't change
    return nextProps.id !== this.props.id;
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/200.gif`;
    return(
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
