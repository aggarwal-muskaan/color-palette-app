import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyle";

class PaletteList extends Component {
  showPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palette/createnew">Create New Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((p) => (
              <MiniPalette
                {...p}
                handleClick={() => this.showPalette(p.id)}
                key={p.id}
                id={p.id}
                handleDelete={deletePalette}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
