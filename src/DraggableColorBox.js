import React from "react";
import { withStyles } from "@material-ui/styles";
import { SortableElement } from "react-sortable-hoc";
import style from "./styles/DraggableColorBoxStyle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// import classes from "*.module.css";

const DraggableColorBox = SortableElement((props) => {
  let { classes, clr, handleClick } = props;
  return (
    <div className={classes.box} style={{ backgroundColor: clr.color }}>
      <div className={classes.boxContent}>
        <span> {clr.name}</span>
        <DeleteForeverIcon
          className={classes.deleteIcon}
          onClick={handleClick}
        />
      </div>
    </div>
  );
});

export default withStyles(style)(DraggableColorBox);
