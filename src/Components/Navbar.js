import React from "react";
import { useRef, useEffect } from "react";
import Button from "./Button";

function Navbar() {
  const buttonStyle = {
    background: "blue",
    padding: "10px 15px",
    color: "white",
    borderRadius: "5px",
    border: "none",
  };
  const navRef = useRef();

  useEffect(() => {
    // This will be called after the component renders for the first time.
    // It will ensure that the `navRef.current` variable is defined.
  }, []);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsiveNav");
  };

  return (
    <header>
      <h1>Met Finance</h1>
      <nav ref={navRef}>
        <a href="/#">Demos</a>
        <a href="/#">About</a>
        <a href="/#">Blog</a>
        <a href="/#">Pages</a>
        <a href="/#">Contact</a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          close
        </button>
      </nav>
      <div className="nav-right-close">
        <button className="nav-btn" onClick={showNavbar}>
          Menu
        </button>
      </div>
      <Button
        Children="Download App"
        style={buttonStyle}
        className={"navDownloadButton btnShow"}
      />
    </header>
  );
}

export default Navbar;
