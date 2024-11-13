import { Link } from "react-router-dom";
import penniesLogo from "../assets/images/pennies.png"; // Import the image

const Header = () => (
  <header
    style={{
      backgroundColor: "#333",
      color: "#fff",
      textAlign: "center",
      padding: "1em",
    }}
    className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"
  >
    <img
      className="me-2"
      src={penniesLogo}
      alt="Penny Pinchers Logo"
      width="40"
      height="32"
    />
    <span className="fs-4 ms-2">Penny Pinchers</span>
    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <Link className="me-3 py-2 text-decoration-none" to="/">
        Home
      </Link>
      <Link className="py-2 text-decoration-none" to="/loginpage">
        Login
      </Link>
    </nav>
  </header>
);

export default Header;
