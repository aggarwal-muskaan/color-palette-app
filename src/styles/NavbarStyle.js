import breakpoint from "./breakpoints";

const styles = {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
    // [breakpoint.down("sm")]: {
    //   justifyContent: "space-around",
    // },
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    [breakpoint.down("sm")]: {
      // width: "100%",
      display: "none",
    },
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover": {
      backgroundColor: "hsl(2, 71%, 51%)",
      outline: "none",
      border: "2px solid hsl(2, 71%, 51%)",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      // marginLeft: "7px",
      // marginTop: "-3px",
      margin: "-3px 0 0 7px",
    },
    [breakpoint.down("sm")]: {
      width: "180px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "2.5rem",
  },
};
export default styles;
