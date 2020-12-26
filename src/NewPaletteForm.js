import React, { Component } from "react";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { arrayMove } from "react-sortable-hoc";
//?  import { ChromePicker } from "react-color";

import DraggableColorList from "./DraggableColorList";

import styles from "./styles/NewPaletteFormStyle";
import SavePaletteForm from "./SavePaletteForm";
import ColorPickerForm from "./ColorPickerForm";

class NewPaletteForm extends Component {
  //setting total color boxes to be 20
  static defaultProps = {
    maxLength: 20,
  };

  constructor(props) {
    super(props);
    this.state = {
      // userPaletteName: "",
      arr: this.props.prevPalettes[3].colors.slice(2),
      //* * structure => arr: [{ color: "", name: "" }]
      open: true,
    };
  }

  // ! here binding is not done in Constructor
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  // !add new palette & pass to parent component
  handleSavePalette = (newPalette) => {
    let paletteId = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.id = paletteId;
    newPalette.colors = this.state.arr;
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  };

  // !clearing palette
  clearPalette = () => {
    this.setState({ arr: [] });
  };

  // !random colors
  generateRandomColor = () => {
    const colors = this.props.prevPalettes.map((p) => p.colors);
    const singleArr = colors.flat();
    //concatenates sub-arrays in one

    const randIn = Math.floor(singleArr.length * Math.random());
    const randColor = singleArr[randIn];
    this.setState({ arr: [...this.state.arr, randColor] });
  };

  // ! update array of colors
  addColor = (newColor) => {
    this.setState({
      arr: [...this.state.arr, newColor],
    });
  };

  // ! delete color
  deleteColor = (clrName) => {
    const colors = this.state.arr.filter((ob) => ob.name !== clrName);
    this.setState({ arr: colors });
  };

  // !function for drag/drop and saving their indices
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ arr }) => ({
      arr: arrayMove(arr, oldIndex, newIndex),
    }));
  };

  render() {
    const { classes, maxLength, prevPalettes } = this.props;
    const {
      open,
      // currentColor,
      // currentColorName,
      // userPaletteName,
      arr,
    } = this.state;
    const paletteLimit = arr.length >= maxLength;

    return (
      <div className={classes.root}>
        <SavePaletteForm
          open={open}
          handleSavePalette={this.handleSavePalette}
          // classes={classes}
          prevPalettes={prevPalettes}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon fontSize="large" />
            </IconButton>
          </div>
          <Divider />

          <div className={classes.container}>
            <Typography variant="h3">Choose a Color</Typography>
            <div className={classes.buttons}>
              <Button
                variant="outlined"
                size="medium"
                className={classes.button}
                // color={paletteLimit ? "default" : "primary"}
                color="primary"
                disabled={paletteLimit}
                onClick={this.generateRandomColor}
              >
                Random Color
              </Button>
              <Button
                className={classes.button}
                variant="outlined"
                size="medium"
                color="secondary"
                onClick={this.clearPalette}
              >
                Clear Palette
              </Button>
            </div>
            <ColorPickerForm
              paletteLimit={paletteLimit}
              addColor={this.addColor}
              // handleColorChange={this.handleColorChange}
              colors={arr}
            />
          </div>
        </Drawer>

        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />

          <DraggableColorList
            colors={arr}
            deleteColor={this.deleteColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
