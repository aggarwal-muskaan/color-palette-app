import { withStyles } from "@material-ui/styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import React, { Component } from "react";
import styles from "./styles/MiniPaletteStyle";

class MiniPalette extends Component {
  constructor(props) {
    super(props);
    this.deleteThisPalette = this.deleteThisPalette.bind(this);
  }

  deleteThisPalette(event) {
    event.stopPropagation();
    this.props.handleDelete(this.props.id);
  }
  render() {
    const { classes, paletteName, emoji, colors, handleClick } = this.props;
    const miniColorBoxes = colors.map((c) => (
      <div
        key={c.name}
        style={{ backgroundColor: c.color }}
        className={classes.miniColor}
      />
    ));
    return (
      <div className={classes.root} onClick={handleClick}>
        {/* <div className={classes.delete}> */}
        <DeleteForeverIcon
          // fontSize="large"
          onClick={this.deleteThisPalette}
          className={classes.deleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
        />
        {/* </div> */}
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}
export default withStyles(styles)(MiniPalette);
