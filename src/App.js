// import "./App.css";
import seedColors from "./seedColors";
import Palette from "./Palette";

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[5]} />
      {/* <Palette seedColors={seedColors[5]} /> */}
    </div>
  );
}

export default App;
