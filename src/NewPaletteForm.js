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

const drawerWidth = 400;
const navHeight = 64;

const styles = (theme) => ({
  root: {
    display: "flex",
    height: "100vh",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    height: `calc(100vh-${navHeight}px)`,
    // height: "100%",
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "#857c21",
      currentColorName: "",
      arr: [
        // { color: "", name: "" }
      ],

      open: false,
    };
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.state.arr.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.state.arr.every(({ color }) => color !== this.state.currentColor)
    );
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleNameChange = (event) => {
    this.setState({ currentColorName: event.target.value });
  };

  //sync colorpicker with "add button"
  handleColorChange = (ob) => {
    this.setState({ currentColor: ob.hex });
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
    const { open, currentColor, currentColorName, arr } = this.state;

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
            <Button
              variant="contained"
              color="secondary"
              startIcon={<FavoriteIcon />}
            >
              Save Palette
            </Button>
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
              value={currentColorName}
              onChange={this.handleNameChange}
              validators={["required", "isColorNameUnique", "isColorUnique"]}
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
