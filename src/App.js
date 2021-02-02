// import "./App.css";
// import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Component } from "react";

import Page from "./Page.js";
import PaletteList from "./PaletteList";
import NewPaletteForm from "./NewPaletteForm";
import Palette from "./Palette";
import SingleColorShades from "./SingleColorShades";

import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import FourZeroFour from "./FourZeroFour.js";

class App extends Component {
  //* add constructor to init state with seedColors
  constructor(props) {
    super(props);
    const localPalettes = JSON.parse(window.localStorage.getItem("myPalettes"));
    this.state = {
      myPalettes: localPalettes || seedColors,
    };
    this.addNewPalette = this.addNewPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  // findPalette(id) {
  //   const q = this.state.myPalettes.find(function (palette) {
  //     return palette.id === id.toLowerCase();
  //   });
  //   if (q) {
  //     return q;
  //   } else return "not found";
  // }

  findPalette(id) {
    return this.state.myPalettes.find(
      (palette) => palette.id === id.toLowerCase()
    );
  }

  storeInLocalStorage() {
    window.localStorage.setItem(
      "myPalettes",
      JSON.stringify(this.state.myPalettes)
    );
  }

  //* adding new palettes created by user to seedColors(array)
  addNewPalette(newPalette) {
    this.setState(
      { myPalettes: [...this.state.myPalettes, newPalette] },
      //once state is updated,then callback func will be called
      this.storeInLocalStorage
    );
  }

  //* deleting palettes and saving the result to localStorage
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
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/createnew"
                  //!  order matters so that it don't redirect to /palette/'id'
                  render={(routeProps) => (
                    <Page>
                      <NewPaletteForm
                        {...routeProps}
                        prevPalettes={myPalettes}
                        savePalette={this.addNewPalette}
                      />
                    </Page>
                  )}
                />

                <Route
                  exact
                  path="/"
                  render={(routeProps) => (
                    <Page>
                      <PaletteList
                        palettes={myPalettes}
                        deletePalette={this.deletePalette}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />

                <Route
                  exact
                  path="/palette/:id"
                  render={(routeProps) => {
                    const foundPalette = this.findPalette(
                      routeProps.match.params.id
                    );
                    if (foundPalette) {
                      return (
                        <Page>
                          <Palette p={generatePalette(foundPalette)} />
                        </Page>
                      );
                    } else return <FourZeroFour />;
                  }}
                />

                {/* <Route
                  exact
                  path="/palette/:id"
                  render={(routeProps) => (
                    <Page>
                      <Palette
                        p={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    </Page>
                  )}
                /> */}
                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={(routeProps) => {
                    const foundPalette = this.findPalette(
                      routeProps.match.params.paletteId
                    );
                    if (foundPalette) {
                      return (
                        <Page>
                          <SingleColorShades
                            colorId={routeProps.match.params.colorId}
                            palette={generatePalette(foundPalette)}
                          />
                        </Page>
                      );
                    } else return <FourZeroFour />;
                  }}
                />

                {/* 
                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={(routeProps) => (
                    <Page>
                      <SingleColorShades
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    </Page>
                  )}
                /> */}

                <Route component={FourZeroFour} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
