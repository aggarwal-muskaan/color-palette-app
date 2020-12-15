// import "./App.css";
import seedColors from "./seedColors";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(seedColors[3]));
  return (
    <div className="App">
      <Palette {...seedColors[5]} />
      {/* <Palette seedColors={seedColors[5]} /> */}
      <Palette {...seedColors[2]} />
    </div>
  );
}

export default App;
