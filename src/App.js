// import "./App.css";
import seedColors from "./seedColors";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";

function App() {
  return (
    <div className="App">
      <Palette p={generatePalette(seedColors[4])} />
      {/* <Palette seedColors={seedColors[5]} /> */}
      {/* <Palette {...seedColors[2]} /> */}
    </div>
  );
}

export default App;
