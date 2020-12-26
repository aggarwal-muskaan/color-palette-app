import { DRAWER_WIDTH, NAV_HEIGHT } from "../constants";

const drawerWidth = DRAWER_WIDTH;
const navHeight = NAV_HEIGHT;

const styles = (theme) => ({
  root: {
    display: "flex",
    // height: "100vh",
  },

  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    height: "100vh",
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    height: `calc(100vh-${navHeight}px)`,
    // height: "100%",
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    width: "100%",
    // alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    width: "48%",
  },
});

export default styles;
