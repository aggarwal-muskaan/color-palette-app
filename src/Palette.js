import React, { Component } from "react";
import "./Palette.css";
import ColorBoxes from "./ColorBoxes";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

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
        <Slider
          min={100}
          max={900}
          defaultValue={level}
          step={50}
          onChange={this.sliderChange}
        />

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
