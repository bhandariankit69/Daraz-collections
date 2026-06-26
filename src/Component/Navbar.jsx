import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context";
import  { useState } from "react";
import {createContext } from "react";
import React from "react";
import { ThemeContext } from "../Themecontext/Theme";

function Navbar() {
  const theme = useContext(ThemeContext);
  console.log(theme)
  const siteName = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };
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

      <div style={{ display: "flex", gap: "20px"  }}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Home
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Products
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Contact
        </Link>
            <button className="mode-btn" onClick={toggleMode}>
            {darkMode ? "☀️ " : "🌙 "}
      </button>
      </div>
    </nav>
  );
}

export default Navbar;