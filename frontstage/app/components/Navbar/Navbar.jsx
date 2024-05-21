"use client";
//
import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="brand-title">台中市政府 API寫得好爛</div>
      <a href="#" className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/">首頁</a>
          </li>
          <li>
            <a href="/authors">作者</a>
          </li>
          <li>
            <a href="/contributors">貢獻者</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
