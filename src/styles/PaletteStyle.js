import breakpoint from "./breakpoints";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  colors: {
    height: "90%",
  },
  goBack: {
    width: "calc(100%/6)",
    height: "calc(100%/3)",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-6px",
    opacity: 1,
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none",
    },
    // [breakpoint.down("lg")]: {
    //   width: "25%",
    //   height: "33.3333%",
    // },
    [breakpoint.down("md")]: {
      width: "calc(100%/5)",
      height: "calc(100%/4)",
    },
    [breakpoint.down("xs")]: {
      width: "100%",
      height: "calc(100%/18)",
    },
  },
};
export default styles;
