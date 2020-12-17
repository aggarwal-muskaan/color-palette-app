import React, { Component } from "react";
import ColorBoxes from "./ColorBoxes";

export default class SingleColorShades extends Component {
  constructor(props) {
    super(props);
    this._shades = this.collectShades(
      this.props.colorId,
      this.props.palette.colors
    );
    console.log(this._shades);
  }

  collectShades(id, colors) {
    let shades = [];
    for (let lev in colors) {
      shades = shades.concat(colors[lev].filter((c) => c.id === id));
    }
    //level 50 is white,not concat that
    return shades.slice(1);
  }

  render() {
    const shades = this._shades.map((color) => (
      <ColorBoxes
        key={color.id}
        name={color.name}
        color={color.hex}
        seemoreLink={false}
      />
    ));
    return (
      <div className="Palette">
        <h1>Single Color Palette</h1>
        <div className="Palette-colors">{shades}</div>
      </div>
    );
  }
}
