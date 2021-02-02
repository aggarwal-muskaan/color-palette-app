import Avatar from "@material-ui/core/Avatar";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyle";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteDialog: false,
      deletePaletteId: "",
    };
    this.wrapper = React.createRef();
  }

  openDialog = (newid) => {
    this.setState({ deleteDialog: true, deletePaletteId: newid });
  };

  closeDialog = () => {
    this.setState({ deleteDialog: false, deletePaletteId: "" });
  };

  showPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  };

  handleDelete = () => {
    this.props.deletePalette(this.state.deletePaletteId);
    this.closeDialog();
  };

  render() {
    const { palettes, classes } = this.props;
    const { deleteDialog } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Colors Palettes</h1>
            <Link to="/palette/createnew">Create New Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((p) => (
              <CSSTransition
                key={p.id}
                classNames="fade"
                timeout={500}
                ref={this.wrapper}
              >
                <MiniPalette
                  //? easy to extract
                  {...p}
                  //* was causing re-rendering even after using PureComponent as it is inline binding /*! handleClick={() => this.showPalette(p.id)}
                  goToPalette={this.showPalette}
                  key={p.id}
                  openDialog={this.openDialog}
                  id={p.id}

                  // handleDelete={deletePalette}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>

        <Dialog
          open={deleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={this.closeDialog}
        >
          <DialogTitle id="delete-dialog-title">
            Want To Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: green[100], color: green[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
