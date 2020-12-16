import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return palettes.map((p) => (
      <p>
        <Link to={`/palette/${p.id}`}>
          <MiniPalette {...p} />
        </Link>
      </p>
    ));
  }
}
