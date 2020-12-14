import React, { Component } from "react";
import "./ColorBoxes.css";
export default class ColorBoxes extends Component {
  render() {
    return (
      <div style={{ background: this.props.color }} className="ColorBoxes">
        <span>{this.props.name}</span>
        <span>More</span>
      </div>
    );
  }
}
