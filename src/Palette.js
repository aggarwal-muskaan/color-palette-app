import React, { Component } from "react";
import "./Palette.css";
import ColorBoxes from "./ColorBoxes";

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((clr) => (
      <ColorBoxes color={clr.color} name={clr.name} />
    ));
    return (
      <div className="Palette">
        {/* <header></header> */}

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
