import React, { Component } from "react";
import ColorBoxes from "./ColorBoxes";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default class SingleColorShades extends Component {
  constructor(props) {
    super(props);
    this._shades = this.collectShades(
      this.props.colorId,
      this.props.palette.colors
    );
    // console.log(this._shades);
    this.state = { format: "hex" };
    this.colorFormatChange = this.colorFormatChange.bind(this);
  }

  //changes format of color
  colorFormatChange(val) {
    this.setState({ format: val });
  }

  //gathers all shades of single color in an array from diff levels
  collectShades(id, colors) {
    let shades = [];
    for (let lev in colors) {
      shades = shades.concat(colors[lev].filter((c) => c.id === id));
    }
    //level 50 is white,donot concat that
    return shades.slice(1);
  }

  render() {
    const { paletteName, emoji, id } = this.props.palette;
    let { format } = this.state;
    const shades = this._shades.map((color) => (
      <ColorBoxes
        key={color.name}
        name={color.name}
        color={color[format]}
        seemoreLink={false}
      />
    ));
    return (
      <div className="SingleColorShades Palette">
        {/* <h1>Single Color Palette</h1> */}
        <Navbar handleChange={this.colorFormatChange} showAllColors={false} />

        <div className="Palette-colors">
          {shades}
          <div className="go-back ColorBoxes">
            <Link className="go-back-button" to={`/palette/${id}`}>
              Go Back
            </Link>
          </div>
        </div>

        {/* footer */}
        <footer className="Palette-footer">
          <h4 className="palette-name">{paletteName}</h4>
          <span className="emoji" aria-label={`${emoji} flag`}>
            {emoji}
          </span>
        </footer>
      </div>
    );
  }
}
