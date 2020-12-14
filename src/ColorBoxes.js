import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBoxes.css";
export default class ColorBoxes extends Component {
  render() {
    const { color, name } = this.props;
    return (
      //   <div style={{ background: this.props.color }} className="ColorBoxes">
      //     <span>{this.props.name}</span>
      //     <span>More</span>
      //   </div>
      <div style={{ background: color }} className="ColorBoxes">
        <div className="ColorBoxes-copy">
          <span>{name}</span>
          <CopyToClipboard text={color}>
            <button>Copy</button>
          </CopyToClipboard>
        </div>
        <button className="see-more">More</button>
      </div>
    );
  }
}
