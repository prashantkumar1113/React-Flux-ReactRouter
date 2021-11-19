import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ol className="navbar-nav">
        <li className="nav-item ">
          <a className="nav-item" href="/home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-item" href="/about">
            About
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default Header;
