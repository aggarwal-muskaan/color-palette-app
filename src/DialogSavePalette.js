import React, { Component } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

<<<<<<< HEAD
=======
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

>>>>>>> branch-1
class DialogSavePalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPaletteName: "",
      //   open: this.props.showDialog,
      open: true,
<<<<<<< HEAD
    };
  }
  // ? const [open, setOpen] = React.useState(false);     //REACT HOOKS
=======
      openEmojiDialog: false,
    };
  }
  // ?const [open, setOpen] = React.useState(false);     //REACT HOOKS
>>>>>>> branch-1

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

<<<<<<< HEAD
=======
  showEmoPicker = () => {
    this.setState({ openEmojiDialog: true, open: false });
  };
>>>>>>> branch-1
  // handleClose = () => {
  //   this.setState({ open: false });
  // };

  handleNameChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

<<<<<<< HEAD
  render() {
    const { userPaletteName, open } = this.state;
    const { handleSavePalette, closeModal } = this.props;
    return (
      <div>
=======
  savePalette = (userEmo) => {
    const newPalette = {
      paletteName: this.state.userPaletteName.trim(),
      emoji: userEmo.native,
    };
    this.props.handleSavePalette(newPalette);
    this.setState({ openEmojiDialog: false });
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
>>>>>>> branch-1
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

<<<<<<< HEAD
            <ValidatorForm onSubmit={() => handleSavePalette(userPaletteName)}>
=======
            <ValidatorForm onSubmit={this.showEmoPicker}>
>>>>>>> branch-1
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
