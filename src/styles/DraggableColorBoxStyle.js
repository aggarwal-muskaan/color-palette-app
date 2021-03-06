// export default {
//   box: {
//     width: "20%",
//     height: "25%",
//     margin: "0 auto",
//     display: "inline-block",
//     position: "relative",
//     cursor: "pointer",
//     marginBottom: "-3.5px",
//   },
// };
import chroma from "chroma-js";
import breakpoint from "./breakpoints";

const style = {
  box: {
    width: "20%",
    // TODO: fix height ,parent element
    height: "23%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    // marginBottom: "-5.5px",
    marginBottom: "-6px",
    "&:hover svg": {
      color: (props) =>
        chroma(props.clr.color).luminance() <= 0.08
          ? "white"
          : "rgba(0, 0, 0, 0.9)",
      transform: "scale(1.5)",
    },
    [breakpoint.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [breakpoint.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [breakpoint.down("sm")]: {
      width: "100%",
      height: "5%",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: (props) =>
      chroma(props.clr.color).luminance() <= 0.08
        ? "rgba(255,255,255,0.7)"
        : "rgba(0, 0, 0, 0.9)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    [breakpoint.down("sm")]: {
      alignItems: "center",
    },
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};

export default style;
