import breakpoint from "./breakpoints";
import bg from "./background.svg";
const styles = {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    // backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#8d2640",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "scroll",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    marginBottom: "2rem",
    // height: "100%",
    [breakpoint.down("xl")]: {
      width: "80%",
    },
    [breakpoint.down("xs")]: {
      width: "75%",
    },
  },

  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    "& h1,& a": { color: "white" },
    // "& h1": { fontSize: "2rem" },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    height: "80%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [breakpoint.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [breakpoint.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.5rem",
    },
    // overflowX: "hidden",
  },
};
export default styles;
