import React, { Component } from "react";
import ColorBoxes from "./ColorBoxes";
// import "./Palette.css";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyle";

class Palette extends Component {
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
    const { classes } = this.props;
    let { colors, paletteName, emoji, id } = this.props.p;
    const colorBoxes = colors[level].map((clr) => (
      <ColorBoxes
        color={clr[format]}
        name={clr.name}
        key={clr.id}
        paletteId={id}
        colorId={clr.id}
        yourUrl={`/palette/${id}/${clr.id}`}
        //same as seemoreLink={true}
        seemoreLink
      />
    ));
    return (
      <div className={classes.Palette}>
        {/* header */}
        <Navbar
          showAllColors
          level={level}
          changeLevel={this.sliderChange}
          handleChange={this.colorFormatChange}
        />

        {/* <h1>Hii Have to go long</h1> */}
        <div className={classes.colors}>
          {/* bunch of color boxes */}
          {colorBoxes}
        </div>

        {/* footer */}
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default withStyles(styles)(Palette);
