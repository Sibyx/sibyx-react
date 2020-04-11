import React from "react";
import './Portrait.css';

class Portrait extends React.Component {
  smile = require('../images/portrait-smile.jpeg');
  casual = require('../images/portrait.jpeg');

  state = {
    img: this.casual,
    alt: 'Jakub Dubec'
  };

  render() {
    return (
      <img
        src={this.state.img}
        alt={this.state.alt}
        className={'Portrait'}
        onMouseEnter={() => {
          this.setState({
            img: this.smile,
            alt: "Smiling Jakub Dubec"
          })
        }}

        onMouseOut={() => {
          this.setState({
            img: this.casual,
            alt: "Jakub Dubec"
          })
        }}
      />
    )
  }
}

export default Portrait;