import React, { Component } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

class DialogSavePalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPaletteName: "",
      //   open: this.props.showDialog,
      open: true,
      openEmojiDialog: false,
    };
  }
  // ?const [open, setOpen] = React.useState(false);     //REACT HOOKS

  componentDidMount() {
    //validating palette names
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.prevPalettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  showEmoPicker = () => {
    this.setState({ openEmojiDialog: true, open: false });
  };
  // handleClose = () => {
  //   this.setState({ open: false });
  // };

  handleNameChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  savePalette = (userEmo) => {
    const newPalette = {
      paletteName: this.state.userPaletteName.trim(),
      emoji: userEmo.native,
    };
    this.props.handleSavePalette(newPalette);
  };

  render() {
    const { userPaletteName, open, openEmojiDialog } = this.state;
    const { closeModal } = this.props;
    return (
      <div>
        {/* emoji dialog */}
        <Dialog onClose={closeModal} open={openEmojiDialog}>
          <DialogTitle id="form-dialog-title">Pick A Palette Emoji</DialogTitle>
          <Picker title="Choose an emoji" onSelect={this.savePalette} />
        </Dialog>

        {/* form dialog */}
        <Dialog
          open={open}
          onClose={closeModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Give Palette Name</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. Make sure it's
              unique!
            </DialogContentText>

            <ValidatorForm onSubmit={this.showEmoPicker}>
              <TextValidator
                label="Palette Name"
                name="userPaletteName"
                fullWidth
                margin="normal"
                value={userPaletteName}
                onChange={this.handleNameChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Palette name is required.",
                  "Name already taken.",
                ]}
              />
              <DialogActions>
                <Button type="submit" variant="contained" color="secondary">
                  Save Palette
                </Button>
                <Button
                  onClick={closeModal}
                  color="default"
                  variant="contained"
                >
                  Cancel
                </Button>
              </DialogActions>
            </ValidatorForm>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
export default DialogSavePalette;
