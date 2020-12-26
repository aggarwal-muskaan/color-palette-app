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
  // add constructor to init state with seedColors
  constructor(props) {
    super(props);
    const localPalettes = JSON.parse(window.localStorage.getItem("myPalettes"));
    this.state = {
      myPalettes: localPalettes || seedColors,
    };
    this.addNewPalette = this.addNewPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id) {
    return this.state.myPalettes.find(function (palette) {
      return palette.id === id.toLowerCase();
    });
  }

  storeInLocalStorage() {
    window.localStorage.setItem(
      "myPalettes",
      JSON.stringify(this.state.myPalettes)
    );
  }

  //adding new palettes created by user to seedColors(array)
  addNewPalette(newPalette) {
    this.setState(
      { myPalettes: [...this.state.myPalettes, newPalette] },
      //once state is updated,then callback func will be called
      this.storeInLocalStorage
    );
  }

  // deleting palettes and saving the result to localStorage
  deletePalette(id) {
    this.setState(
      (st) => ({
        myPalettes: st.myPalettes.filter((palette) => palette.id !== id),
      }),
      this.storeInLocalStorage
    );
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
                prevPalettes={myPalettes}
                savePalette={this.addNewPalette}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <PaletteList
                palettes={myPalettes}
                deletePalette={this.deletePalette}
                {...routeProps}
              />
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
