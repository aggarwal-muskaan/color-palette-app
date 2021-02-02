import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import ColorBoxes from "./ColorBoxes";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import styles from "./styles/PaletteStyle";

class SingleColorShades extends Component {
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
    const { classes } = this.props;
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
      <div className={classes.Palette}>
        {/* <h1>Single Color Palette</h1> */}
        <Navbar handleChange={this.colorFormatChange} showAllColors={false} />

        <div className={classes.colors}>
          {shades}
          <div className={classes.goBack}>
            <Link className="go-back-button" to={`/palette/${id}`}>
              Go Back
            </Link>
          </div>
        </div>

        {/* footer */}
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default withStyles(styles)(SingleColorShades);
