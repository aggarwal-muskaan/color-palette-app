// import "./App.css";
// import React, { Component } from "react";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import Palette from "./Palette";
import SingleColorShades from "./SingleColorShades";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import { Component } from "react";

class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id.toLowerCase();
    });
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <PaletteList palettes={seedColors} {...routeProps} />
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
            render={() => <SingleColorShades />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
