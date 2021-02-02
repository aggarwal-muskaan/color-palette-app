import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

// export default class FourZeroFour extends Component {
//   render() {
//     return (
//       <div>
//         <code>Error 404</code>
//         <section>Not Found!!!</section>
//       </div>
//     );
//   }
// }

// import react from "react";
function FourZeroFour() {
  return (
    <h1
      style={{
        textAlign: "center",
      }}
    >
      <code>Error:404</code>
      <section>
        <span>😑</span>Requested URL Not Found!!!<span>😑</span>
      </section>
      <Link to="/">
        <Button variant="contained" color="secondary">
          Take me Back
        </Button>
      </Link>
    </h1>
  );
}

export default FourZeroFour;
