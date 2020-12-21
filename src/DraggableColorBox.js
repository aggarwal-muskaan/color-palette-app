import React from "react";
import { withStyles } from "@material-ui/styles";
import style from "./styles/DraggableColorBoxStyle";
// import classes from "*.module.css";

function DraggableColorBox(props) {
  let { classes, clr } = props;
  return (
    <div className={classes.box} style={{ backgroundColor: clr.color }}>
      {clr.name}
    </div>
  );
}

export default withStyles(style)(DraggableColorBox);
