import React, { Component } from "react";
import ColorBoxes from "./ColorBoxes";
import "./Palette.css";
import Navbar from "./Navbar";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.sliderChange = this.sliderChange.bind(this);
  }

  sliderChange(level) {
    this.setState({ level });
  }

  render() {
    // console.log(this.props.palette.colors);
    let { level } = this.state;
    let { colors } = this.props.p;
    const colorBoxes = colors[level].map((clr) => (
      <ColorBoxes color={clr.hex} name={clr.name} />
    ));
    return (
      <div className="Palette">
        {/* <header></header> */}
        <Navbar level={level} changeLevel={this.sliderChange} />

        {/* <h1>Hii Have to go long</h1> */}
        <div className="Palette-colors">
          {/* bunch of color boxes */}
          {colorBoxes}
        </div>
        {/* <footer></footer> */}
      </div>
    );
  }
}
