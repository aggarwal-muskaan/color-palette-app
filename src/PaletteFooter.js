import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./styles/PaletteFooterStyle";

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      <h4 className={classes.PaletteName}>{paletteName}</h4>
      <span className={classes.emoji} aria-label={`${emoji} flag`}>
        {emoji}
      </span>
    </footer>
  );
}
export default withStyles(styles)(PaletteFooter);
