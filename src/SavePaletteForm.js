import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import PaletteIcon from "@material-ui/icons/Palette";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
<<<<<<< HEAD

import { Link } from "react-router-dom";
import DialogSavePalette from "./DialogSavePalette";
// import { ChromePicker } from "react-color";

=======
import { Link } from "react-router-dom";

import DialogSavePalette from "./DialogSavePalette";
import style from "./styles/SavePaletteFormStyle";

>>>>>>> branch-1
class SavePaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
    };
  }

  openModal = () => {
    this.setState({ showDialog: true });
  };

  closeModal = () => {
    this.setState({ showDialog: false });
  };
  render() {
    const {
      classes,
      open,
      handleSavePalette,
      handleDrawerOpen,
      prevPalettes,
    } = this.props;
    const { showDialog } = this.state;
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
              <PaletteIcon fontSize="large" />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.navbarText}
            >
              Create New Palette
            </Typography>
          </Toolbar>

<<<<<<< HEAD
          <Link to="/">
            <Button
              variant="contained"
              color="default"
              startIcon={<ArrowBackIcon />}
            >
              Go Back
            </Button>
          </Link>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<FavoriteIcon />}
            onClick={this.openModal}
          >
            Save Palette
          </Button>
=======
          <div className={classes.btns}>
            <Link to="/">
              <Button
                variant="contained"
                color="default"
                startIcon={<ArrowBackIcon />}
              >
                Go Back
              </Button>
            </Link>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<FavoriteIcon />}
              onClick={this.openModal}
            >
              Save Palette
            </Button>
          </div>
>>>>>>> branch-1
        </AppBar>
        {showDialog && (
          <DialogSavePalette
            handleSavePalette={handleSavePalette}
            prevPalettes={prevPalettes}
            // showDialog
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}
export default withStyles(style, { withTheme: true })(SavePaletteForm);
