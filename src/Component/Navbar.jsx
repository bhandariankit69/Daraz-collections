import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context";

function Navbar() {
  const siteName=useContext(AuthContext);
  console.log("siteName",siteName);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "lightblue",
      }}
    >
      <h2>Daraz Collection {siteName.user}</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Home
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Products
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;