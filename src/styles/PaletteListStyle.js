import breakpoint from "./breakpoints";
const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
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
      gridGap: "1rem",
    },
    // overflowX: "hidden",
  },
};
export default styles;
