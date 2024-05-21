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
            <a href="https://www.taichung.gov.tw/8868/9948/10041/722369/post">
              API提供者
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
