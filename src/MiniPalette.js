import { withStyles } from "@material-ui/styles";
import React from "react";
import styles from "./styles/MiniPaletteStyle";

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map((c) => (
    <div
      key={c.name}
      style={{ backgroundColor: c.color }}
      className={classes.miniColor}
    />
  ));
  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
