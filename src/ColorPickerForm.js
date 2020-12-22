import React, { Component } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import { SketchPicker } from "react-color";

export default class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: this.props.colors,
      currentColor: "#857c21",
      currentColorName: "",
    };
    this.addNewColor = this.addNewColor.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  componentDidMount() {
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

  handleNameChange = (event) => {
    // this.setState({ currentColorName: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  };

  //sync colorpicker with "add button"
  handleColorChange = (ob) => {
    this.setState({ currentColor: ob.hex });
  };

  addNewColor() {
    const newColor = {
      name: this.state.currentColorName,
      color: this.state.currentColor,
    };
    this.props.addColor(newColor);
    this.setState({ currentColorName: "", currentColor: "" });
  }

  render() {
    const { paletteLimit } = this.props;
    const { currentColor, currentColorName } = this.state;
    return (
      <div>
        <SketchPicker color={currentColor} onChange={this.handleColorChange} />
        {/* <ChromePicker
            color={currentColor}
            onChangeComplete={this.handleColorChange}
          /> */}
        <ValidatorForm onSubmit={this.addNewColor} ref="form">
          <TextValidator
            name="currentColorName"
            value={currentColorName}
            onChange={this.handleNameChange}
            validators={["required", "isColorNameUnique", "isColorValueUnique"]}
            errorMessages={[
              "Color name is required.",
              "Color name must be unique.",
              "Color already used!",
            ]}
          />
          <Button
            variant="contained"
            style={{ backgroundColor: paletteLimit ? "grey" : currentColor }}
            size="large"
            // color="secondary"
            disabled={paletteLimit}
            type="submit"
          >
            {paletteLimit ? "PALETTE FULL" : "ADD COLOR"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
