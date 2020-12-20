import React from "react";
import { withStyles } from "@material-ui/styles";
// import classes from "*.module.css";

const style = {
  box: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
  },
};

function DraggableColorBox(props) {
  let { classes, clr } = props;
  return (
    <div className={classes.box} style={{ backgroundColor: clr.color }}>
      {clr.name}
    </div>
  );
}

export default withStyles(style)(DraggableColorBox);
