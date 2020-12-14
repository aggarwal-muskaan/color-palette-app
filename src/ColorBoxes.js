import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBoxes.css";
export default class ColorBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }
  render() {
    const { color, name } = this.props;
    const { copied } = this.state;
    return (
      //   <div style={{ background: this.props.color }} className="ColorBoxes">
      //     <span>{this.props.name}</span>
      //     <span>More</span>
      //   </div>
      <div style={{ background: color }} className="ColorBoxes">
        <div
          style={{ background: color }}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`overlay-msg ${copied && "show"}`}>
          <h1>copied</h1>
          <p>{color}</p>
        </div>
        <div className="ColorBoxes-copy">
          <span>{name}</span>
          <CopyToClipboard
            text={color}
            onCopy={() =>
              this.setState({ copied: true }, () => {
                setTimeout(() => {
                  this.setState({ copied: false });
                }, 1500);
              })
            }
          >
            <button>Copy</button>
          </CopyToClipboard>
        </div>
        <button className="see-more">More</button>
      </div>
    );
  }
}
