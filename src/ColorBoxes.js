import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import "./ColorBoxes.css";
import styles from "./styles/ColorBoxesStyle";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

class ColorBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }
  render() {
    const { color, name, yourUrl, seemoreLink, classes } = this.props;
    const { copied } = this.state;
    // const isDarkColor = chroma(color).luminance() <= 0.08;
    // const isLightColor = chroma(color).luminance() >= 0.65;
    return (
      //   <div style={{ background: this.props.color }} className="ColorBoxes">
      //     <span>{this.props.name}</span>
      //     <span>More</span>
      //   </div>
      <div style={{ background: color }} className={classes.ColorBoxes}>
        <div
          style={{ background: color }}
          // className={`copy-overlay ${copied && "show"}`}
          className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
        />
        <div
          className={`${classes.copyMessage} ${copied && classes.showMessage}`}
        >
          <h1 className={classes.colorName}>copied!</h1>
          <p className={classes.copyText}>{color}</p>
        </div>
        <div className="ColorBoxes-copy">
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          {/* <span className={`classes.boxContent classes.colorName`}>{name}</span> */}
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
            <button className={classes.copyButton}>Copy</button>
          </CopyToClipboard>
        </div>
        {seemoreLink && (
          <Link
            to={yourUrl}
            //stops another event
            //  onClick={(e) => e.stopPropagation()}
          >
            <button className={classes.seeMore}>More</button>
          </Link>
        )}
      </div>
    );
  }
}
export default withStyles(styles)(ColorBoxes);
