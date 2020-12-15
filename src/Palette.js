import React, { Component } from "react";
import ColorBoxes from "./ColorBoxes";
import "./Palette.css";
import Navbar from "./Navbar";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.sliderChange = this.sliderChange.bind(this);
    this.colorFormatChange = this.colorFormatChange.bind(this);
  }

  colorFormatChange(val) {
    this.setState({ format: val });
  }

  sliderChange(level) {
    this.setState({ level });
  }

  render() {
    // console.log(this.props.palette.colors);
    let { level, format } = this.state;
    let { colors } = this.props.p;
    const colorBoxes = colors[level].map((clr) => (
      <ColorBoxes color={clr[format]} name={clr.name} />
    ));
    return (
      <div className="Palette">
        {/* <header></header> */}
        <Navbar
          level={level}
          changeLevel={this.sliderChange}
          handleChange={this.colorFormatChange}
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
