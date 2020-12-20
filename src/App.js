// import "./App.css";
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
            path="/palette/createnew"
            // /* order matters so that it don't redirect to /palette/'id' */
            render={() => <NewPaletteForm />}
          />
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
