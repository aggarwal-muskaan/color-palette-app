import React, { Component } from "react";
import classNames from "classnames";
import style from "./styles/SavePaletteFormStyle";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { Link } from "react-router-dom";
// import { ChromePicker } from "react-color";

import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

class SavePaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPaletteName: "",
    };
  }

  componentDidMount() {
    //validating palette names
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.prevPalettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleNameChange = (event) => {
    // this.setState({ currentColorName: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes, open, handleSavePalette, handleDrawerOpen } = this.props;
    const { userPaletteName } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open} className="Toolbar">
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create New Palette
            </Typography>
          </Toolbar>

          <Link to="/">
            <Button
              variant="contained"
              color="default"
              startIcon={<ArrowBackIcon />}
            >
              Go Back
            </Button>
          </Link>
          <ValidatorForm onSubmit={() => handleSavePalette(userPaletteName)}>
            <TextValidator
              label="Palette Name"
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
        </AppBar>
      </div>
    );
  }
}
export default withStyles(style, { withTheme: true })(SavePaletteForm);
