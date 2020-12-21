import "./App.css";
// import React, { Component } from "react";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import NewPaletteForm from "./NewPaletteForm";
import Palette from "./Palette";
import SingleColorShades from "./SingleColorShades";

import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import { Component } from "react";

class App extends Component {
  // add constructor to init state with seedColors
  constructor(props) {
    super(props);
    this.state = {
      myPalettes: seedColors,
    };
    this.addNewPalette = this.addNewPalette.bind(this);
  }

  findPalette(id) {
    return this.state.myPalettes.find(function (palette) {
      return palette.id === id.toLowerCase();
    });
  }

  addNewPalette(newPalette) {
    this.setState({ myPalettes: [...this.state.myPalettes, newPalette] });
  }

  render() {
    const { myPalettes } = this.state;

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/palette/createnew"
            // /* order matters so that it don't redirect to /palette/'id' */
            render={(routeProps) => (
              <NewPaletteForm
                {...routeProps}
                savePalette={this.addNewPalette}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <PaletteList palettes={myPalettes} {...routeProps} />
            )}
          />

          <Route
            exact
            path="/palette/:id"
            render={(routeProps) => (
              <Palette
                p={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />

          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={(routeProps) => (
              <SingleColorShades
                colorId={routeProps.match.params.colorId}
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId)
                )}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
