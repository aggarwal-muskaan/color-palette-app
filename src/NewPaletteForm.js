import React, { Component } from "react";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { SketchPicker } from "react-color";
// import { ChromePicker } from "react-color";

import DraggableColorBox from "./DraggableColorBox";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

import styles from "./styles/NewPaletteFormStyle";

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "#857c21",
      currentColorName: "",
      userPaletteName: "",
      arr: [
        // { color: "", name: "" }
      ],

      open: false,
    };
  }
  componentDidMount() {
    //validating palette names
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.prevPalettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );

    //validating color names
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.state.arr.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );

    //validating colors
    ValidatorForm.addValidationRule(
      "isColorValueUnique",
      (value) =>
        this.state.arr.every(({ color }) => color !== this.state.currentColor)
      // this.state.arr.every(({ color }) => color !== value.______)
    );
  }
  //here binding is not done in Constructor
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleNameChange = (event) => {
    // this.setState({ currentColorName: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  };

  //sync colorpicker with "add button"
  handleColorChange = (ob) => {
    this.setState({ currentColor: ob.hex });
  };

  //add new palette & pass to parent component
  handleSavePalette = () => {
    let paletteName = this.state.userPaletteName.trim();
    let paletteId = paletteName.toLowerCase().replace(/ /g, "-");

    const newPalette = {
      paletteName: paletteName,
      colors: this.state.arr,
      id: paletteId,
      emoji: "🎗",
    };

    this.props.savePalette(newPalette);
    this.props.history.push("/");
  };

  // update array of colors
  addColor = () => {
    const newColor = {
      name: this.state.currentColorName,
      color: this.state.currentColor,
    };
    this.setState({
      arr: [...this.state.arr, newColor],
      currentColorName: "",
      currentColor: "",
    });
  };
  render() {
    const { classes } = this.props;
    const {
      open,
      currentColor,
      currentColorName,
      userPaletteName,
      arr,
    } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create New Palette
            </Typography>
            <Button
              variant="contained"
              color="default"
              startIcon={<ArrowBackIcon />}
            >
              Go Back
            </Button>
            <ValidatorForm onSubmit={this.handleSavePalette}>
              <TextValidator
                label="PALETTE NAME"
                name="userPaletteName"
                value={userPaletteName}
                onChange={this.handleNameChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Palette name is required.",
                  "Name already taken.",
                ]}
              />
              <Button
                variant="contained"
                color="secondary"
                startIcon={<FavoriteIcon />}
                type="submit"
              >
                Save Palette
              </Button>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
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
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h3">Choose a Color</Typography>
          <div>
            <Button variant="outlined" size="medium" color="primary">
              Random Color
            </Button>
            <Button variant="outlined" size="medium" color="secondary">
              Clear Palette
            </Button>
          </div>
          <SketchPicker
            color={currentColor}
            onChange={this.handleColorChange}
          />
          {/* <ChromePicker
            color={currentColor}
            onChangeComplete={this.handleColorChange}
          /> */}
          <ValidatorForm onSubmit={this.addColor} ref="form">
            <TextValidator
              name="currentColorName"
              value={currentColorName}
              onChange={this.handleNameChange}
              validators={[
                "required",
                "isColorNameUnique",
                "isColorValueUnique",
              ]}
              errorMessages={[
                "Color name is required.",
                "Color name must be unique.",
                "Color already used!",
              ]}
            />
            <Button
              variant="contained"
              style={{ backgroundColor: currentColor }}
              size="large"
              color="secondary"
              type="submit"
            >
              ADD COLOR
            </Button>
          </ValidatorForm>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {arr.map((clr) => (
            <DraggableColorBox clr={clr} />
          ))}
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
