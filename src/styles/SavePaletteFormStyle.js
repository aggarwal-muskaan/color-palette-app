import { DRAWER_WIDTH, NAV_HEIGHT } from "../constants";
import breakpoint from "./breakpoints";
const drawerWidth = DRAWER_WIDTH;

const style = (theme) => ({
  root: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  navbarText: {
    [breakpoint.down("md")]: {
      display: "none",
    },
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    height: NAV_HEIGHT,
    backgroundColor: "#C9A4A0", //rosy brown pastel color
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  // Toolbar: { display: "flex", width: "100vw", justifyContent: "space-around" },

  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  btns: {
    marginRight: 20,
    display: "flex",
    width: "300px",
    justifyContent: "space-between",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
    },
    // TODO:
    [breakpoint.down("sm")]: {
      marginRight: "8px",
      // width: "150px",
      "& button": {
        height: "50px",
        margin: "0 0.2rem",
        // padding: "0.3rem",
      },
    },
  },
});

export default style;
