import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBoxes.css";
import chroma from "chroma-js";
import { Link } from "react-router-dom";

export default class ColorBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }
  render() {
    const { color, name, yourUrl, seemoreLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(color).luminance() <= 0.08;
    const isLightColor = chroma(color).luminance() >= 0.65;
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
          <h1 className={isLightColor && "dark-text"}>copied</h1>
          <p className={isLightColor && "dark-text"}>{color}</p>
        </div>
        <div className="ColorBoxes-copy">
          <span className={isDarkColor && "light-text"}>{name}</span>
          <CopyToClipboard
            text={color}
            onCopy={() =>
              this.setState(
                { copied: true }
                // , () => {
                //   setTimeout(() => {
                //     this.setState({ copied: false });
                //   }, 1500);
                // }
              )
            }
          >
            <button className={`${isLightColor && "dark-text"}`}>Copy</button>
          </CopyToClipboard>
        </div>
        {seemoreLink && (
          <Link
            to={yourUrl}
            //stops another event
            //  onClick={(e) => e.stopPropagation()}
          >
            <button className={`see-more ${isLightColor && "dark-text"}`}>
              More
            </button>
          </Link>
        )}
      </div>
    );
  }
}
